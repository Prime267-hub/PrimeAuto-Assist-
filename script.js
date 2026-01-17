alert("SCRIPT LOADED");

// Step 4: confirm cars exist
console.log(cars);

console.log("script loaded");

fetch("cars.json")
  .then(response => response.json())
  .then(cars => {
    const container = document.getElementById("listing-area");

    if (!container) {
      console.error("Listing container not found");
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
  })
  .catch(error => {
    console.error("Error loading cars:", error);
    <img src="${car.image}" 
     alt="${car.make} ${car.model}"
     onerror="this.src='https://via.placeholder.com/400x250?text=No+Image'">
  });
