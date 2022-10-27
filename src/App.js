import styled from "styled-components";
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PopularLocalities from "./components/PopularLocalities";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import FoodMenu from "./Pages/FoodMenu";
import RestaurantTwoColumn from "./Pages/RestaurantTwoColumn";
import arrowIcon from "./utils/icon/up.png";
import {
  MEDIA_QUERY_XL,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from "./utils/breakpoints";

const Root = styled.div`
  min-width: 1964px;

  ${MEDIA_QUERY_XL} {
    min-width: 1264px;
  }

  ${MEDIA_QUERY_LG} {
    min-width: 960px;
  }

  ${MEDIA_QUERY_MD} {
    min-width: 600px;
  }

  ${MEDIA_QUERY_SM} {
    min-width: 360px;
  }
`;

const Button = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  background: #d23f57;
  z-index: 5;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%),
    0 1px 18px 0 rgb(0 0 0 / 12%);
  bottom: 16px;
  right: 16px;
  border-radius: 50%;

  :hover {
    background: rgba(210, 63, 87, 0.8);
  }

  ${(props) =>
    !props.$show &&
    `
    display: none;
  `}
`;

const ButtonIcon = styled.div`
  background-image: url(${(props) => props.$icon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 20px;
  width: 20px;
  z-index: 7;
`;

function App() {
  return (
    <Root>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/FoodMenu" element={<FoodMenu />} />
          <Route
            path="/RestaurantTwoColumn"
            element={<RestaurantTwoColumn />}
          />
        </Routes>
        <PopularLocalities />
        <Footer />
      </Router>
      <ScrollToTopButton />
    </Root>
  );
}

export default App;

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setShowButton(false);
      });
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button $show={showButton} onClick={handleScrollToTop}>
      <ButtonIcon $icon={arrowIcon} />
    </Button>
  );
}
