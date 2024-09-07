import React, { useState } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/proj-1.png";
import timerImg from "./../../../assets/images/proj-2.png";
import { Container } from "../../../components/Container";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { AnimatePresence, motion } from "framer-motion";
import { Theme } from "../../../styles/Theme";

// const tabItems = ["All", "landing page", "React", "spa"];

const tabItems: Array<{
  title: string;
  status: TabsStatusType;
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "landing page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "spa",
    status: "spa",
  },
];

const worksData = [
  {
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
    id: 1,
  },

  {
    title: "Timer",
    src: timerImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "react",
    id: 2,
  },
  {
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
    id: 3,
  },

  {
    title: "Timer",
    src: timerImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "react",
    id: 4,
  },
  {
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
    id: 5,
  },

  {
    title: "Timer",
    src: timerImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "react",
    id: 6,
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");

  let filteredWorks = worksData;

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((work) => work.type === "landing");
  }
  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => work.type === "react");
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <StyledWorks id={"works"}>
      <Container>
        <SectionTitle>My Works</SectionTitle>

        <TabMenu
          tabItems={tabItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />

        <FlexWrapper
          justify={"space-between"}
          align={"flex-start"}
          wrap={"wrap"}
        >
          <AnimatePresence>
            {filteredWorks.map((w) => {
              return (
                <motion.div
                  style={{ width: "400px", flexGrow: 1, maxWidth: "540px" }}
                  layout={true}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={w.id}
                >
                  <Work title={w.title} src={w.src} text={w.text} key={w.id} />
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* <Work
            src={socialImg}
            title={"Social Network"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }
            type={"spa"}
          />
          <Work
            src={timerImg}
            title={"Timer"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
            }
            type={"react"} */}
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  position: relative;
  ${FlexWrapper} {
    gap: 30px;
    @media ${Theme.media.pointForWorks} {
      justify-content: center; // значение для медиазапроса
      align-items: center; // значение для медиазапроса
    }
  }
`;
