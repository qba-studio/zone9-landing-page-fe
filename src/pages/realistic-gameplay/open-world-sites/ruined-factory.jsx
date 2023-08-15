import { Box, Button } from "@mui/material";
import React from "react";
import MarketAndGameplaySkeletalStructure from "../../../components/Layout/MarketAndGameplaySkeletalStructure";
import YellowLine from "../../../components/Icon/YellowLine";
import YellowEclipse from "../../../components/Icon/YellowEclipse";
import GrayLine from "../../../components/Icon/GrayLine";
import GrayEclipse from "../../../components/Icon/GrayEclipse";
import WhiteHightLight from "../../../components/TitleHightlight/White";

const index = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <MarketAndGameplaySkeletalStructure />
      <Box
        sx={{ position: "absolute", zIndex: 12, bottom: "12.5%", left: "12%" }}
      >
        <Button
          href="/realistic-gameplay/open-world"
          sx={{
            display: { xs: "none", lg: "flex" },
            padding: 0,
            "&.MuiButton-root :hover": {
              backgroundColor: "#F6C660",
            },
            "&.MuiButton-root :after": {
              content: '"BACK TO WORLD"',
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
          href="/realistic-gameplay/open-world"
          sx={{
            padding: 0,
            display: { xs: "flex", lg: "none" },
            "&.MuiButton-root :hover": {
              backgroundColor: "#F6C660",
            },
            "&.MuiButton-root :after": {
              content: '"BACK TO WORLD"',
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
            href="/realistic-gameplay/open-world-sites/abaddoned-city"
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
              href="/realistic-gameplay/open-world-sites/abaddoned-city"
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
              href="/realistic-gameplay/open-world-sites/sub-urban-area"
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
              href="/realistic-gameplay/open-world-sites/jungle-settlement"
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
            href="/realistic-gameplay/open-world-sites/sub-urban-area"
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
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "25%",
          zIndex: 9,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "bottom",
          }}
        >
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
              <p>Ruined Factory</p>
            </Box>
            <WhiteHightLight />
            <Box
              sx={{
                paddingTop: { xs: "10px", lg: "30px" },
                fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
              }}
            >
              Step into the decaying remnants of a once bustling factory, now a
              desolate and treacherous environment. Navigate through twisted
              metal, broken machinery, and hazardous obstacles as you unravel
              the secrets hidden within its walls
            </Box>
          </Box>
        </Box>
      </Box>
      <img
        loading="lazy"
        width={"100%"}
        alt=""
        src="/img/world/ruined-factory.png"
      />
    </Box>
  );
};

export default index;
