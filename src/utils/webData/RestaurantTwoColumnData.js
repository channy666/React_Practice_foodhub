import service1 from "../image/service1.jpg";
import service2 from "../image/service2.jpg";
import service3 from "../image/service3.jpg";
import service4 from "../image/service4.jpg";
import collection1 from "../image/collection1.png";
import collection2 from "../image/collection2.png";
import collection3 from "../image/collection3.png";
import collection4 from "../image/collection4.png";
import popular5 from "../image/popular5.jpg";
import popular6 from "../image/popular6.jpg";
import popular7 from "../image/popular7.jpg";
import popular8 from "../image/popular8.jpg";

export const restaurantData = [
  {
    image: popular5,
    name: "Poke Bowl",
    rate: 4,
    cost: 300,
    food: " Cofee, set menu",
    time: 20,
    discount: 15,
    link: "/FoodMenu",
    category: ["Healthy", "Vegan"],
  },
  {
    image: collection3,
    name: "Soup",
    rate: 4,
    cost: 120,
    food: " Cofee, set menu",
    time: 30,
    discount: 80,
    link: "/FoodMenu",
    category: ["Snack", "Drinks"],
  },
  {
    image: service2,
    name: "Sushi Yum Yum Yum Yum Yum Yum Yum Yum Yum Yum",
    rate: 1.5,
    cost: 800,
    food: " Cofee, set menu",
    time: 100,
    discount: 10,
    link: "/FoodMenu",
    category: ["Healthy", "Drinks"],
  },
  {
    image: popular8,
    name: "Cakey Cake Cake",
    rate: 1.7,
    cost: 108,
    food: " Cofee, set menu",
    time: 5,
    discount: 0,
    link: "/FoodMenu",
    category: ["Snack", "Vegan"],
  },
  {
    image: service1,
    name: "Brunch",
    rate: 3.5,
    cost: 500,
    food: " Cofee, set menu",
    time: 100,
    discount: 0,
    link: "/FoodMenu",
    category: ["Drinks"],
  },
  {
    image: collection4,
    name: "Steak",
    rate: 4.9,
    cost: 5800,
    food: " Cofee, set menu",
    time: 4,
    discount: 0,
    link: "/FoodMenu",
    category: ["Healthy"],
  },
  {
    image: service3,
    name: "Doritos",
    rate: 3,
    cost: 50,
    food: " Cofee, set menu",
    time: 3,
    discount: 0,
    link: "/FoodMenu",
    category: ["Snack", "Vegan", "Drinks"],
  },
  {
    image: service4,
    name: "Subway",
    rate: 3.2,
    cost: 129,
    food: " Cofee, set menu",
    time: 10,
    discount: 0,
    link: "/FoodMenu",
    category: ["Healthy", "Vegan"],
  },
  {
    image: popular6,
    name: "Mughal Masala",
    rate: 2.8,
    cost: 3000,
    food: " Cofee, set menu",
    time: 88,
    discount: 50,
    link: "/FoodMenu",
    category: ["Drinks", "Vegan"],
  },
  {
    image: popular7,
    name: "Teppanyaki",
    rate: 3.4,
    cost: 90,
    food: " Cofee, set menu",
    time: 9,
    discount: 0,
    link: "/FoodMenu",
    category: ["Snack", "Healthy"],
  },
  {
    image: collection2,
    name: "Fish",
    rate: 3.1,
    cost: 200,
    food: " Cofee, set menu",
    time: 76,
    discount: 1,
    link: "/FoodMenu",
    category: ["Healthy"],
  },
  {
    image: collection1,
    name: "IKEA",
    rate: 3.4,
    cost: 400,
    food: " Cofee, set menu",
    time: 120,
    discount: 20,
    link: "/FoodMenu",
    category: ["Healthy", "Drinks", "Vegan"],
  },
];

const categories = ["Healthy", "Drinks", "Snack", "Vegan"];
const sortBy = ["cost", "rate", "time", "discount"];

export const checkboxData = [
  {
    title: "Categories",
    type: "checkbox",
    selections: categories,
  },
  {
    title: "Sort by",
    type: "radio",
    selections: sortBy,
  },
];

export const sortOrder = {
  time: "ASC",
  cost: "ASC",
  rate: "DESC",
  discount: "DESC",
};
