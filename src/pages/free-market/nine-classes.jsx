import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import MarketAndGameplaySkeletalStructure from "../../components/Layout/MarketAndGameplaySkeletalStructure";
import YellowLine from "../../components/Icon/YellowLine";
import YellowEclipse from "../../components/Icon/YellowEclipse";
import GrayLine from "../../components/Icon/GrayLine";
import GrayEclipse from "../../components/Icon/GrayEclipse";
import Slider from "react-slick";
import WhiteHightLight from "../../components/TitleHightlight/White";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const index = () => {
  const [getClass, setGetClass] = useState(0);
  var settings = {
    centerPadding: "240px",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      setGetClass(current);
    },
  };
  const classImg = [
    { img: "/img/class/Athlete.png" },
    { img: "/img/class/Hunter.png" },
    { img: "/img/class/Police.png" },
    { img: "/img/class/Soldier.png" },
    { img: "/img/class/Doctor.png" },
    { img: "/img/class/Chef.png" },
    { img: "/img/class/Engineer.png" },
    { img: "/img/class/Mechanic.png" },
    { img: "/img/class/Scientist.png" },
  ];
  return (
    <Box sx={{ position: "relative" }}>
      <MarketAndGameplaySkeletalStructure />
      <Box
        sx={{
          position: "absolute",
          zIndex: 12,
          bottom: "12.5%",
          left: "12.5%",
        }}
      >
        <Button
          href="/free-market"
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
          href="/free-market"
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
      <Box
        sx={{
          position: "absolute",
          left: "35%",
          right: "35%",
          bottom: "13.5%",
          zIndex: 12,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            href="/free-market/user-driven-economy"
            sx={{
              minWidth: { xs: "10px", lg: "30px" },
              padding: "5px",
              margin: {
                xs: "0px 10px 0px 5px",
                lg: "0px 30px 0px 25px",
              },
              "&.MuiButton-root:hover": { backgroundColor: "#F6C660" },
            }}
          >
            <img loading="lazy" alt="" src="/img/Prev.png" />
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "2px",
                height: "10px",
                backgroundColor: "#F6C660",
              }}
            ></Box>
            <YellowLine />
            <Button
              href="/free-market/user-driven-economy"
              sx={{
                minWidth: "1px",
                borderRadius: "50%",
                padding: 0,
                "&.MuiButton-root:hover": {
                  backgroundColor: "#F6C660",
                },
              }}
            >
              <YellowEclipse />
            </Button>
            <YellowLine />
            <YellowEclipse />
            <GrayLine />
            <Button
              href="/free-market/commodites-exchange"
              sx={{
                minWidth: "1px",
                borderRadius: "50%",
                padding: 0,
                "&.MuiButton-root:hover": {
                  backgroundColor: "#F6C660",
                },
              }}
            >
              <GrayEclipse />
            </Button>
            <GrayLine />
            <Button
              href="/free-market/items-auction"
              sx={{
                minWidth: "1px",
                borderRadius: "50%",
                padding: 0,
                "&.MuiButton-root:hover": {
                  backgroundColor: "#F6C660",
                },
              }}
            >
              <GrayEclipse />
            </Button>
          </Box>
          <Button
            href="/free-market/commodites-exchange"
            sx={{
              minWidth: { xs: "10px", lg: "30px" },
              padding: "5px",
              margin: {
                xs: "0px 5px 0px 10px",
                lg: "0px 25px 0px 30px",
                "&.MuiButton-root:hover": {
                  backgroundColor: "#F6C660",
                },
              },
            }}
          >
            <img loading="lazy" alt="" src="/img/Next.png" />
          </Button>
        </Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        <img
          loading="lazy"
          width={"100%"}
          alt=""
          src="/img/MarketBackGround2.png"
        />
        <Box
          sx={{
            position: "absolute",
            left: "10%",
            top: { xs: "15%", lg: "10%" },
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
            <Box
              sx={{
                width: {
                  xs: "43%",
                  md: "48%",
                  lg: "50%",
                  xl: "52%",
                  xxl: "53%",
                },
              }}
            >
              <div>
                <Slider {...settings}>
                  {classImg.map((e, index) => (
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
            {getClass < 4 && (
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
                  <p>Combat Class</p>
                </Box>
                <WhiteHightLight />
                <Box
                  sx={{
                    paddingTop: { xs: "10px", lg: "30px" },
                    fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
                  }}
                >
                  Engage in a user-driven economy where players dictate the
                  prices, supply, and demand of goods and services, creating a
                  dynamic and evolving market.
                </Box>
              </Box>
            )}
            {getClass >= 4 && (
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
                  <p>service class</p>
                </Box>
                <WhiteHightLight />
                <Box
                  sx={{
                    paddingTop: { xs: "10px", lg: "30px" },
                    fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
                  }}
                >
                  Explore five service and production classes, allowing you to
                  specialize in crafting, trading, gathering, and other economic
                  activities to shape the market.
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default index;
