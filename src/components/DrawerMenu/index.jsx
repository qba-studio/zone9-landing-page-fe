import { Box, Button } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

import Discord from "../Icon/Discord";
import Tele from "../Icon/Tele";
import Twitter from "../Icon/Twitter";
import Youtube from "../Icon/Youtube";

const DrawerMenu = () => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <video
        width={"100%"}
        autoPlay
        loop
        muted
        preload="auto"
        src="https://zone9.s3.ap-southeast-1.amazonaws.com/landing-page/New_trailer.mp4"
      ></video>
      <Box
        sx={{
          position: "absolute",
          zIndex: 9,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <img alt="" width={"100%"} src="/img/DrawerOpacityLayer.png" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 10,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          padding: {
            xs: "60px 80px",
            xl: "100px 150px",
            xxl: "150px 220px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              alignSelf: "flex-start",
              paddingBottom: {
                xs: "80px",
                lg: "40px",
                xl: "60px",
                xxl: "150px",
              },
              display: { xs: "none", lg: "block" },
            }}
          >
            <img alt="" src="/img/MenuLogo.png" />
          </Box>
          <Box
            sx={{
              alignSelf: "flex-start",
              paddingBottom: "50px",
              display: { xs: "block", lg: "none" },
            }}
          >
            <img alt="" src="/img/MenuLogoSmall.png" />
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                width: "40%",
              }}
            >
              <Box>
                <Box
                  sx={{
                    paddingBottom: {
                      xs: "32px",
                      lg: "10px",
                      xl: "20px",
                      xxl: "32px",
                    },
                  }}
                >
                  <Button
                    sx={{
                      color: "black",
                      fontSize: { xs: "16px", lg: "50px" },
                      justifyContent: "start",
                      padding: "0px",
                    }}
                    href="/"
                  >
                    <p>HOME PAGE</p>
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: "5px", xl: "5px", xxl: "15px" },
                    color: "black",
                  }}
                >
                  <Link
                    underline={"none"}
                    width={"fit-content"}
                    href="/infinite-content"
                    sx={{
                      color: "black",
                      fontSize: { xs: "7px", lg: "20px" },
                      "&:hover": {
                        color: "#F6C660",
                      },
                    }}
                  >
                    Infinite Content
                  </Link>
                  <Link
                    underline={"none"}
                    width={"fit-content"}
                    href="/storyline"
                    sx={{
                      color: "black",
                      fontSize: { xs: "7px", lg: "20px" },
                      "&:hover": {
                        color: "#F6C660",
                      },
                    }}
                  >
                    Complete Storyline
                  </Link>
                  <Link
                    underline={"none"}
                    width={"fit-content"}
                    href="/free-market"
                    sx={{
                      color: "black",
                      fontSize: { xs: "7px", lg: "20px" },
                      "&:hover": {
                        color: "#F6C660",
                      },
                    }}
                  >
                    Free Market
                  </Link>
                  <Link
                    underline={"none"}
                    width={"fit-content"}
                    href="realistic-gameplay"
                    sx={{
                      color: "black",
                      fontSize: { xs: "7px", lg: "20px" },
                      "&:hover": {
                        color: "#F6C660",
                      },
                    }}
                  >
                    Realistic Gameplay
                  </Link>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: "5px", lg: "20px" },
                    alignItems: "center",
                  }}
                >
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://discord.gg/BSrWyWpS"
                  >
                    <Discord />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://t.me/Zone9SurvivalOfficial"
                  >
                    <Tele />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/Z9sOfficial"
                  >
                    <Twitter />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://www.youtube.com/@zone9survivalofficial896"
                  >
                    <Youtube />
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                width: "-webkit-fill-available",
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    color: "white",
                    fontSize: { xs: "7px", lg: "20px" },
                  }}
                >
                  <Box>Expansions</Box>
                  <Box>Help</Box>
                  <Box>Contact & Legal</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DrawerMenu;
