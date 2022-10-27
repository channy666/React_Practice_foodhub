import dashboardIcon from "../icon/layout.png";
import dashboardActiveIcon from "../icon/layoutActive.png";
import restaurantIcon from "../icon/tableware.png";
import restaurantActiveIcon from "../icon/tablewareActive.png";

export const NavBarData = [
  {
    id: 1,
    title: "DashBoard",
    titleIcon: dashboardIcon,
    titleActiveIcon: dashboardActiveIcon,
    list: [
      {
        name: "Review",
        link: "",
      },
      {
        name: "Photos",
        link: "",
      },
      {
        name: "Order List",
        link: "",
      },
      {
        name: "Order History",
        link: "",
      },
      {
        name: "Followers",
        link: "",
      },
      {
        name: "BookMarks",
        link: "",
      },
    ],
  },
  {
    id: 2,
    title: "Restaurant",
    titleIcon: restaurantIcon,
    titleActiveIcon: restaurantActiveIcon,
    list: [
      {
        name: "FoodMenu",
        link: "/FoodMenu",
      },
      {
        name: "Restaurant Two Column",
        link: "/RestaurantTwoColumn",
      },
      {
        name: "Search Restaurant",
        link: "",
      },
    ],
  },
];

export const popularLocalitiesData = [
  [
    {
      name: "Newport",
      places: 26,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Brooklyn",
      places: 14,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Chinatown",
      places: 10,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Chelsea",
      places: 20,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Coney Island",
      places: 6,
      link: "/RestaurantTwoColumn",
    },
  ],
  [
    {
      name: "Newport",
      places: 26,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Brooklyn",
      places: 14,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Chinatown",
      places: 10,
    },
    {
      name: "Chelsea",
      places: 20,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Coney Island",
      places: 6,
      link: "/RestaurantTwoColumn",
    },
  ],
  [
    {
      name: "Newport",
      places: 26,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Brooklyn",
      places: 14,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Chinatown",
      places: 10,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Chelsea",
      places: 20,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Coney Island",
      places: 6,
      link: "/RestaurantTwoColumn",
    },
  ],
  [
    {
      name: "Newport",
      places: 26,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Brooklyn",
      places: 14,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Chinatown",
      places: 10,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Chelsea",
      places: 20,
      link: "/RestaurantTwoColumn",
    },
    {
      name: "Coney Island",
      places: 6,
      link: "/RestaurantTwoColumn",
    },
  ],
];
