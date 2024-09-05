import React from "react";
import styled, { css } from "styled-components";
import { Theme } from "../styles/Theme";

export const TabLink = styled.a<{ active?: boolean }>`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    background-color: ${Theme.colors.accent};

    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 0;
    transition: ${Theme.animations.transition};

    ${(props) =>
      props.active === true &&
      css<{ active?: boolean }>`
        height: 10px;
      `};
  }
`;
