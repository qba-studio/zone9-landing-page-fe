import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ContentSkeletalStructure from "../../components/Layout/ContentSkeletalStructure";
import WhiteHightLight from "../../components/TitleHightlight/White";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const index = () => {
  const [getStory, setGetStory] = useState(1);
  var settings = {
    centerPadding: "240px",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          centerPadding: "160px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "40px",
        },
      },
    ],
    afterChange: (current) => {
      setGetStory(current);
    },
  };
  const storyImg = [
    { img: "/img/StorylinePic1.png" },
    { img: "/img/StorylinePic2.png" },
    { img: "/img/StorylinePic3.png" },
    { img: "/img/StorylinePic4.png" },
  ];
  return (
    <Box sx={{ position: "relative" }}>
      <ContentSkeletalStructure />
      <Box sx={{ position: "relative" }}>
        <img
          loading="lazy"
          width={"100%"}
          alt=""
          src="/img/StorylineBackGround.png"
        />
        <Box
          sx={{
            position: "absolute",
            left: "10%",
            top: "20%",
            right: "10%",
            bottom: "20%",
            zIndex: 11,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box sx={{ width: { xs: "60%", md: "70%", xxl: "80%" } }}>
              <div>
                <Slider {...settings}>
                  {storyImg.map((e, index) => (
                    <img
                      loading="lazy"
                      width={"100%"}
                      alt=""
                      key={index}
                      src={e.img}
                    />
                  ))}
                </Slider>
              </div>
            </Box>
            {getStory === 0 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  color: "white",
                  width: "35%",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: "20px", lg: "40px", xxl: "70px" },
                    textTransform: "uppercase",
                  }}
                >
                  <p>Based On a Novel</p>
                </Box>
                <WhiteHightLight />
                <Box
                  sx={{
                    paddingTop: { xs: "10px", lg: "30px" },
                    fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
                  }}
                >
                  Immerse yourself in a captivating narrative based on a
                  thrilling novel, providing a rich and immersive story
                  foundation for your gameplay experience.
                </Box>
              </Box>
            )}
            {getStory === 1 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  color: "white",
                  width: "35%",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: "20px", lg: "40px", xxl: "70px" },
                    textTransform: "uppercase",
                  }}
                >
                  <p>Licensed By The Studio</p>
                </Box>
                <WhiteHightLight />
                <Box
                  sx={{
                    paddingTop: { xs: "10px", lg: "30px" },
                    fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
                  }}
                >
                  Enjoy a fully licensed storyline crafted in collaboration with
                  the studio, ensuring authenticity and coherence within the
                  game's universe.
                </Box>
              </Box>
            )}
            {getStory === 2 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  color: "white",
                  width: "35%",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: "20px", lg: "40px", xxl: "70px" },
                    textTransform: "uppercase",
                  }}
                >
                  <p>Written by 15 YoE Author</p>
                </Box>
                <WhiteHightLight />
                <Box
                  sx={{
                    paddingTop: { xs: "10px", lg: "30px" },
                    fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
                  }}
                >
                  Delve into a masterfully written narrative by a seasoned
                  author with 15 years of experience, guaranteeing compelling
                  character development and engaging plot twists.
                </Box>
              </Box>
            )}
            {getStory === 3 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  color: "white",
                  width: "35%",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: "20px", lg: "40px", xxl: "70px" },
                    textTransform: "uppercase",
                  }}
                >
                  <p>Illustrated by hand</p>
                </Box>
                <WhiteHightLight />
                <Box
                  sx={{
                    paddingTop: { xs: "10px", lg: "30px" },
                    fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
                  }}
                >
                  Experience the visual splendor of a hand-illustrated world,
                  bringing the story to life with stunning artistry and
                  attention to detail.
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 12,
          bottom: "12.5%",
          left: "12.5%",
        }}
      >
        <Button
          href="/storyline"
          sx={{
            display: { xs: "none", lg: "flex" },
            padding: 0,
            "&.MuiButton-root :hover": {
              backgroundColor: "#F6C660",
            },
            "&.MuiButton-root :after": {
              content: '"Back to Campaign"',
            },
            "&.MuiButton-root .MuiTouchRipple-root": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            },
          }}
        >
          <img loading="lazy" alt="" src="/img/MainButton.png" />
        </Button>
        <Button
          href="/storyline"
          sx={{
            padding: 0,
            display: { xs: "flex", lg: "none" },
            "&.MuiButton-root :hover": {
              backgroundColor: "#F6C660",
            },
            "&.MuiButton-root :after": {
              content: '"Back to Campaign"',
              fontSize: "6px",
            },
            "&.MuiButton-root .MuiTouchRipple-root": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            },
          }}
        >
          <img loading="lazy" alt="" src="/img/MainButtonSmall.png" />
        </Button>
      </Box>
    </Box>
  );
};

export default index;
