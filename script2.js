const products = [
  {
    name: "Dell Latitude 5520", price: 30000, category: "laptops", image: "images/images.jpg",
    specs: { RAM: "16GB DDR4", Storage: "512GB SSD", Battery: "12 Hours", Display: "15.6 inch FHD" }
  },

  {
    name: "HP EliteBook 850 G7", price: 25000, category: "laptops", image: "images/imag7i890o09es.jpg", bestSeller: true,
    specs: { RAM: "16GB DDR4", Storage: "1TB SSD", Battery: "10 Hours", Display: "15.6 inch FHD" }
  },

  {
    name: "MacBook Pro 16 M4 Pro", price: 50000, category: "laptops", isBestSeller: true, image: "images/fgg.jpg",
    specs: { RAM: "24GB Unified", Storage: "512GB SSD", Battery: "22 Hours", Display: "16.2 inch Retina" }
  },

  {
    name: "Samsung Galaxy S26 Ultra", price: 75000, category: "phones", image: "images/imagfrgtes.jpg", bestSeller: true,
    specs: { RAM: "12GB", Storage: "256GB", Battery: "5000mAh", Camera: "200MP" }
  },

  {
    name: "iphone 16 pro max", price: 65000, category: "phones", image: "images/image1.jpg", bestSeller: false,
    specs: { RAM: "8GB", Storage: "256GB", Battery: "4685mAh", Processor: "Apple A18 Pro", Camera: "48MP" }
  },

  {
    name: "iPhone 17", price: 75000, category: "phones", image: "images/Untitled.jpg", bestSeller: true,
    specs: { RAM: "8GB", Storage: "128GB", Battery: "3900mAh", Processor: "Apple A19", Camera: "48MP" }
  },

  {
    name: "cardoO Watch X Apex", price: 4500, category: "watches", image: "images/d60615f8ae0dfacb5d70cc6687e5ed5f.jpg",
    specs: { Display: "1.43 inch AMOLED", Battery: "7 Days", "Water Resistance": "5ATM", GPS: "Yes", Sensors: "Heart Rate, SpO2" }
  },

  {
    name: "oraimo Watch 5R Pro", price: 3200, category: "watches", image: "images/61s734tDFyL.jpg",
    specs: { Display: "1.85 inch HD", Battery: "10 Days", "Water Resistance": "IP68", GPS: "No", Sensors: "Heart Rate, SpO2" }
  },

  {
    name: "HUAWEI WATCH FIT 4 Smart", price: 3500, category: "watches", image: "images/iggmages.jpg", bestSeller: true,
    specs: { Display: "1.82 inch AMOLED", Battery: "10 Days", "Water Resistance": "5ATM", GPS: "Yes", Sensors: "Heart Rate, SpO2, ECG" }
  },

  {
    name: "UGREEN 20000mAh 100W", price: 1200, category: "power", image: "images/51aqDfiYsbL._AC_SY300_SX300_QL70_ML2_.jpg",
    specs: { Capacity: "20000mAh", "Max Output": "100W", Ports: "2x USB-C, 1x USB-A", Weight: "440g", "Fast Charge": "Yes" }
  },

  {
    name: "Joyroom JR-QP191 22.5W", price: 1000, category: "power", image: "images/71heguy9eTL._AC_SY300_SX300_QL70_ML2_.jpg",
    specs: { Capacity: "10000mAh", "Max Output": "22.5W", Ports: "1x USB-C, 2x USB-A", Weight: "220g", "Fast Charge": "Yes" }
  },

  {
    name: "Zolo Power Bank, 20,000mAh 22.5W Max", price: 1850, category: "power", image: "images/im77uages.jpg",
    specs: { Capacity: "20000mAh", "Max Output": "22.5W", Ports: "1x USB-C, 2x USB-A", Weight: "380g", "Fast Charge": "Yes" }
  }
];

<<<<<<< HEAD
let btn_mode = document.querySelector(".mode")


btn_mode.addEventListener("click", () => {
  document.body.classList.toggle('white')

})
=======
if (localStorage.getItem("theme") === "white") {
  document.body.classList.add("white");
}

let btn_mode = document.querySelector(".mode")

if (btn_mode) {
  btn_mode.addEventListener("click", () => {
    document.body.classList.toggle('white')
    if (document.body.classList.contains('white')) {
      localStorage.setItem("theme", "white");
    } else {
      localStorage.removeItem("theme");
    }
  })
}
>>>>>>> a8acde8 (first commit)




