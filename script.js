const storedCars = JSON.parse(localStorage.getItem("cars")) || [];
const carsPromise = storedCars.length
  ? Promise.resolve(storedCars)
  : fetch("cars.json").then(res => res.json());

carsPromise
  .then(res => res.json())
  .then(cars => {
    const listingArea = document.getElementById("listing-area");
    listingArea.innerHTML = "";

    cars.forEach(car => {
      const card = document.createElement("div");
      card.className = "car-card";

      card.innerHTML = `
        <img src="${car.image}" alt="${car.title}">
        <div class="car-info">
          <h3>${car.brand} ${car.title}</h3>
          <p class="price">N$ ${car.price}</p>
          <p>${car.notes}</p>
          <a class="btn-primary" href="#">WhatsApp Seller</a>
        </div>
      `;

      listingArea.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading cars:", err));
