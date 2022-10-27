import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import star from "../../utils/icon/star.png";
import { checkboxData } from "../../utils/webData/RestaurantTwoColumnData";
import useFilter from "../../useFilter";

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

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 12px;
`;

const SwitchFilter = styled.div`
  display: flex;
  margin: 5px 0 10px 0;
`;

const Filter = styled.div`
  color: rgba(0, 0, 0, 0.54);
  height: 48px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 1px;

  :hover {
    background: rgba(0, 0, 0, 0.14);
  }

  ${(props) =>
    props.$active &&
    `
    color: #d23f57;
    border-bottom: 2px solid #d23f57;

    :hover {
      background: rgba(210, 63, 87, 0.1); 
    }
  `}
`;

const FilterButton = styled.div`
  cursor: pointer;
  height: 36px;
  width: 60px;
  padding: 0 16px;
  color: #fff;
  background: #d23f57;
  margin-bottom: 12px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  letter-spacing: 1.2px;

  :hover {
    background: rgba(210, 63, 87, 0.8);
  }
`;

const RestaurantsContainer = styled.div`
  display: flex;
  padding: 0 12px;
`;

const Checkboxes = styled.div`
  width: 280px;
  border-right: 1px solid #dae1e7;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 30px;
`;

const CheckboxTitle = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: bold;
`;

const Checkbox = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 15px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.8px;

    input {
      margin-right: 8px;
      height: 16px;
      width: 16px;
    }
  }
`;

const RestaurantsWrapper = styled.div`
  width: calc(100% - 280px);
  padding: 0 32px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 1px;
`;

const Restaurants = styled.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
`;

const Restaurant = styled.div`
  position: relative;
  width: 460px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14),
    0 0 0 0 rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  border: thin solid rgba(0, 0, 0, 0.12);
  text-decoration: none;
  overflow: hidden;
  margin-top: 24px;
`;

const RestaurantImage = styled.div`
  height: 300px;
  background-image: url(${(props) => props.$img});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0 0;
`;

const RestaurantContent = styled.div`
  width: 100%;
`;

const RestaurantContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;

const RestaurantName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  margin-right: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.87);
`;

const RestaurantRate = styled.div`
  display: flex;
  font-size: 14px;
  color: #757575;
  letter-spacing: 1px;

  span {
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
  }
`;

const StarIcon = styled.div`
  background-image: url(${(props) => props.$icon});
  height: 16px;
  width: 16px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-right: 4px;
`;

const RestaurantInfo = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  color: #757575;

  span {
    color: #d23f57;
    font-weight: 600;
    margin-right: 4px;
  }
`;

const RestaurantDiscount = styled.div`
  position: absolute;
  display: flex;
  top: 12px;
  left: -5px;
  background: #d23f57;
  font-size: 14px;
  height: 32px;
  padding: 0 12px 0 17px;
  align-items: center;
  color: #fff;
  border-radius: 0 24px 24px 0;
`;

function RestaurantTwoColumn() {
  const {
    handleCategoriesChange,
    handleSortChange,
    handleFilterData,
    filteredData,
  } = useFilter();

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
        <FilterContainer>
          <SwitchFilter>
            <Filter $active>Delivery</Filter>
            <Filter>Dining Out</Filter>
            <Filter>Nightlife</Filter>
          </SwitchFilter>
          <FilterButton onClick={handleFilterData}>FILTER</FilterButton>
        </FilterContainer>
        <RestaurantsContainer>
          <Checkboxes>
            {checkboxData.map((data, index) => (
              <CheckboxContainer key={index + 1}>
                <CheckboxTitle>{data.title}</CheckboxTitle>
                <Checkbox>
                  {data.selections.map((selectData, selectIndex) => (
                    <label htmlFor={selectData} key={selectIndex + 1}>
                      <input
                        type={data.type}
                        id={selectData}
                        name={data.title}
                        value={selectData}
                        onChange={
                          data.title === "Categories"
                            ? handleCategoriesChange
                            : handleSortChange
                        }
                      />
                      {selectData}
                    </label>
                  ))}
                </Checkbox>
              </CheckboxContainer>
            ))}
          </Checkboxes>
          <RestaurantsWrapper>
            <Title>12 Delivery Restaurants in New York</Title>
            <Restaurants>
              {filteredData.map((data, index) => (
                <Restaurant key={index + 1} as={Link} to={data.link}>
                  <RestaurantImage $img={data.image} />
                  <RestaurantContent>
                    <RestaurantContentTop>
                      <RestaurantName>{data.name}</RestaurantName>
                      <RestaurantRate>
                        <StarIcon $icon={star} />
                        <span>{data.rate}</span>/5
                      </RestaurantRate>
                    </RestaurantContentTop>
                    <RestaurantInfo>
                      <span>${data.cost} </span>• {data.food} • {data.time} min
                    </RestaurantInfo>
                  </RestaurantContent>
                  {data.discount !== 0 && (
                    <RestaurantDiscount>
                      Flat {data.discount}% Off
                    </RestaurantDiscount>
                  )}
                </Restaurant>
              ))}
            </Restaurants>
          </RestaurantsWrapper>
        </RestaurantsContainer>
      </Wrapper>
    </Root>
  );
}

export default RestaurantTwoColumn;
