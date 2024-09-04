import styled from "styled-components";
import { Icon } from "./icon/Icon";

export const ButtonBackToTop = () => {
  const backToTopClickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledButtonBackToTop onClick={backToTopClickHandler}>
      <Icon
        iconId={"backToTop"}
        width={"16px"}
        height={"15px"}
        viewBox={"0 0 16 15"}
      />
    </StyledButtonBackToTop>
  );
};

const StyledButtonBackToTop = styled.button`
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 0;
  right: 30px;

  /* opacity: 0;
  visibility: hidden; */
`;
