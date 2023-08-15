import { Box } from "@mui/material";
import React, { useState } from "react";

import MainWebSkeletalStructure from "../components/Layout/MainWebSkeletalStructure";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        {isLoading && (
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 1000,
            }}
          >
            <video
              width={"100%"}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              src="https://zone9.s3.ap-southeast-1.amazonaws.com/landing-page/Loading.mp4"
            ></video>
          </Box>
        )}
        <Box>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              zIndex: 9,
              height: "100%",
              background:
                "radial-gradient(50% 50.00% at 50% 50.00%, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.80) 100%, rgba(0, 0, 0, 0.80) 100%)",
            }}
          ></Box>
          <MainWebSkeletalStructure />
          <video
            onLoadedData={() => {
              setIsLoading(false);
            }}
            width={"100%"}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="https://zone9.s3.ap-southeast-1.amazonaws.com/landing-page/Z9S_TeaserTrailer_4K.mp4"
          ></video>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
