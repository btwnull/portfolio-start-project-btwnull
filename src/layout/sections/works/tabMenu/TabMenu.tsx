import React from "react";
import styled from "styled-components";
import { TabLink } from "../../../../components/Link";

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <TabLink href="">{item}</TabLink>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`;

const ListItem = styled.li``;