function createCard(i) {
  return `
    <div class="product-card" style="
        display: inline-block; 
        vertical-align: top; 
        text-align: center; 
        width: 220px; 
        margin: 15px; 
        background: rgba(255, 255, 255, 0.1); 
        backdrop-filter: blur(10px); 
        border: 1px solid rgba(255, 255, 255, 0.2); 
        padding: 15px; 
        border-radius: 15px; 
        box-shadow: 0 8px 32px 0 rgba(43, 33, 33, 0.3);
        transition: transform 0.3s ease;
    " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      
      <div style="position: relative;">
        <img src="${products[i].image}" alt="${products[i].name}" style="width: 100%; height: 160px; object-fit: contain; border-radius: 10px;">
      </div>

      <h3 style="margin-top: 12px; font-size: 1.1rem; height: 45px; overflow: hidden; color: #778cb7c2;">
        ${products[i].name}
      </h3>
      
      <p style="font-size: 1.2rem; font-weight: bold; color: #b2bcffff; margin: 10px 0;">
        ${products[i].price}L.E
      </p>

      <div style="display: flex; flex-direction: column; gap: 8px;">
          <button onclick="openModal(${i})" style="background: #001f6162; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer;">
            View Details
          </button>

          <button onclick="addToCart(${i})" style="background: #2f007b99; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer;">
            🛒 Add to Cart
          </button>
      </div>
    </div>
  `;

}

function showProducts() {
  let all = document.getElementById("all-products");
  let laptops = document.getElementById("laptops-products");
  let phones = document.getElementById("phones-products");
  let watches = document.getElementById("watches-products");
  let power = document.getElementById("power-products");

  for (let i = 0; i < products.length; i++) {
    let card = createCard(i);
    all.innerHTML += card;

    if (products[i].category === "laptops") laptops.innerHTML += card;
    else if (products[i].category === "phones") phones.innerHTML += card;
    else if (products[i].category === "watches") watches.innerHTML += card;
    else if (products[i].category === "power") power.innerHTML += card;
  }
}
function openModal(index) {
  let p = products[index];
  let specsHTML = "";
  for (let key in p.specs) {
    specsHTML += `<tr><td><b>${key}</b></td><td>${p.specs[key]}</td></tr>`;
  }
  document.getElementById("modal-img").src = p.image;
  document.getElementById("modal-name").innerText = p.name;
  document.getElementById("modal-price").innerText = p.price + " L.E";
  document.getElementById("modal-specs").innerHTML = specsHTML;
  document.getElementById("modal").style.display = "block";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
function toggleTheme() {
  document.body.classList.toggle("dark");
}

if (window.location.pathname.includes("product-details.html")) {
  showProducts();


  let params = new URLSearchParams(window.location.search);
  let query = params.get("q");
  if (query) {
    let searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.value = query;
      liveSearch();
    }
  }
}



function liveSearch() {
  let term = document.getElementById("searchInput").value.toLowerCase();
  let container = document.getElementById("all-products");


  if (term === "") {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = "";
  let found = false;

  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(term)) {
      container.innerHTML += createCard(i);
      found = true;
    }
  }

  if (!found) {
    container.innerHTML = "<p style='color:white;'>Sorry, no product found with this name.</p>";
  }
}

function filterCategory(category, element) {
  if (element) {
    const navLinks = document.querySelectorAll('.category-nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
  }

  let container = document.getElementById("all-products");
  container.innerHTML = "";


  const sections = ["laptops", "phones", "watches", "power"];
  sections.forEach(id => {
    let sectionElement = document.getElementById(id);
    if (sectionElement) sectionElement.style.display = "none";
  });


  for (let i = 0; i < products.length; i++) {
    if (category === "all" || products[i].category === category) {
      container.innerHTML += createCard(i);
    }
  }


  document.getElementById("all").style.display = "block";


  document.querySelector("#all h2").innerText = category.toUpperCase();
}
function showBestSellers() {
  const container = document.getElementById("bestSellerContainer");
  if (!container) return;

  container.innerHTML = "";

  products.forEach((product, index) => {
    if (product.bestSeller) {
      container.innerHTML += `
        <div class="card" style="
            display: inline-block; 
            vertical-align: top; 
            text-align: center; 
            width: 220px; 
            margin: 15px; 
            background: rgba(255, 255, 255, 0.1); 
            backdrop-filter: blur(10px); 
            border: 1px solid rgba(255, 255, 255, 0.2); 
            padding: 15px; 
            border-radius: 15px; 
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease;
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">

          <img src="${product.image}" style="width: 100%; height: 160px; object-fit: contain; border-radius: 10px;">

          <h3 style="margin-top: 12px; font-size: 1.1rem; height: 45px; overflow: hidden;">${product.name}</h3>

          <p style="font-size: 1.2rem; font-weight: bold; color: #a8b9f9ff; margin: 10px 0;">${product.price} L.E</p>

          <button onclick="addToCart(${index})" style="background: #2f007b99; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer; width: 100%;">
            Add to Cart
          </button>

        </div>
      `;
    }
  });
}


showBestSellers();



<<<<<<< HEAD
let cart = JSON.parse(localStorage.getItem("cart")) || [];
=======
let cart = [];
try {
  let storedCart = JSON.parse(localStorage.getItem("cart"));
  if (Array.isArray(storedCart)) {
    cart = storedCart;
  }
} catch (e) {
  cart = [];
}
>>>>>>> a8acde8 (first commit)

function addToCart(index) {
  const product = products[index];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showNotification(product.name + " added to cart!");
}



function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.innerText = cart.length;
  }
  manageViewCartButton();
}

function displayCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const totalElement = document.getElementById("total");
  const checkoutForm = document.getElementById("checkoutForm");
  const emptyCartBtn = document.getElementById("emptyCartBtn");

  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p style='text-align: center; font-size: 18px;'>Your cart is empty.</p>";
    cartItemsContainer.innerHTML += `
      <div style="text-align: center; margin-top: 20px;">
          <button onclick="window.location.href='product-details.html'" 
              style="background: #6366f1; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold; width: max-content; display: inline-block;">
              Explore Products
          </button>
      </div>
    `;
    totalElement.innerText = "Total: 0 L.E";
    if (checkoutForm) checkoutForm.style.display = "none";
    if (emptyCartBtn) emptyCartBtn.style.display = "none";
    return;
  }

  if (checkoutForm) checkoutForm.style.display = "block";
  if (emptyCartBtn) emptyCartBtn.style.display = "block";

  cart.forEach((item, index) => {
    total += item.price;
    cartItemsContainer.innerHTML += `
      <div class="cart-item" style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #ddd; padding: 10px 0;">
        <div style="display: flex; align-items: center;">
          <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: contain; margin-right: 15px;">
          <div>
            <h4 style="margin: 0;">${item.name}</h4>
            <p style="margin: 5px 0; color: #4CAF50; font-weight: bold;">${item.price} L.E</p>
          </div>
        </div>
        <button onclick="removeFromCart(${index})" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">
          Delete
        </button>
      </div>
    `;
  });

  totalElement.innerText = "Total: " + total + " L.E";
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}


updateCartCount();

function manageViewCartButton() {
  let viewBtn = document.getElementById("view-cart-btn");

  const isAllowedPage = window.location.pathname.includes("index.html") ||
    window.location.pathname.includes("product-details.html") ||
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/");

  if (cart.length > 0 && isAllowedPage) {
    let total = 0;
    cart.forEach(item => total += item.price);

    if (!viewBtn) {
      viewBtn = document.createElement("button");
      viewBtn.id = "view-cart-btn";
      viewBtn.onclick = () => window.location.href = "cart.html";

      viewBtn.style.position = "fixed";
      viewBtn.style.bottom = "30px";
      viewBtn.style.left = "50%";
      viewBtn.style.transform = "translateX(-50%)";
      viewBtn.style.background = "linear-gradient(to right, #736efe, #0a0543ff)";
      viewBtn.style.color = "white";
      viewBtn.style.padding = "15px 40px";
      viewBtn.style.borderRadius = "50px";
      viewBtn.style.border = "none";
      viewBtn.style.fontSize = "18px";
      viewBtn.style.fontWeight = "bold";
      viewBtn.style.boxShadow = "0 8px 25px rgba(115, 110, 254, 0.4)";
      viewBtn.style.cursor = "pointer";
      viewBtn.style.zIndex = "9999";

      document.body.appendChild(viewBtn);
    }
    viewBtn.innerHTML = `<i class="fas fa-shopping-bag" style="margin-right: 10px;"></i> View Cart | ${total.toLocaleString()} L.E`;
    viewBtn.style.display = "block";
  } else {
    if (viewBtn) {
      viewBtn.style.display = "none";
    }
  }
}

function sendOrder() {
  const name = document.getElementById("orderName").value;
  const phone = document.getElementById("orderPhone").value;
  const address = document.getElementById("orderAddress").value;

  if (!name || !phone || !address) {
    showNotification("Please fill all required fields.");
    return;
  }

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();


  document.getElementById("orderName").value = "";
  document.getElementById("orderPhone").value = "";
  document.getElementById("orderAddress").value = "";

  showNotification("Order Sent Successfully! Thank you.");
}

function applyPromo() {
  const promo = document.getElementById("promoCode").value;
  if (!promo) {
    showNotification("Please enter a promo code.");
  } else {
    showNotification("Promo code applied!");
  }
}


