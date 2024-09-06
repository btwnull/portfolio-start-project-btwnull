import React from "react";
import styled from "styled-components";
import { TabLink } from "../../../../components/Link";
import { Theme } from "../../../../styles/Theme";

export type TabsStatusType = "all" | "landing" | "react" | "spa";

type TabMenuPropsType = {
  tabItems: Array<{
    title: string;
    status: TabsStatusType;
  }>;
  changeFilterStatus: (value: TabsStatusType) => void;
  currentFilterStatus: string;
};

export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <TabLink
                active={props.currentFilterStatus === item.status}
                as={"button"}
                onClick={() => {
                  props.changeFilterStatus(item.status);
                }}
              >
                {item.title}
              </TabLink>
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
