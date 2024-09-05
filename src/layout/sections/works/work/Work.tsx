import React from "react";
import styled from "styled-components";
import { TabLink } from "../../../../components/Link";
import { Theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
  title?: string;
  text?: string;
  src?: string;
  type?: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.src} alt="" />
        <Button>view project</Button>
      </ImageWrapper>
      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <TabLink active href={"#"}>
          demo
        </TabLink>
        <TabLink href={"#"}>code</TabLink>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: ${Theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;

  ${TabLink} {
    padding: 10px 0;

    &${TabLink} {
      margin-left: 10px;
    }
  }

  @media ${Theme.media.desktop} {
    max-width: 540px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${Theme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    opacity: 0;

    transition: ${Theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media ${Theme.media.tablet} {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Description = styled.div`
  padding: 25px 20px;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;
