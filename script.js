document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("listing-area");
  if (!container) return;

  const cars = JSON.parse(localStorage.getItem("cars")) || [];

  if (cars.length === 0) {
    container.innerHTML = "<p>No listings available yet.</p>";
    return;
  }

  container.innerHTML = "";

  cars.slice(0, 6).forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";

    card.innerHTML = `
      <img src="${car.image}" alt="${car.make} ${car.model}">
      <h3>${car.make} ${car.model}</h3>
      <p><strong>Price:</strong> N$ ${car.price}</p>
      <p><strong>Year:</strong> ${car.year}</p>
      <p><strong>Mileage:</strong> ${car.mileage} km</p>
      <p><strong>City:</strong> ${car.city}</p>
    `;

    container.appendChild(card);
  });
});

