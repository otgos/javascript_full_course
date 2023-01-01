const cities = ["New York", "Amsterdam", "Istanbul", "Berlin"];

const allButtons = document.querySelectorAll("button");

for (let index = 0; index < allButtons.length; index++) {
	allButtons[index].addEventListener("click", (e) => {
		console.log(e.target.id);

		switch (e.target.id) {
			case "btnSort":
				cities.sort();
				loadList();
				break;
			case "btnReverse":
				cities.reverse();
				loadList();
				break;
			case "btnRemoveFirst":
				cities.shift();
				loadList();
				break;
			case "btnRemoveLast":
				cities.pop();
				loadList();
				break;
			case "btnRemoveAll":
				cities.splice(0, cities.length);
				loadList();
				break;
			case "btnAddCity":
				const city = document.querySelector("#txtCity").value;

				if (!city || cities.includes(city)) return;
				cities.push(city);

				loadList();
				break;
			case "btnMix":
				getRandom();
				loadList();
				break;
			default:
				console.error("There is no event handler assigned to this button");
				break;
		}
	})
}

// document.querySelector("#btnSort").addEventListener("click", () => {
// 	cities.sort();
// 	loadList();
// });

// document.querySelector("#btnReverse").addEventListener("click", () => {
// 	cities.reverse();
// 	loadList();
// });

// document.querySelector("#btnRemoveFirst").addEventListener("click", () => {
// 	cities.shift();
// 	loadList();
// });

// document.querySelector("#btnRemoveLast").addEventListener("click", () => {
// 	cities.pop();
// 	loadList();
// });

// document.querySelector("#btnRemoveAll").addEventListener("click", () => {
// 	cities.splice(0, cities.length);
// 	loadList();
// });

// document.querySelector("#btnAddCity").addEventListener("click", () => {
// 	const city = document.querySelector("#txtCity").value;

// 	if (!city || cities.includes(city)) return;
// 	cities.push(city);

// 	loadList();
// });

// document.querySelector("#btnMix").addEventListener("click", () => {
// 	getRandom();
// 	loadList();
// });

const loadList = () => {
	let html = "";
	for (let i = 0; i < cities.length; i++) {
		html += `<li>${cities[i]}</li>`;
	}
	document.querySelector("#cityList").innerHTML = html;
};

const getRandom = () => {
	const arr = [];

	while (cities.length > 0) {
		const randomIndex = Math.floor(Math.random() * cities.length);
		const city = cities[randomIndex];
		arr.push(city);

		cities.splice(randomIndex, 1);
	}

	cities.splice(0, 0, ...arr);

};



loadList();
