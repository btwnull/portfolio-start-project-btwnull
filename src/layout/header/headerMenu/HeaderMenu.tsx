import React from "react";
import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

// export const items = ["Home", "Skills", "Works", "Testimony", "Contact"];
export const items = [
  {
    title: "Home",
    href: "home",
  },

  {
    title: "Skills",
    href: "skills",
  },
  {
    title: "Works",
    href: "works",
  },
  {
    title: "Testimony",
    href: "testimony",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

export const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <ul>
        {items.map((item, index) => {
          return (
            <ListItem key={index}>
              <NavLink
                to={item.href}
                smooth={true}
                activeClass="active"
                spy={true}
                offset={-20}
              >
                {item.title}
                <Mask>
                  <span>{item.title}</span>
                </Mask>
                <Mask>
                  <span>{item.title}</span>
                </Mask>
              </NavLink>
            </ListItem>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  @media ${Theme.media.tablet} {
    display: none;
  }
`;

const ListItem = styled.li`
  position: relative;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  /* outline: 1px solid red; */
  color: ${Theme.colors.accent};
  transition: ${Theme.animations.transition};
  /* :nth-child(0n + 1) {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  } */
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const NavLink = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400px;
  font-size: 30px;
  text-align: center;
  color: transparent;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${Theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);

    transition: ${Theme.animations.transition};
  }

  &:hover,
  &.active {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${Theme.colors.font};
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`;
