console.log("Admin dashboard loaded");

// Temporary in-memory car storage
let cars = [];

// DOM references
const form = document.getElementById("add-car-form");
const carList = document.getElementById("admin-car-list");

// Render cars
function renderCars() {
  carList.innerHTML = "";
  cars.forEach((car, index) => {
    const div = document.createElement("div");
    div.className = "admin-car-card";
    div.innerHTML = `
      <p><strong>${car.make} ${car.model}</strong></p>
      <p>Price: N$ ${car.price}</p>
      <p>Year: ${car.year}</p>
      <p>Mileage: ${car.mileage} km</p>
      <p>City: ${car.city}</p>
      <button onclick="deleteCar(${index})">Delete</button>
    `;
    carList.appendChild(div);
  });
}

// Add car
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const newCar = {
    make: document.getElementById("make").value,
    model: document.getElementById("model").value,
    price: Number(document.getElementById("price").value),
    year: Number(document.getElementById("year").value),
    mileage: Number(document.getElementById("mileage").value),
    city: document.getElementById("city").value,
    image: document.getElementById("image").value || ""
  };
  cars.push(newCar);
  renderCars();
  form.reset();
});

// Delete car
function deleteCar(index) {
  if(confirm("Are you sure you want to delete this car?")) {
    cars.splice(index, 1);
    renderCars();
  }
}

// Initial render
renderCars();
