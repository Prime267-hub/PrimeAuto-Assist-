const form = document.getElementById("carForm");
const adminListings = document.getElementById("adminListings");

let cars = JSON.parse(localStorage.getItem("cars")) || [];

function renderCars() {
  adminListings.innerHTML = "";

  cars.forEach((car, index) => {
    const card = document.createElement("div");
    card.className = "car-card";

    card.innerHTML = `
      <img src="${car.image}">
      <div class="car-info">
        <h3>${car.brand} ${car.title}</h3>
        <p class="price">N$ ${car.price}</p>
        <p>${car.notes}</p>
        <button class="btn-primary" onclick="deleteCar(${index})">Delete</button>
      </div>
    `;

    adminListings.appendChild(card);
  });
}

function deleteCar(index) {
  cars.splice(index, 1);
  localStorage.setItem("cars", JSON.stringify(cars));
  renderCars();
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const car = {
    brand: brand.value,
    title: title.value,
    price: price.value,
    image: image.value,
    notes: notes.value
  };

  cars.push(car);
  localStorage.setItem("cars", JSON.stringify(cars));

  form.reset();
  renderCars();
});

renderCars();
