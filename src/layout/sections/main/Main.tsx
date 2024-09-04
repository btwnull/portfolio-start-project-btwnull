import styled from "styled-components";
import React from "react";
import photo from "../../../assets/images/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Ivan Sobenin</span>
            </Name>
            <MainTitle>A Web Developer</MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt="" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #fff5e7;
  display: flex;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${Theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${Theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${Theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

const MainTitle = styled.h1`
  /* font-weight: 400px;
  font-size: 27px; */
  ${font({ weight: 400, Fmax: 27, Fmin: 20 })}
`;

const Name = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36,
  })}
  /* font-family: 'Josefin Sans', sans-serif;
  font-weight: 700px;
  font-size: 50px; */
  letter-spacing: 0.05em;
  margin: 10px 0;

  @media ${Theme.media.mobile} {
    margin: 15px 0 22px;
  }

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${Theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const SmallText = styled.span`
  font-weight: 400px;
  font-size: 14px;
  display: inline-block;
  margin-top: 50px;
`;
