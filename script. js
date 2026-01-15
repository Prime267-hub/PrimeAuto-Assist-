console.log("PrimeAuto Assist loaded 🚗");

async function loadCars() {
  try {
    const res = await fetch('cars.json');
    const cars = await res.json();

    const container = document.getElementById("listing-area");
    container.innerHTML = "";

    cars.forEach(car => {
      const card = document.createElement("div");
      card.className = "car-card";

      card.innerHTML = `
        <img src="${car.image}" alt="${car.title}">
        <div class="car-info">
          <h3>${car.title}</h3>
          <p class="price">N$ ${car.price.toLocaleString()}</p>
          <p>${car.year} • ${car.mileage.toLocaleString()} km</p>
          <p>${car.location}</p>
          <p>${car.notes}</p>
          <a class="btn-primary" href="https://wa.me/264857746291?text=Hi%20PrimeAuto%20Assist%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(car.title)}">WhatsApp Seller</a>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error("Error loading cars", err);
  }
}

document.addEventListener("DOMContentLoaded", loadCars);

let adminCars = [];

fetch("cars.json")
  .then(res => res.json())
  .then(data => {
    adminCars = data;
    renderAdminCars();
  });

function renderAdminCars() {
  const container = document.getElementById("adminCarList");
  if (!container) return;

  container.innerHTML = "";

  adminCars.forEach((car, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${car.name}</strong><br>
      ${car.price} | ${car.year} | ${car.km}<br>
      ${car.features}
    `;
    container.appendChild(div);
  });
}

function addCar() {
  const car = {
    name: document.getElementById("make").value,
    price: document.getElementById("price").value,
    year: document.getElementById("year").value,
    km: document.getElementById("km").value,
    features: document.getElementById("features").value
  };

  adminCars.push(car);
  renderAdminCars();

  alert("Car added (locally). Remember: this does not save to JSON yet.");
}
