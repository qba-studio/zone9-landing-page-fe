import { Box } from "@mui/material";
import React from "react";

const White = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          zIndex: 100,
          left: 0,
          right: 0,
          top: { xs: -2, lg: -8 },
        }}
      >
        <Box
          sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "center" }}
        >
          <img alt="" src="/img/WhiteDiamond.png" />
        </Box>
        <Box
          sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "center" }}
        >
          <img alt="" src="/img/WhiteDiamondSmall.png" />
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            height: { xs: "0.3px", lg: "1px" },
            width: "95%",
            backgroundColor: "white",
            opacity: "0.5",
          }}
        ></Box>
        <Box
          sx={{
            margin: { xs: "2px", lg: "4px" },
            height: "1px",
            width: "100%",
            backgroundColor: "white",
          }}
        ></Box>
        <Box
          sx={{
            height: { xs: "0.3px", lg: "1px" },
            width: "95%",
            backgroundColor: "white",
            opacity: "0.5",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default White;
