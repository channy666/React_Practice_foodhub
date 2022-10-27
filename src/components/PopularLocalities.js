import styled from "styled-components";
import { memo } from "react";
import { Link } from "react-router-dom";
import { popularLocalitiesData } from "../utils/webData/others";
import {
  MEDIA_QUERY_XL,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from "../utils/breakpoints";

const Root = styled.div`
  width: 100%;
  background: white;
  padding: 64px 0px;

  ${MEDIA_QUERY_SM} {
    padding: 48px 0px;
  }
`;

const Wrapper = styled.div`
  width: 1785px;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;

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

const PopularLocalitiesTitle = styled.div`
  font-size: 25px;
  margin-bottom: 25px;
  font-weight: bold;
  letter-spacing: 1px;

  ${MEDIA_QUERY_SM} {
    text-align: center;
  }
`;

const LocalitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Localities = styled.div`
  width: 24%;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  ${MEDIA_QUERY_XL} {
    width: 23%;
  }

  ${MEDIA_QUERY_LG} {
    width: 263px;
    padding-right: 8px;
    margin-bottom: 20px;
  }

  ${MEDIA_QUERY_SM} {
    align-items: center;
    width: 100%;
  }
`;

const Locality = styled.div`
  height: 24px;
  margin-bottom: 12px;
  text-decoration: none;
  color: #000;

  span {
    color: #9e9e9e;
  }
`;

function PopularLocalities() {
  return (
    <Root>
      <Wrapper>
        <PopularLocalitiesTitle>
          {"Popular Localities In & Around New York"}
        </PopularLocalitiesTitle>
        <LocalitiesContainer>
          {popularLocalitiesData.map((datas, index) => (
            <Localities key={index + 1}>
              {datas.map((data, index) => (
                <Locality key={index + 1} as={Link} to={data.link}>
                  {data.name}
                  <span>{` (${data.places} places)`}</span>
                </Locality>
              ))}
            </Localities>
          ))}
        </LocalitiesContainer>
      </Wrapper>
    </Root>
  );
}

export default memo(PopularLocalities);
