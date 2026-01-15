const ADMIN_PASSWORD = "admin123"; // change later

const loginSection = document.getElementById("loginSection");
const adminPanel = document.getElementById("adminPanel");
const adminCars = document.getElementById("adminCars");
const form = document.getElementById("addCarForm");

let cars = JSON.parse(localStorage.getItem("cars")) || [];

function login() {
  const input = document.getElementById("adminPassword").value;

  if (input === ADMIN_PASSWORD) {
    loginSection.style.display = "none";
    adminPanel.style.display = "block";
    renderCars();
  } else {
    alert("Wrong password. Try again.");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const car = {
    title: title.value,
    brand: brand.value,
    price: price.value,
    mileage: mileage.value,
    image: image.value,
    notes: notes.value,
    featured: featured.checked
  };

  cars.push(car);
  localStorage.setItem("cars", JSON.stringify(cars));
  form.reset();
  renderCars();
});

function renderCars() {
  adminCars.innerHTML = "";

  cars.forEach((car, index) => {
    adminCars.innerHTML += `
      <div class="admin-car">
        <strong>${car.title}</strong> (${car.brand})<br>
        N$ ${car.price} | ${car.mileage} km<br>
        ${car.featured ? "⭐ Featured" : ""}
        <br>
        <button onclick="deleteCar(${index})">Delete</button>
        <hr>
      </div>
    `;
  });
}

function deleteCar(index) {
  cars.splice(index, 1);
  localStorage.setItem("cars", JSON.stringify(cars));
  renderCars();
}
