// getting pizza select element
const pizzaSelectElement = document.getElementById('pizzaType');
const pizzaImgELement = document.getElementById('pizzaImg');
const pizzaPriceElement = document.getElementById('pizzaPrice');
const pizzaBoxElement = document.getElementById('pizza-box');

pizzaSelectElement.addEventListener("change", () => {
    pizzaBoxElement.classList.remove("d-none");
    pizzaBoxElement.classList.add("d-flex");

    if (pizzaSelectElement.value == "") {
        pizzaBoxElement.classList.remove("d-flex");
        pizzaBoxElement.classList.add("d-none");
    } else if (pizzaSelectElement.value == "first-pizza") {
        pizzaImgELement.src = "./image/pizza-1 2.png";
        pizzaPriceElement.textContent = "4.33"
    } else if (pizzaSelectElement.value == "second-pizza") {
        pizzaImgELement.src = "./image/pizza-2 1.png";
        pizzaPriceElement.textContent = "3.99"
    } else if (pizzaSelectElement.value == "third-pizza") {
        pizzaImgELement.src = "./image/pizza-3 1.png";
        pizzaPriceElement.textContent = "2.50"
    }
})