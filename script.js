function signup() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let governorate = document.getElementById("governorate").value;
    let birthday = document.getElementById("birthday").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || address === "" || governorate === "" || birthday === "" || password === "") {
        showNotification("Complete the data entry");
        return;
    }

    let user = {
        name: name,
        email: email,
        address: address,
        governorate: governorate,
        birthday: birthday,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    showNotification("The account has been created successfully");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);

}





function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedUser =
        JSON.parse(localStorage.getItem("user"));

    if (
        storedUser &&
        email === storedUser.email &&
        password === storedUser.password
    ) {

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        showNotification("Login successful");
        setTimeout(() => {
            window.location.href = "profile.html";
        }, 1000);

    }

    else {

        showNotification("Incorrect email or password");

    }

}





window.onload = function () {

    let user =
        JSON.parse(localStorage.getItem("user"));

    let loggedIn =
        localStorage.getItem("loggedIn");

    if (
        window.location.pathname.includes(
            "profile.html"
        )
    ) {

        if (!loggedIn) {

            window.location.href =
                "login.html";

        }

        if (user) {

            document.getElementById(
                "name"
            ).innerText =
                "Name: " + user.name;

            document.getElementById(
                "email"
            ).innerText =
                "Email: " + user.email;

            document.getElementById(
                "address"
            ).innerText =
                "Address: " + user.address;

            document.getElementById(
                "governorate"
            ).innerText =
                "Governorate: " + user.governorate;

            document.getElementById(
                "birthday"
            ).innerText =
                "Birthday: " + user.birthday;
        }

    }

}





function logout() {

    localStorage.removeItem(
        "loggedIn"
    );

    window.location.href =
        "login.html";

}




function performSearch() {
    let params = new URLSearchParams(window.location.search);
    let query = params.get("q");
    let resultsDiv = document.getElementById("results");

    if (query && resultsDiv) {
        query = query.toLowerCase();
        let found = false;
        
        
        products.forEach(function(product, index) {
            if (product.name.toLowerCase().includes(query)) {
                found = true;
                
                resultsDiv.innerHTML += createCard(index); 
            }
        });
        if (!found) document.getElementById("noResults").style.display = "block";
    }
}


window.addEventListener('load', () => {
    if (window.location.pathname.includes("cart.html")) displayCart();
    if (window.location.pathname.includes("search-results.html")) performSearch();
});


window.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                if (window.location.pathname.includes("signup.html")) {
                    event.preventDefault();
                    signup();
                } else if (window.location.pathname.includes("login.html")) {
                    event.preventDefault();
                    login();
                }
            }
        });
    });
});


window.showNotification = function(message) {
    
    
    const existingNotifications = document.querySelectorAll('.custom-toast');
    let bottomOffset = 30;
    existingNotifications.forEach(n => {
        bottomOffset += n.offsetHeight + 10;
    });

    const notification = document.createElement("div");
    notification.className = 'custom-toast';
    
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px;">
            <div style="background: #2cae15; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <i class="fas fa-check" style="color: white; font-size: 16px;"></i>
            </div>
            <span style="font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 500;">${message}</span>
        </div>
    `;
    
    
    Object.assign(notification.style, {
        position: "fixed",
        bottom: `${bottomOffset}px`,
        right: "30px",
        backgroundColor: "#1a1c2c",
        color: "white",
        padding: "16px 24px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(22, 26, 44, 0.24)",
        zIndex: "100000",
        borderLeft: "6px solid #001a3bff",
        transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        opacity: "0",
        transform: "translateX(100px) scale(0.9)",
        minWidth: "300px",
        maxWidth: "450px"
    });
    
    document.body.appendChild(notification);
    
    
    setTimeout(() => {
        notification.style.opacity = "1";
        notification.style.transform = "translateX(0) scale(1)";
    }, 10);
    
    
    setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transform = "translateX(100px) scale(0.9)";
        setTimeout(() => notification.remove(), 500);
    }, 4000);
};


window.alert = function(msg) {
    window.showNotification(msg);
};
