import React from "react";
import { Box } from "@mui/material";

const Youtube = () => {
  return (
    <Box>
      <Box sx={{ display: { xs: "none", lg: "flex" } }}>
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.792 0.423618C18.6521 0.654682 19.3325 1.33505 19.5635 2.19512C19.9872 3.76123 20 7.00898 20 7.00898C20 7.00898 20 10.2696 19.5764 11.8228C19.3453 12.6829 18.665 13.3633 17.8049 13.5944C16.2516 14.018 10 14.018 10 14.018C10 14.018 3.74839 14.018 2.19512 13.5944C1.33504 13.3633 0.654686 12.6829 0.42362 11.8228C0 10.2567 0 7.00898 0 7.00898C0 7.00898 0 3.76123 0.410783 2.20796C0.641849 1.34788 1.32221 0.667524 2.18228 0.43646C3.73556 0.0128338 9.98716 0 9.98716 0C9.98716 0 16.2388 0 17.792 0.423618ZM13.1836 7.00899L7.99743 10.0128V4.00514L13.1836 7.00899Z"
            fill="black"
          />
        </svg>
      </Box>
      <Box sx={{ display: { xs: "flex", lg: "none" } }}>
        <svg
          width="7"
          height="6"
          viewBox="0 0 7 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.1344 0.676687C6.42584 0.754985 6.65638 0.98553 6.73468 1.27697C6.87823 1.80766 6.88258 2.90817 6.88258 2.90817C6.88258 2.90817 6.88258 4.01304 6.73903 4.53938C6.66073 4.83082 6.43019 5.06136 6.13875 5.13966C5.61241 5.28321 3.49402 5.28321 3.49402 5.28321C3.49402 5.28321 1.37563 5.28321 0.849298 5.13966C0.557856 5.06136 0.327313 4.83082 0.249015 4.53938C0.105469 4.00869 0.105469 2.90817 0.105469 2.90817C0.105469 2.90817 0.105469 1.80766 0.244665 1.28132C0.322963 0.989879 0.553506 0.759336 0.844948 0.681039C1.37128 0.537491 3.48967 0.533142 3.48967 0.533142C3.48967 0.533142 5.60806 0.533142 6.1344 0.676687ZM4.57279 2.90818L2.81544 3.92605V1.8903L4.57279 2.90818Z"
            fill="black"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Youtube;
