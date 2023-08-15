import { Box } from "@mui/material";
import React from "react";

const Cross = () => {
  return (
    <Box>
      <Box sx={{ display: { xs: "none", lg: "flex" } }}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z"
            fill="black"
          />
        </svg>
      </Box>
      <Box sx={{ display: { xs: "flex", lg: "none" } }}>
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2184 1.35618L9.26285 0.400604L5.47444 4.18901L1.68604 0.400604L0.730469 1.35618L4.51887 5.14458L0.730469 8.93298L1.68604 9.88856L5.47444 6.10015L9.26285 9.88856L10.2184 8.93298L6.43002 5.14458L10.2184 1.35618Z"
            fill="black"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Cross;
