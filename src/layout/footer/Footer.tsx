import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Ivan</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                width={"21px"}
                height={"21px"}
                viewBox={"0 0 21px 21px"}
                iconId={"instagram"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                width={"21px"}
                height={"21px"}
                viewBox={"0 0 21px 21px"}
                iconId={"telegram"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                width={"21px"}
                height={"21px"}
                viewBox={"0 0 21px 21px"}
                iconId={"vk-logo"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                width={"21px"}
                height={"21px"}
                viewBox={"0 0 21px 21px"}
                iconId={"linkedin"}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2024 Ivan Sobenin, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.primaryBg};
  padding: 40px 0 40px;
`;

const Name = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 3px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0 30px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${Theme.colors.accent};

  &:hover {
    color: ${Theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;
