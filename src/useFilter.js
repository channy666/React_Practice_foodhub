import { useState, useEffect } from "react";
import {
  restaurantData,
  sortOrder,
} from "./utils/webData/RestaurantTwoColumnData";

export default function useFilter() {
  const [categoriesValue, setCategoriesValue] = useState([]);
  const [sortValue, setSortValue] = useState();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    handleFilterData();
  }, []);

  const handleCategoriesChange = (e) => {
    if (e.target.checked) {
      return setCategoriesValue((prevState) => [...prevState, e.target.value]);
    }

    setCategoriesValue((prevState) =>
      prevState.filter((value) => value !== e.target.value)
    );
  };

  const handleSortChange = (e) => {
    setSortValue(e.target.value);
  };

  const handleFilterData = () => {
    let filterData = [...restaurantData];

    if (categoriesValue.length) {
      filterData = filterData.filter((data) =>
        categoriesValue.some((category) => data.category.includes(category))
      );
    }

    if (sortValue) {
      if (sortOrder[sortValue] === "ASC") {
        filterData.sort((a, b) => a[sortValue] - b[sortValue]);
      } else {
        filterData.sort((a, b) => b[sortValue] - a[sortValue]);
      }
    }

    filterData.splice(6);

    setFilteredData(filterData);
  };

  return {
    handleCategoriesChange,
    handleSortChange,
    handleFilterData,
    filteredData,
  };
}
