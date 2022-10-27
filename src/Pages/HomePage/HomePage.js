import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../utils/image/banner.png";
import { BannerSearchBar } from "../../components/Header";
import phone from "../../utils/image/phone.png";
import googlePlay from "../../utils/icon/googlePlay.png";
import appStore from "../../utils/icon/appStore.png";
import star from "../../utils/icon/star.png";
import Header from "../../components/Header";
import {
  serviceData,
  collectionData,
  cuisineData,
  popularData,
} from "../../utils/webData/HomePageData";
import {
  MEDIA_QUERY_XL,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from "../../utils/breakpoints";

const Root = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  background-image: url(${bannerImage});
  height: 542px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center left;
`;

const BannerTitle = styled.div`
  font-size: 48px;
  color: #fff;
  margin: 0 auto;
  text-align: center;
  width: 37%;
  letter-spacing: 1.5px;
  padding-top: 200px;

  ${MEDIA_QUERY_XL} {
    width: 45%;
  }

  ${MEDIA_QUERY_LG} {
    padding-top: 180px;
    width: 60%;
  }

  ${MEDIA_QUERY_MD} {
    width: 70%;
    font-size: 40px;
    padding-top: 170px;
  }

  ${MEDIA_QUERY_SM} {
    width: 80%;
    font-size: 34px;
    padding-top: 150px;
  }

  span {
    font-weight: bold;
  }

  p {
    font-size: 20px;
    margin-bottom: 50px;

    ${MEDIA_QUERY_LG} {
      margin-bottom: 40px;
    }

    ${MEDIA_QUERY_MD} {
      font-size: 18px;
    }

    ${MEDIA_QUERY_SM} {
      font-size: 16px;
    }
  }
`;

const ServiceContainer = styled.div`
  width: 100%;
  background-color: #f6f9fc;
`;

const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1785px;
  margin: 0 auto;
  padding: 60px 0;
  justify-content: space-between;

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
    width: 360px;
    justify-content: center;
  }
`;

const Service = styled.div`
  width: 24%;
  margin: 0 6px;
  cursor: pointer;
  background: transparent;
  border: thin solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14),
    0 0 0 0 rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  text-decoration: none;

  ${MEDIA_QUERY_XL} {
    width: 22%;
  }

  ${MEDIA_QUERY_LG} {
    min-width: 20%;
  }

  ${MEDIA_QUERY_MD} {
    width: 280px;
    margin-bottom: 10px;
  }

  ${MEDIA_QUERY_SM} {
    width: 300px;
  }
`;

const ServiceImage = styled.div`
  background-image: url(${(props) => props.$img});
  height: 270px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0 0;

  ${MEDIA_QUERY_XL} {
    height: 200px;
  }

  ${MEDIA_QUERY_SM} {
    height: 260px;
  }
`;

const ServiceContent = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
  paddding: 16px;
  justify-content: center;
  align-self: center;
  padding: 20px 0;
`;

const CollectionsContainer = styled(ServiceContainer)`
  background: white;
`;

const Wrapper = styled.div`
  max-width: 1785px;
  margin: 0 auto;
  padding: 60px 0;

  ${MEDIA_QUERY_XL} {
    width: 1185px;
  }

  ${MEDIA_QUERY_LG} {
    width: 900px;
  }

  ${MEDIA_QUERY_MD} {
    width: 580px;
  }

  ${MEDIA_QUERY_SM} {
    width: 360px;
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);

  ${MEDIA_QUERY_SM} {
    text-align: center;
  }
`;

const CollectionsDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 0 24px 0;

  ${MEDIA_QUERY_MD} {
    flex-direction: column;
  }
`;

const Description = styled.div`
  color: #9e9e9e;
  font-size: 14px;

  ${MEDIA_QUERY_SM} {
    text-align: center;
    padding: 6px 15px 24px 15px;
  }
`;

const ViewAll = styled.div`
  font-size: 16px;
  color: #d23f57;
  margin-right: 30px;
  text-decoration: none;

  ${MEDIA_QUERY_MD} {
    margin-top: 10px;
  }

  ${MEDIA_QUERY_SM} {
    text-align: center;
    margin: 0px;
  }
`;

const Collections = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${MEDIA_QUERY_SM} {
    justify-content: center;
  }
`;

const CollectionContainer = styled(Service)`
  width: 24%;
  margin: 0 12px 0 0;
  cursor: pointer;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 10px;
  height: 480px;
  position: relative;
  box-sizing: border-box;
  border: none;

  ${MEDIA_QUERY_XL} {
    width: 23%;
    height: 340px;
  }

  ${MEDIA_QUERY_LG} {
    height: 300px;
  }

  ${MEDIA_QUERY_MD} {
    width: 280px;
    height: 280px;
    margin: 0 0 10px 0;
  }

  ${MEDIA_QUERY_SM} {
    width: 300px;
    height: 300px;
  }
`;

const CollectionImage = styled(ServiceImage)`
  height: 100%;
  border-radius: 10px;
`;

const CollectionContent = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 20px;
`;

const CollectionTitle = styled.div`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

const CollectionPlaces = styled.div`
  font-size: 12px;
  color: #fff;
  margin-top: 6px;
`;

const CuisineContainer = styled(CollectionsContainer)``;

const Cuisines = styled(Collections)`
  margin-top: 16px;

  ${MEDIA_QUERY_SM} {
    padding: 10px;
  }
`;

const Cuisine = styled.div`
  padding: 12px;
  width: 15%;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  ${MEDIA_QUERY_XL} {
    padding: 10px;
    width: 14%;
  }

  ${MEDIA_QUERY_LG} {
    width: 13%;
  }

  ${MEDIA_QUERY_MD} {
    width: 150px;
  }

  ${MEDIA_QUERY_SM} {
    padding: 0;
    margin-bottom: 15px;
  }
`;

const CuisineImage = styled(ServiceImage)`
  height: 150px;
  width: 150px;

  ${MEDIA_QUERY_XL} {
    height: 140px;
    width: 140px;
  }

  ${MEDIA_QUERY_LG} {
    height: 130px;
    width: 130px;
  }

  ${MEDIA_QUERY_MD} {
    height: 120px;
    width: 120px;
  }

  ${MEDIA_QUERY_SM} {
    height: 140px;
    width: 140px;
  }
`;

const CuisineContent = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #616161;
  margin-top: 12px;
  letter-spacing: 1px;

  ${MEDIA_QUERY_SM} {
    margin-top: 5px;
  }
`;

const PopularContainer = styled(CollectionsContainer)``;

const Populars = styled(Cuisines)`
  justify-content: space-between;
  margin-top: 25px;

  ${MEDIA_QUERY_SM} {
    justify-content: center;
  }
`;

const Popular = styled.div`
  position: relative;
  width: 24%;
  margin-right: 5px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14),
    0 0 0 0 rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  border: thin solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  margin-bottom: 20px;
  text-decoration: none;
  flex-shrink: 0;

  ${MEDIA_QUERY_MD} {
    width: 280px;
  }

  ${MEDIA_QUERY_SM} {
    width: 300px;
  }
`;

const PopularImage = styled(ServiceImage)`
  height: 280px;

  ${MEDIA_QUERY_LG} {
    height: 240px;
  }
`;

const PopularContent = styled.div`
  width: 100%;
`;

const PopularContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;

const PopularName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  margin-right: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.87);
`;

const PopularRate = styled.div`
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

