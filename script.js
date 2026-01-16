alert("SCRIPT LOADED");

console.log(cars);

const featuredContainer = document.getElementById("featuredCars");

const cars =
  JSON.parse(localStorage.getItem("cars"))?.length
    ? JSON.parse(localStorage.getItem("cars"))
    : [];

function renderCars(list) {
  featuredContainer.innerHTML = "";

  if (list.length === 0) {
    featuredContainer.innerHTML = "<p style='color:#aaa'>No listings yet.</p>";
    return;
  }

  list.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";

    card.innerHTML = `
      <img src="${car.image}" alt="${car.brand}">
      <div class="car-info">
        <h3>${car.brand} ${car.title}</h3>
        <p class="price">N$ ${car.price}</p>
        <p>${car.notes}</p>
        <a 
          class="btn-primary" 
          href="https://wa.me/2640857746291?text=I'm interested in the ${car.brand} ${car.title}"
          target="_blank"
        >
          WhatsApp Seller
        </a>
      </div>
    `;

    featuredContainer.appendChild(card);
  });
}

renderCars(cars);

function searchCars() {
  const text = document.querySelector(".search-box input").value.toLowerCase();

  const filtered = cars.filter(car =>
    car.brand.toLowerCase().includes(text) ||
    car.title.toLowerCase().includes(text)
  );

  renderCars(filtered);
}
