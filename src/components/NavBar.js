import styled from "styled-components";
import { useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarData } from "../utils/webData/others";
import closeIcon from "../utils/icon/cross.png";
import arrowIcon from "../utils/icon/arrow.png";
import arrowActiveIcon from "../utils/icon/arrowActive.png";
import Button from "./Button";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
  ${(props) =>
    props.$expand &&
    `
    z-index: 10;
  `};
`;

const NavBarContainer = styled.div`
  width: 320px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 0 8px 10px -5px rgb(0 0 0 / 20%), 0 16px 24px 2px rgb(0 0 0 / 14%),
    0 6px 30px 5px rgb(0 0 0 / 12%);
  margin-left: -330px;
  z-index: 20;

  ${(props) =>
    props.$expand &&
    `
    margin-left: 0;
    transition: all 0.5s;
  `}
`;

const NavBarTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 12px 0px 16px;
  align-items: center;
  background: white;
  height: 60px;
`;

const NavBarTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
  font-family: "Open Sans";
  letter-spacing: 0.8px;
`;

const CloseButton = styled.div``;

const NavListContainer = styled.div``;

const NavListTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 12px;
  cursor: pointer;
  background: white
  height: 40px;

  :hover {
    background: rgba(0, 0, 0, 0.05);
  }

  ${(props) =>
    props.$expand &&
    `
    :hover {
      background: rgba(210, 63, 87, 0.1);
    }
  `}
`;

const NavListIcon = styled.div`
  background-image: url(${(props) => props.$icon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 18px;
  width: 18px;
  padding: 0px 5px;
  margin-right: 10px;
`;

const NavListTitle = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-size: 13.5px;
  width: 180px;
  padding: 5px 20px;
  font-family: "Open Sans";

  ${(props) =>
    props.$expand &&
    `
    color: #d23f57;
  `}
`;

const ButtonIcon = styled(NavListIcon)`
  margin: 0;
  transition: transform 0.15s;

  ${(props) =>
    props.$expand &&
    `
    transform: rotate(180deg);
  `}
`;

const Navs = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = styled(NavListTitle)`
  padding: 10px 0px 10px 72px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  height: 40px;
  text-decoration: none;

  :hover {
    background: rgba(0, 0, 0, 0.05);
  }

  ${(props) =>
    props.$active &&
    `
    color: #d23f57;
    background: rgba(210, 63, 87, 0.1)
  `}
`;

const NavBarCover = styled.div`
  background: rgba(0, 0, 0, 0.35);
  position: fixed;
  display: none;
  z-index: 19;
  top: 0;
  height: 100vh;
  width: 100vw;

  ${(props) =>
    props.$expand &&
    `
    display: block;
  `}
`;

function NavBar({ handleNavBarExpand }) {
  const [expandedList, setExpandedList] = useState(1);
  const { navBarIsExpanded, setNavBarIsExpanded } = handleNavBarExpand;

  const handleCloseNavBar = () => setNavBarIsExpanded(false);

  return (
    <Wrapper $expand={navBarIsExpanded}>
      <NavBarContainer $expand={navBarIsExpanded}>
        <NavBarTitleContainer>
          <NavBarTitle>NavBar</NavBarTitle>
          <CloseButton onClick={handleCloseNavBar}>
            <Button
              icon={closeIcon}
              iconSize="14px"
              buttonSize="40px"
              circle={true}
            />
          </CloseButton>
        </NavBarTitleContainer>
        {NavBarData.map((data) => (
          <NavList
            data={data}
            key={data.id}
            handleExpandedList={{ expandedList, setExpandedList }}
          />
        ))}
      </NavBarContainer>
      <NavBarCover $expand={navBarIsExpanded} onClick={handleCloseNavBar} />
    </Wrapper>
  );
}

export default memo(NavBar);

function NavList({ data, handleExpandedList }) {
  const { id, title, titleIcon, titleActiveIcon, list } = data;
  const { expandedList, setExpandedList } = handleExpandedList;
  let isExpanded = expandedList === id;
  const location = useLocation();

  const handleNavListTitleClick = (id) => {
    if (isExpanded) return setExpandedList(0);
    setExpandedList(id);
  };

  return (
    <NavListContainer>
      <NavListTitleContainer
        onClick={() => handleNavListTitleClick(id)}
        $expand={isExpanded}
      >
        <NavListIcon $icon={isExpanded ? titleActiveIcon : titleIcon} />
        <NavListTitle $expand={isExpanded}>{title}</NavListTitle>
        <ButtonIcon
          $icon={isExpanded ? arrowActiveIcon : arrowIcon}
          $expand={isExpanded}
        />
      </NavListTitleContainer>
      {isExpanded && (
        <Navs>
          {list.map((data, index) => (
            <Nav
              key={index + 1}
              as={Link}
              to={data.link}
              $active={location.pathname === data.link}
            >
              {data.name}
            </Nav>
          ))}
        </Navs>
      )}
    </NavListContainer>
  );
}
