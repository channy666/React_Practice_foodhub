import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import menu1 from "../../utils/image/foodMenu1.png";
import menu2 from "../../utils/image/foodMenu2.png";
import menu3 from "../../utils/image/foodMenu3.png";
import menu4 from "../../utils/image/foodMenu4.png";
import menu5 from "../../utils/image/foodMenu5.png";
import star from "../../utils/icon/star.png";
import location from "../../utils/icon/locationFoodMenu.png";
import earth from "../../utils/icon/world.png";
import clock from "../../utils/icon/clock.png";

const Root = styled.div`
  width: 100%;
  padding-top: 65px;
`;

const Wrapper = styled.div`
  width: 1785px;
  margin: 0 auto;
  padding: 12px 24px;
`;

const BreadCrumpsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 18px 12px;

  & :last-child {
    color: rgba(0, 0, 0, 0.38);
    cursor: default;

    span {
      display: none;
    }
  }
`;

const BreadCrumps = styled.div`
  color: #2b3445;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;

  span {
    padding: 0 15px;
    cursor: default;
  }
`;

const MenuContainer = styled.div`
  padding: 12px;
`;

const PicturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainPicture = styled.div`
  background-image: url(${(props) => props.$img});
  width: 50%;
  height: 650px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Pictures = styled.div`
  width: 50%;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: -10px;
`;

const Picture = styled(MainPicture)`
  height: 320px;
  width: 433px;
  margin-top: 10px;
`;

const MenuInfo = styled.div`
  margin-top: 24px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center;
`;

const Title = styled.div`
  margin-right: 8px;
  font-size: 30px;
  font-weight: bold;
`;

const Rate = styled.div`
  display: flex;
  font-size: 14px;
  margin-right: 4px;
  color: rgba(0, 0, 0, 0.87);
  align-items: center;

  span {
    color: #9e9e9e;
    margin-left: 2px;
  }
`;

const StarIcon = styled(MainPicture)`
  background-image: url(${star});
  height: 14px;
  width: 14px;
  margin-right: 1px;

  ${(props) =>
    props.$last &&
    `
    margin-right: 6px;
  `}
`;

const Description = styled.div`
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 24px;
  font-size: 14px;
`;

const MenuDetails = styled.div``;

const Detail = styled.div`
  color: #757575;
  font-size: 14px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;

  ${(props) =>
    props.$color &&
    `
    span {
      color: #d23f57;
      margin-right: 5px;
    }
  `}
`;

const Links = styled(Detail)`
  margin: 0;

  ${(props) =>
    props.$link &&
    `
    text-decoration: underline;
  `}
`;

const DetailIcon = styled(StarIcon)`
  background-image: url(${(props) => props.$icon});
  margin-right: 8px;
`;

function FoodMenu() {
  return (
    <Root>
      <Header />
      <Wrapper>
        <BreadCrumpsContainer>
          <BreadCrumps as={Link} to="/">
            Home<span>{">"}</span>
          </BreadCrumps>
          <BreadCrumps as={Link} to="/FoodMenu">
            New York<span>{">"}</span>
          </BreadCrumps>
          <BreadCrumps>
            Restaurants<span>{">"}</span>
          </BreadCrumps>
        </BreadCrumpsContainer>
        <MenuContainer>
          <PicturesContainer>
            <MainPicture $img={menu1} />
            <Pictures>
              <Picture $img={menu2} />
              <Picture $img={menu3} />
              <Picture $img={menu4} />
              <Picture $img={menu5} />
            </Pictures>
          </PicturesContainer>
          <MenuInfo>
            <TitleContainer>
              <Title>Starbucks</Title>
              <Rate>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon $last />
                4.5 <span>(1004)</span>
              </Rate>
            </TitleContainer>
            <Description>
              Coffee, signature roasts, light bite, quick bite, fast foods
            </Description>
            <MenuDetails>
              <Detail>
                <DetailIcon $icon={location} />
                The Dorothy Ross Friedman Residence, NY, US -
                <Links as={Link} to="/FoodMenu" $link>
                  Show Map
                </Links>
              </Detail>
              <Detail $color>
                <DetailIcon $icon={clock} />
                <span>{"Open Now"}</span>- Sun - Mon: 9am - 10pm
              </Detail>
              <Detail>
                <DetailIcon $icon={earth} />
                <Links as={Link} to="/FoodMenu">
                  www.starbucks.com
                </Links>
              </Detail>
            </MenuDetails>
          </MenuInfo>
        </MenuContainer>
      </Wrapper>
    </Root>
  );
}

export default FoodMenu;