const PopularInfo = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  color: #757575;

  span {
    color: #d23f57;
    font-weight: 600;
    margin-right: 4px;
  }
`;

const PopularDiscount = styled.div`
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

const GetApp = styled(ServiceContainer)``;

const GetAppWrapper = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: center;
  max-width: 1785px;

  ${MEDIA_QUERY_XL} {
    max-width: 1185px;
  }

  ${MEDIA_QUERY_LG} {
    max-width: 900px;
  }

  ${MEDIA_QUERY_MD} {
    max-width: 580px;
  }

  ${MEDIA_QUERY_SM} {
    max-width: 360px;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
  }
`;

const PhoneImage = styled.div`
  margin: 0 32px 12px 0px;
  width: 185px;
  height: 366px;
  background-image: url(${(props) => props.$img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  flex-shrink: 0;

  ${MEDIA_QUERY_MD} {
    margin: 0 25px 12px 0px;
  }

  ${MEDIA_QUERY_SM} {
    margin: 0;
  }
`;

const GetAppContainer = styled.div`
  ${MEDIA_QUERY_SM} {
    margin-top: 10px;
    padding: 10px;
  }
`;

const GetAppTitle = styled.div`
  font-size: 40px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: bold;
  letter-spacing: 1px;

  p {
    color: #757575;
    font-size: 18px;
    font-weight: normal;
    margin: 10px 0;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 36px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 32px;
    text-align: center;

    p {
      font-size: 16px;
    }
  }
`;

const GetAppCheckBox = styled.div`
  margin: 16px 0px;
  padding-top: 4px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  label {
    color: rgba(0, 0, 0, 0.6);
    margin-right: 30px;
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  input {
    margin-right: 10px;
    height: 19px;
    width: 19px;
  }

  ${MEDIA_QUERY_SM} {
    justify-content: center;
  }
`;

const GetAppSearchBarContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
  height: 40px;
  width: 100%;
`;

const GetAppSearchBar = styled.div`
  border-radius: 6px;
  border: 1px solid #dae1e7;
  border-right: none;
  background: #fff;
  width: 85%;
  height: 40px;

  ${MEDIA_QUERY_MD} {
    width: 75%;
  }

  ${MEDIA_QUERY_SM} {
    width: 90%;
  }

  input {
    padding: 0 12px;
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
    border: none;
    height: 40px;
    border-radius: 6px;

    ::placeholder {
      color: #9e9e9e;
    }

    :focus {
      outline: none;
    }
  }
`;

const SearchButton = styled.div`
  background: #d23f57;
  color: #fff;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 14px;
  letter-spacing: 1px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 0 6px 6px 0;
  cursor: pointer;

  :hover {
    background: rgba(210, 63, 87, 0.8);
  }

  ${MEDIA_QUERY_MD} {
    font-size: 13px;
    width: 20%;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 12px;
    width: 20%;
  }
`;

const GetAppDownload = styled.div`
  width: 100%;
`;

const DownloadContent = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  color: #9e9e9e;

  ${MEDIA_QUERY_SM} {
    text-align: center;
  }
`;

const DownloadIcons = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${MEDIA_QUERY_SM} {
    justify-content: center;
  }
`;

const DownloadIcon = styled.div`
  margin-right: 16px;
  height: 50px;
  width: 150px;
  background-image: url(${(props) => props.$icon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${MEDIA_QUERY_SM} {
    margin-right: 10px;
  }
`;

function HomePage() {
  const [bannerHeader, setBannerHeader] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < 550) {
        setBannerHeader(true);
      } else {
        setBannerHeader(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setBannerHeader(false);
      });
    };
  }, []);

  return (
    <Root>
      <Header bannerHeader={bannerHeader} />
      <Banner>
        <BannerTitle>
          {"Discover the best food & drinks in "}
          <span>New York</span>
          <p>The meals you love, delivered with care</p>
        </BannerTitle>
        <BannerSearchBar />
      </Banner>
      <ServiceContainer>
        <ServiceWrapper>
          {serviceData.map((data, index) => (
            <Service as={Link} to={data.link} key={index + 1}>
              <ServiceImage $img={data.image} />
              <ServiceContent>{data.name}</ServiceContent>
            </Service>
          ))}
        </ServiceWrapper>
      </ServiceContainer>
      <CollectionsContainer>
        <Wrapper>
          <Title>Collections</Title>
          <CollectionsDescriptionContainer>
            <Description>
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              New York, based on trends
            </Description>
            <ViewAll as={Link} to="/">
              View all collections
            </ViewAll>
          </CollectionsDescriptionContainer>
          <Collections>
            {collectionData.map((data, index) => (
              <CollectionContainer as={Link} to={data.link} key={index + 1}>
                <CollectionImage $img={data.image} />
                <CollectionContent>
                  <CollectionTitle>{data.name}</CollectionTitle>
                  <CollectionPlaces>{`${data.places} Places >`}</CollectionPlaces>
                </CollectionContent>
              </CollectionContainer>
            ))}
          </Collections>
        </Wrapper>
      </CollectionsContainer>
      <CuisineContainer>
        <Wrapper>
          <Title>Browes By Cuisine</Title>
          <Cuisines>
            {cuisineData.map((data, index) => (
              <Cuisine as={Link} to={data.link} key={index + 1}>
                <CuisineImage $img={data.image} />
                <CuisineContent>{data.name}</CuisineContent>
              </Cuisine>
            ))}
          </Cuisines>
        </Wrapper>
      </CuisineContainer>
      <PopularContainer>
        <Wrapper>
          <Title>Popular Near You</Title>
          <Populars>
            {popularData.map((data, index) => (
              <Popular key={index + 1} as={Link} to={data.link}>
                <PopularImage $img={data.image} />
                <PopularContent>
                  <PopularContentTop>
                    <PopularName>{data.name}</PopularName>
                    <PopularRate>
                      <StarIcon $icon={star} />
                      <span>{data.rate}</span>/5
                    </PopularRate>
                  </PopularContentTop>
                  <PopularInfo>
                    <span>${data.cost} </span>• {data.food} • {data.time}
                  </PopularInfo>
                </PopularContent>
                {data.discount && (
                  <PopularDiscount>{data.discount}</PopularDiscount>
                )}
              </Popular>
            ))}
          </Populars>
        </Wrapper>
      </PopularContainer>
      <GetApp>
        <Wrapper>
          <GetAppWrapper>
            <PhoneImage $img={phone} />
            <GetAppContainer>
              <GetAppTitle>
                Get the Mobile App
                <p>
                  We will send you a link, open it on your phone to download the
                  app
                </p>
              </GetAppTitle>
              <GetAppCheckBox>
                <label htmlFor="email">
                  <input type="radio" id="email" name="getApp" value="email" />
                  Email
                </label>
                <label htmlFor="phone">
                  <input type="radio" id="phone" name="getApp" value="phone" />
                  Phone
                </label>
              </GetAppCheckBox>
              <GetAppSearchBarContainer>
                <GetAppSearchBar>
                  <input placeholder="Email" />
                </GetAppSearchBar>
                <SearchButton>SEARCH</SearchButton>
              </GetAppSearchBarContainer>
              <GetAppDownload>
                <DownloadContent>Download App from</DownloadContent>
                <DownloadIcons>
                  <DownloadIcon $icon={googlePlay} />
                  <DownloadIcon $icon={appStore} />
                </DownloadIcons>
              </GetAppDownload>
            </GetAppContainer>
          </GetAppWrapper>
        </Wrapper>
      </GetApp>
    </Root>
  );
}

export default HomePage;
