import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./../../styles/slider.css";
import { StyledSlider, Text, Name, StyledSlide } from "./StyledSlider";

type SlidePropsType = {
  text: string;
  userName: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <StyledSlide>
      <Text>{props.text}</Text>
      <Name>@{props.userName}</Name>
    </StyledSlide>
  );
};

const items = [
  <Slide
    userName={"ivan ivanov"}
    text={
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsu dolor sit amet, consectetur adipisicing elit."
    }
  />,
  <Slide
    userName={"piotr petrov"}
    text={
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
  />,
  <Slide
    userName={"igor igover"}
    text={
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
  />,
];

export const Slider = () => (
  <StyledSlider>
    <AliceCarousel disableButtonsControls mouseTracking items={items} />
  </StyledSlider>
);
