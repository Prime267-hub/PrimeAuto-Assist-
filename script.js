const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTO-p3ZQvC-M0XFE0fWTYKsMROmNnfstZRVTAoUEIDKX4d_PjzRnMq7o4DZ3";

fetch(SHEET_URL)
  .then(res => res.json())
  .then(cars => {
    const container = document.getElementById("listing-area");
    if (!container) return;

    container.innerHTML = "";

    cars.forEach(car => {
      const card = document.createElement("div");
      card.className = "car-card";

      card.innerHTML = `
        <img src="${car.image || 'https://via.placeholder.com/300'}">
        <h3>${car.make} ${car.model}</h3>
        <p><strong>Price:</strong> N$ ${car.price}</p>
        <p><strong>Year:</strong> ${car.year}</p>
        <p><strong>Mileage:</strong> ${car.mileage} km</p>
        <p><strong>City:</strong> ${car.city}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Failed to load cars:", err);
  });
