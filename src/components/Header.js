import styled from "styled-components";
import { memo, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import logo from "../utils/icon/logo.png";
import locationIcon from "../utils/icon/location.png";
import target from "../utils/icon/target.png";
import bannerTarget from "../utils/icon/bannerTarget.png";
import magnifier from "../utils/icon/magnifier.png";
import account from "../utils/icon/account.png";
import cart from "../utils/icon/cart.png";
import hamburger from "../utils/icon/hamburger.png";
import Button from "./Button";
import bannerAccount from "../utils/icon/bannerAccount.png";
import bannerCart from "../utils/icon/bannerCart.png";
import bannerHamburger from "../utils/icon/bannerHamburger.png";
import {
  MEDIA_QUERY_XL,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from "../utils/breakpoints";

const Root = styled.div`
  width: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  position: fixed;
  top: 0;
  padding: 4px 16px;
  box-sizing: border-box;
  background: white;
  z-index: 3;

  ${MEDIA_QUERY_MD} {
    padding: 4px 10px;
  }

  ${MEDIA_QUERY_SM} {
    padding: 4px 6px;
  }

  ${(props) =>
    props.$bannerHeader &&
    `
    background: transparent;
    padding: 40px 0px;
    box-shadow: none;
    position: absolute;
    z-index: 1;
  `}

  ${(props) =>
    props.$hideShadow &&
    `
    box-shadow: none;
  `}
`;

const Container = styled.div`
  width: 1785px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;

  ${MEDIA_QUERY_XL} {
    width: 1185px;
  }

  ${MEDIA_QUERY_LG} {
    width: 900px;
  }

  ${MEDIA_QUERY_MD} {
    width: 600px;
  }

  ${MEDIA_QUERY_SM} {
    width: 90%;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  height: 48px;
  width: 48px;
  margin: 5px 40px 0 0;
  background-image: url(${(props) => props.$logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const SearchBar = styled.div`
  border: 1px solid #dae1e7;
  border-radius: 5px;
  display: flex;
  width: 907px;
  height: 46px;
  box-sizing: border-box;
  position: relative;

  ${(props) =>
    props.$bannerHeader &&
    `
    display: none;
  `}

  ${(props) =>
    props.$bannerSearchBar &&
    `
    background: #fff;
    margin: 0 auto;
    width: 1000px;
    height: 52px;
    border: none;
  `}

  ${MEDIA_QUERY_XL} {
    width: 600px;

    ${(props) =>
      props.$bannerSearchBar &&
      `
      width: 1000px;
    `}
  }

  ${MEDIA_QUERY_LG} {
    width: 450px;
    ${(props) =>
      props.$bannerSearchBar &&
      `
      width: 850px;
    `}
  }

  ${MEDIA_QUERY_MD} {
    display: none;

    ${(props) =>
      props.$bannerSearchBar &&
      `
      display: flex;
      width: 550px;
      flex-wrap: wrap;
      height: 104px;
    `}
  }

  ${MEDIA_QUERY_SM} {
    width: 95%;
    height: 104px;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  margin: 0 25px;
  color: #757575;
  font-size: 16px;
  flex-shrink: 0;
  font-family: Open Sans;

  ${(props) =>
    props.$locateMe &&
    `
    border-right: 1px solid #dae1e7 ;
    color: #212121;
    padding:0 30px 0 25px;
    letter-spacing: 1px;
    cursor: pointer;

    :hover {
      background: #ebedf0;
    }
  `}

  ${(props) =>
    props.$bannerSearchBar &&
    `
    padding-right: 30px;
  `}

  ${MEDIA_QUERY_LG} {
    margin: 0 20px;

    ${(props) =>
      props.$bannerSearchBar &&
      `
      padding-right: 0px;
    `}

    ${(props) =>
      props.$locateMe &&
      `
      padding: 0 20px 0 10px;
      margin: 0 25px 0 15px;
    `}
  }

  ${MEDIA_QUERY_MD} {
    height: 52px;

    ${(props) =>
      props.$locateMe &&
      `
      border: none;
    `}
  }

  ${MEDIA_QUERY_SM} {
    margin: 0 15px;

    ${(props) =>
      props.$locateMe &&
      `
      padding: 0px;
      margin: 0 10px;
    `}
  }
`;

const LocationIcon = styled.div`
  background-image: url(${(props) => props.$icon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 14px;
  width: 14px;
  margin-right: 10px;

  ${MEDIA_QUERY_SM} {
    margin-right: 5px;
  }
`;

const SearchBarInput = styled.input`
  width: 660px;
  border: none;
  height: 100%;
  color: black;
  font-size: 16px;
  margin: 0 15px;
  background: transparent;

  ::placeholder {
    color: #757575;
  }

  :focus {
    outline: none;
  }

  ${MEDIA_QUERY_XL} {
    width: 480px;
  }

  ${MEDIA_QUERY_LG} {
    width: 350px;
    margin: 0 10px;
  }

  ${MEDIA_QUERY_MD} {
    height: 50%;
    margin: 0 15px;
  }
`;

const HeaderRight = styled(HeaderLeft)``;

const Account = styled.div`
  display: flex;
  letter-spacing: 1px;
  margin-right: 12px;
  height: 100%;
  align-items: center;
  font-size: 14px;
  padding: 3px 16px;
  cursor: pointer;
  font-family: Open Sans;

  :hover {
    background: rgba(0, 0, 0, 0.05);
  }

  ${(props) =>
    props.$banner &&
    `
    color: white;
  `}

  ${MEDIA_QUERY_MD} {
    padding: 3px 10px;
    margin-right: 10px;
  }

  ${MEDIA_QUERY_SM} {
    padding: 3px 6px;
    margin-right: 8px;
  }
`;

const AccountIcon = styled(LocationIcon)`
  height: 16px;
  width: 16px;
  margin-right: 12px;

  ${MEDIA_QUERY_MD} {
    margin-right: 10px;
  }

  ${MEDIA_QUERY_SM} {
    margin-right: 8px;
  }
`;

const AccountContent = styled.div`
  ${MEDIA_QUERY_SM} {
    display: none;
  }
`;

const ShoppingCart = styled(Account)``;

const ShoppingCartIcon = styled(LocationIcon)`
  ${MEDIA_QUERY_MD} {
    margin-right: 8px;
  }

  ${MEDIA_QUERY_SM} {
    margin-right: 6px;
  }
`;

const NavBarButton = styled.div``;

const SearchButton = styled.div`
  height: 52px;
  width: 106px;
  border-radius: 0 5px 5px 0;
  background-color: #d23f57;
  color: #fff;
  min-width: 92px;
  position: absolute;
  right: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: flex;
  letter-spacing: 2px;
  text-decoration: none;

  :hover {
    background: rgba(210, 63, 87, 0.8);
  }

  ${MEDIA_QUERY_SM} {
    width: 65px;
  }
`;

function Header({ bannerHeader }) {
  const [navBarIsExpanded, setNavBarIsExpanded] = useState(false);
  const location = useLocation();
  const [headerShadow, setHeaderShadow] = useState(false);

  const handleExpandNavBar = () => {
    setNavBarIsExpanded(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (location.pathname === "/" && window.pageYOffset < 550) return;
      if (window.pageYOffset > 1) {
        setHeaderShadow(true);
      } else {
        setHeaderShadow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setHeaderShadow(false);
      });
    };
  }, [location.pathname]);

  return (
    <Root>
      <Wrapper $bannerHeader={bannerHeader} $hideShadow={!headerShadow}>
        <Container>
          <HeaderLeft>
            <Logo $logo={logo} as={Link} to="/" />
            <SearchBar $bannerHeader={bannerHeader}>
              <Location>
                <LocationIcon $icon={locationIcon} />
                New York
              </Location>
              <Button icon={target} iconSize="14px" buttonSize="46px" />
              <SearchBarInput placeholder="Search for restaurant" />
              <Button icon={magnifier} iconSize="14px" buttonSize="46px" />
            </SearchBar>
          </HeaderLeft>
          <HeaderRight $banner={bannerHeader}>
            <Account $banner={bannerHeader}>
              <AccountIcon $icon={bannerHeader ? bannerAccount : account} />
              <AccountContent>ACCOUNT</AccountContent>
            </Account>
            <ShoppingCart $banner={bannerHeader}>
              <ShoppingCartIcon $icon={bannerHeader ? bannerCart : cart} />
              (8)
            </ShoppingCart>
            <NavBarButton onClick={handleExpandNavBar}>
              <Button
                icon={bannerHeader ? bannerHamburger : hamburger}
                iconSize="16px"
                buttonSize="46px"
                circle={true}
              />
            </NavBarButton>
          </HeaderRight>
        </Container>
      </Wrapper>
      <NavBar handleNavBarExpand={{ navBarIsExpanded, setNavBarIsExpanded }} />
    </Root>
  );
}

export default memo(Header);

export function BannerSearchBar() {
  return (
    <SearchBar $bannerSearchBar={true}>
      <Location $bannerSearchBar={true}>
        <LocationIcon $icon={locationIcon} />
        New York
      </Location>
      <Location $locateMe={true}>
        <LocationIcon $icon={bannerTarget} />
        Locate Me
      </Location>
      <SearchBarInput placeholder="Search for restaurant" />
      <SearchButton as={Link} to="/RestaurantTwoColumn">
        Search
      </SearchButton>
    </SearchBar>
  );
}
