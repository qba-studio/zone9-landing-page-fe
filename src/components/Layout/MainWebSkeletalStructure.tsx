import { Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import styles from "../../styles/styles.module.css";
import DrawerMenu from "../DrawerMenu";
import Cross from "../Icon/Cross";
const MainWebSkeletalStructure = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        padding: "20px",
        zIndex: 10,
      }}
    >
      <Drawer
        transitionDuration={700}
        sx={{
          position: "relative",
          "& .MuiDrawer-paperAnchorLeft": { width: "100%" },
        }}
        open={open}
        anchor="left"
      >
        <DrawerMenu />
        <Button
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: { xs: 60, xl: 100, xxl: 150 },
            left: { xs: 10, xl: 30, xxl: 50 },
            zIndex: 10,
          }}
        >
          <Cross />
        </Button>
      </Drawer>

      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "5px", lg: "20px" },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: "5px", lg: "20px" },
          }}
        >
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <img alt="" src="/img/Wing1.png" />
          </Box>
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <img alt="" src="/img/Wing1Small.png" />
          </Box>
          <Button
            onClick={() => setOpen(true)}
            sx={{
              borderRadius: "50%",
              padding: "0px",
              minWidth: "1px",
              "&.MuiButton-root:hover": { backgroundColor: "#F6C660" },
            }}
          >
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <img alt="" src="/img/MenuButton.png" />
            </Box>
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <img alt="" src="/img/MenuButtonSmall.png" />
            </Box>
          </Button>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              gap: { xs: "1px", lg: "5px" },
            }}
          >
            <Box sx={{ border: "2px solid #FFFFFF", opacity: "50%" }}></Box>
            <Box sx={{ border: "1px solid #D9D9D9", opacity: "30%" }}></Box>
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <img alt="" src="/img/Wing4.png" />
          </Box>
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <img alt="" src="/img/Wing4Small.png" />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "1px", lg: "5px" },
            }}
          >
            <Box sx={{ border: "2px solid #FFFFFF", opacity: "50%" }}></Box>
            <Box sx={{ border: "1px solid #D9D9D9", opacity: "30%" }}></Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: "20px", lg: "50px" },
            }}
          >
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <img alt="" src="/img/MainLogo.png" />
            </Box>
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <img alt="" src="/img/MainLogoSmall.png" />
            </Box>
            <Box sx={{ display: "flex", gap: "30px" }}>
              <Box>
                <Button
                  href="/infinite-content"
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    padding: 0,
                    "&.MuiButton-root :hover": {
                      backgroundColor: "#F6C660",
                    },
                    "&.MuiButton-root :after": {
                      content: '"JOIN THE FIGHT"',
                    },
                    "&.MuiButton-root .MuiTouchRipple-root": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    },
                  }}
                >
                  <img alt="" src="/img/MainButton.png" />
                </Button>
                <Button
                  href="/infinite-content"
                  sx={{
                    padding: 0,
                    display: { xs: "flex", lg: "none" },
                    "&.MuiButton-root :hover": {
                      backgroundColor: "#F6C660",
                    },
                    "&.MuiButton-root :after": {
                      content: '"JOIN THE FIGHT"',
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
                  <img alt="" src="/img/MainButtonSmall.png" />
                </Button>
              </Box>
              <Box>
                <Button
                  href="https://www.youtube.com/watch?v=wQ1bMGP7c1k"
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    padding: 0,
                    "&.MuiButton-root :hover": {
                      backgroundColor: "#F6C660",
                    },
                    "&.MuiButton-root :after": {
                      content: '"Watch Trailer"',
                    },
                    "&.MuiButton-root .MuiTouchRipple-root": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    },
                  }}
                >
                  <img alt="" src="/img/MainButton.png" />
                </Button>
                <Button
                  href="https://www.youtube.com/watch?v=wQ1bMGP7c1k"
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    padding: 0,
                    display: { xs: "flex", lg: "none" },
                    "&.MuiButton-root :hover": {
                      backgroundColor: "#F6C660",
                    },
                    "&.MuiButton-root :after": {
                      content: '"Watch Trailer"',
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
                  <img alt="" src="/img/MainButtonSmall.png" />
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: { sm: "10px", lg: "50px", xxl: "100px" },
            }}
          >
            <Box
              sx={{
                width: "33%",
                display: "flex",
                flexDirection: "column",
                gap: { xs: "1px", lg: "5px" },
              }}
            >
              <Box sx={{ border: "1px solid #D9D9D9", opacity: "30%" }}></Box>
              <Box sx={{ border: "2px solid #FFFFFF", opacity: "50%" }}></Box>
            </Box>
            <Box sx={{ width: "33%", position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  gap: { xs: "5px", lg: "15px" },
                  bottom: { xs: -20, xl: -55 },
                  fontSize: { xs: "6px", xl: "14px", xxl: "18px" },
                  color: "white",
                }}
              >
                <Box>
                  Zone 9 Survival is a post-apocalyptic Free-to-play 3D MMORPG
                  in Unreal Engine 5 ZkEVM enabled, Licensed storyline,
                  AI-powered NPC, User-driven economy
                </Box>
                <Box>
                  @2023 QBA DIGITAL TECHNOLOGY, LTE. ALL RIGHT RESERVED All
                  trademark referenced herein are the properties of their
                  respective owners
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "33%",
                display: "flex",
                flexDirection: "column",
                gap: { xs: "1px", lg: "5px" },
              }}
            >
              <Box sx={{ border: "1px solid #D9D9D9", opacity: "30%" }}></Box>
              <Box sx={{ border: "2px solid #FFFFFF", opacity: "50%" }}></Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: "5px", lg: "20px" },
          }}
        >
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <img alt="" src="/img/Wing2.png" />
          </Box>
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <img alt="" src="/img/Wing2Small.png" />
          </Box>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              gap: { xs: "1px", lg: "5px" },
            }}
          >
            <Box sx={{ border: "1px solid #D9D9D9", opacity: "30%" }}></Box>
            <Box sx={{ border: "2px solid #FFFFFF", opacity: "50%" }}></Box>
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <img alt="" src="/img/Wing3.png" />
          </Box>
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <img alt="" src="/img/Wing3Small.png" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainWebSkeletalStructure;
