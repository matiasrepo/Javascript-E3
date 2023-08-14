const pizzas = [
	{
		id: 1,
		nombre: "pizza de Muzzarella",
		precio: 500,
		ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
		imagen: "./img/muzzarella.png",
	},

	{
		id: 2,
		nombre: "pizza de Cebolla",
		precio: 1500,
		ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
		imagen: "./img/cebolla.png",
	},

	{
		id: 3,
		nombre: "pizza 4 Quesos",
		precio: 1380,
		ingredientes: [
			"Muzzarella",
			"Tomate",
			"Queso Azul",
			"Parmesano",
			"Roquefort",
		],
		imagen: "./img/cuatroquesos.png",
	},

	{
		id: 4,
		nombre: "pizza Especial",
		precio: 1000,
		ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
		imagen: "./img/especial.png",
	},

	{
		id: 5,
		nombre: "pizza con Anana",
		precio: 600,
		ingredientes: ["Muzzarella", "Tomate", "Anana"],
		imagen: "./img/anana.png",
	},
];

const pizzaIdInput = document.getElementById("pizzaIdInput");
const searchButton = document.getElementById("searchButton");
const resultContainer = document.getElementById("resultContainer");

searchButton.addEventListener("click", searchPizza);

function searchPizza(event) {
	event.preventDefault();

	const pizzaId = parseInt(pizzaIdInput.value);
	const foundPizza = pizzas.find((pizza) => pizza.id === pizzaId);

	if (foundPizza) {
		const card = createPizzaCard(foundPizza);
		resultContainer.innerHTML = "";
		resultContainer.appendChild(card);
		localStorage.setItem("lastSearchedPizzaId", pizzaId);
	} else {
		const error = document.createElement("div");
		error.className = "error";
		error.textContent = "No se encontró ninguna pizza";
		resultContainer.innerHTML = "";
		resultContainer.appendChild(error);
	}
}

function createPizzaCard(pizza) {
	const card = document.createElement("div");
	card.className = "card";

	const img = document.createElement("img");
	img.src = pizza.imagen;
	img.alt = pizza.nombre;

	const details = document.createElement("div");
	details.innerHTML = `<h2>${pizza.nombre}</h2><p>Price: $${pizza.precio}</p>`;

	card.appendChild(img);
	card.appendChild(details);

	return card;
}

const lastSearchedPizzaId = localStorage.getItem("lastSearchedPizzaId");
if (lastSearchedPizzaId) {
	const lastSearchedPizza = pizzas.find(
		(pizza) => pizza.id === parseInt(lastSearchedPizzaId)
	);
	if (lastSearchedPizza) {
		const card = createPizzaCard(lastSearchedPizza);
		resultContainer.appendChild(card);
	}
}
