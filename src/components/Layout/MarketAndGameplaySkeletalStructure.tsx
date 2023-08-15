import { Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import DrawerMenu from "../DrawerMenu";
import Cross from "../Icon/Cross";

const MarketAndGameplaySkeletalStructure = () => {
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
            <Box sx={{ border: "2px solid #D9D9D9", opacity: "50%" }}></Box>
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
            <Box sx={{ border: "2px solid #D9D9D9", opacity: "50%" }}></Box>
            <Box sx={{ border: "1px solid #D9D9D9", opacity: "30%" }}></Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: { xs: "1px", lg: "5px" },
              }}
            >
              <Box sx={{ border: "1px solid #D9D9D9", opacity: "30%" }}></Box>
              <Box sx={{ border: "2px solid #D9D9D9", opacity: "50%" }}></Box>
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
            <Box sx={{ border: "2px solid #D9D9D9", opacity: "50%" }}></Box>
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

export default MarketAndGameplaySkeletalStructure;
