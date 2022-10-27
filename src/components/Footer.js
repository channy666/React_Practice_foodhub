import styled from "styled-components";
import { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../utils/icon/logo.png";
import GooglePlayIcon from "../utils/icon/googlePlay.png";
import AppStoreIcon from "../utils/icon/appStore.png";
import FBIcon from "../utils/icon/facebook.png";
import TwitterIcon from "../utils/icon/twitter.png";
import IGIcon from "../utils/icon/instagram.png";
import YTIcon from "../utils/icon/youtube.png";
import GoogleIcon from "../utils/icon/google.png";
import {
  MEDIA_QUERY_XL,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from "../utils/breakpoints";

const Root = styled.div`
  width: 100%;
  background: #f6f9fc;
  padding: 64px 0px;
`;

const Wrapper = styled.div`
  width: 1785px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

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
    padding: 0;
  }
`;

const Row = styled.div`
  width: 24%;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  ${MEDIA_QUERY_XL} {
    width: 23%;
  }

  ${MEDIA_QUERY_LG} {
    width: 410px;
    margin-bottom: 30px;
  }

  ${MEDIA_QUERY_MD} {
    width: 550px;
  }

  ${MEDIA_QUERY_SM} {
    width: 340px;
    align-items: center;
    margin-right: 0;
  }
`;

const Logo = styled.div`
  height: 48px;
  width: 48px;
  background-image: url(${(props) => props.$icon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 25px;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 600;
`;

const Content = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
  color: #4b566b;
  line-height: 25px;
  text-decoration: none;

  ${(props) =>
    props.to &&
    `
    cursor: pointer;

    :hover {
      color: #d23f57;
    }
  `}

  ${MEDIA_QUERY_SM} {
    text-align: center;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DownloadIcon = styled.div`
  height: 46px;
  width: 120px;
  background-image: url(${(props) => props.$icon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 16px;

  ${MEDIA_QUERY_XL} {
    height: 40px;
    width: 110px;
    margin-right: 16px;
  }

  ${MEDIA_QUERY_LG} {
  }

  ${MEDIA_QUERY_MD} {
  }

  ${MEDIA_QUERY_SM} {
  }
`;

const SocialMediaIconBackground = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: #0f3460;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%),
    0 1px 18px 0 rgb(0 0 0 / 12%);
  cursor: pointer;

  ${MEDIA_QUERY_LG} {
    height: 28px;
    width: 28px;
  }
`;

const SocialMediaIcon = styled(DownloadIcon)`
  height: 16px;
  width: 16px;
  margin: 0px;

  ${MEDIA_QUERY_LG} {
    height: 14px;
    width: 14px;
  }
`;

function Footer() {
  return (
    <Root>
      <Wrapper>
        <Row>
          <Logo $icon={logo} />
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </Content>
          <Icons>
            <DownloadIcon $icon={GooglePlayIcon} />
            <DownloadIcon $icon={AppStoreIcon} />
          </Icons>
        </Row>
        <Row>
          <Title>About Us</Title>
          <Content as={Link} to="/">
            Careers
          </Content>
          <Content as={Link} to="/">
            Our Stores
          </Content>
          <Content as={Link} to="/">
            Our Cares
          </Content>
          <Content as={Link} to="/">
            {"Terms & Conditions"}
          </Content>
          <Content as={Link} to="/">
            Privacy Policy
          </Content>
        </Row>
        <Row>
          <Title>Customer Care</Title>
          <Content as={Link} to="/">
            Help Center
          </Content>
          <Content as={Link} to="/">
            How to Buy
          </Content>
          <Content as={Link} to="/">
            Track Your Order
          </Content>
          <Content as={Link} to="/">
            {"Corporate & Bulk Purchasing"}
          </Content>
          <Content as={Link} to="/">
            {"Returns & Refunds"}
          </Content>
        </Row>
        <Row>
          <Title>Contact Us</Title>
          <Content>
            Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh. Email:
            uilib@gmail.com Phone: +880 1123 456 780
          </Content>
          <Content>Sylhet, Bangladesh.</Content>
          <Content>Email: uilib@gmail.com</Content>
          <Content>Phone: +880 1123 456 780</Content>
          <Icons>
            <SocialMediaIconBackground>
              <SocialMediaIcon $icon={FBIcon} />
            </SocialMediaIconBackground>
            <SocialMediaIconBackground>
              <SocialMediaIcon $icon={TwitterIcon} />
            </SocialMediaIconBackground>
            <SocialMediaIconBackground>
              <SocialMediaIcon $icon={IGIcon} />
            </SocialMediaIconBackground>
            <SocialMediaIconBackground>
              <SocialMediaIcon $icon={YTIcon} />
            </SocialMediaIconBackground>
            <SocialMediaIconBackground>
              <SocialMediaIcon $icon={GoogleIcon} />
            </SocialMediaIconBackground>
          </Icons>
        </Row>
      </Wrapper>
    </Root>
  );
}

export default memo(Footer);
