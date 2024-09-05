import styled from "styled-components";
import { Icon } from "./icon/Icon";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

export const ButtonBackToTop = () => {
  const [showBtn, setshowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowBtn(true);
      } else {
        setshowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn && (
        <StyledButtonBackToTop
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <Icon
            iconId={"backToTop"}
            width={"16px"}
            height={"15px"}
            viewBox={"0 0 16 15"}
          />
        </StyledButtonBackToTop>
      )}
    </>
  );
};

const StyledButtonBackToTop = styled.button`
  width: 30px;
  height: 30px;
  padding: 7px;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  right: 30px;
  bottom: 30px;
`;
