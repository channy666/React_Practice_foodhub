import styled from "styled-components";
import { memo } from "react";

const ButtonContainer = styled.div`
  height: ${(props) => props.$size};
  width: ${(props) => props.$size};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    background: rgba(0, 0, 0, 0.05);
  }

  ${(props) =>
    props.$circle &&
    `
    border-radius: 50%;
  `}

  ${(props) =>
    props.$backgroundColor &&
    `
    background: ${(props) => props.$backgroundColor};
  `}
`;

const ButtonIcon = styled.div`
  background-image: url(${(props) => props.$icon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: ${(props) => props.$size};
  width: ${(props) => props.$size};
`;

function Button({ icon, iconSize, buttonSize, circle, backgroundColor }) {
  return (
    <ButtonContainer
      $circle={circle}
      $size={buttonSize}
      $backgroundColor={backgroundColor}
    >
      <ButtonIcon $icon={icon} $size={iconSize} />
    </ButtonContainer>
  );
}

export default memo(Button);
