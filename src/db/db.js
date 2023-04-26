import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png"
import colaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png"

export function getData() {
    return [
        {title: "Pizza", price: 17.99, Image: pizzaImg, id: 1 },
        {title: "Burger", price: 15, Image: burgerImg, id: 2 },
        {title: "Coca-Cola", price: 13.99, Image: colaImg, id: 3 },
        {title: "Salad", price: 14.99, Image: saladImg, id: 4 },
        {title: "Water", price: 35.99, Image: waterImg, id: 5 },
        {title: "Ice cream", price: 35.99, Image: iceCreamImg, id: 6 },
    ];
}
