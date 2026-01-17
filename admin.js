console.log("Admin dashboard loaded");

// Temporary in-memory car storage
let cars = [];

// DOM references
const form = document.getElementById("add-car-form");
const carList = document.getElementById("admin-car-list");

// Render cars
function renderCars() {
   <img src="${car.image || 'https://via.placeholder.com/300'}" class="admin-car-image">
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
function addCar() {
  const car = {
    make: document.getElementById("make").value,
    model: document.getElementById("model").value,
    price: document.getElementById("price").value,
    year: document.getElementById("year").value,
    mileage: document.getElementById("mileage").value,
    city: document.getElementById("city").value,
    image: document.getElementById("image").value
  };

  const cars = JSON.parse(localStorage.getItem("cars")) || [];
  cars.push(car);
  localStorage.setItem("cars", JSON.stringify(cars));

  alert("Car added successfully!");
}

// Delete car
function deleteCar(index) {
  if(confirm("Are you sure you want to delete this car?")) {
    cars.splice(index, 1);
    renderCars();
  }
}

// Initial render
renderCars();
