import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledSlider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSlide = styled.div`
  text-align: center;
`;

export const Text = styled.p``;

export const Name = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`;

export const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;

    & + span {
      margin-left: 5px;
    }
    &.active {
      background-color: ${Theme.colors.accent};
      width: 20px;
    }
  }
`;
