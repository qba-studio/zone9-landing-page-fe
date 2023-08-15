import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import DisplayLine from "../../components/Icon/DisplayLine";
import WhiteHightLight from "../../components/TitleHightlight/White";
import Link from "next/link";
import YellowLine from "../../components/Icon/YellowLine";
import YellowEclipse from "../../components/Icon/YellowEclipse";
import GrayLine from "../../components/Icon/GrayLine";
import GrayEclipse from "../../components/Icon/GrayEclipse";
import CampaignSkeletalStructure from "../../components/Layout/CampaignSkeletalStructure";
const index = () => {
  const [getDetail, setGetDetail] = useState(0);
  return (
    <Box sx={{ position: "relative" }}>
      <CampaignSkeletalStructure />
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
            href="/storyline"
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
              href="/infinite-content"
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
            <Button
              href="/storyline"
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
              href="/realistic-gameplay"
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
            href="/realistic-gameplay"
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
          bottom: "22%",
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
              width: { xs: "20%", lg: "25%", xxl: "30%" },
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "20px", lg: "40px", xxl: "70px" },
                textTransform: "uppercase",
              }}
            >
              <p>Free Market</p>
            </Box>
            <WhiteHightLight />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "15%", lg: "20%" },
          left: { xs: "5%", lg: "10%" },
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {getDetail === 1 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 1,
              }}
            >
              <Box>
                <img loading="lazy" alt="" src="/img/MarketDetail1.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          {getDetail !== 1 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 0,
              }}
            >
              <Box>
                <img loading="lazy" alt="" src="/img/MarketDetail1.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          <Link
            href="/free-market/user-driven-economy"
            onMouseOver={() => setGetDetail(1)}
            onMouseOut={() => setGetDetail(0)}
          >
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <img loading="lazy" alt="" src="/img/Market1.png" />
            </Box>
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <img loading="lazy" alt="" src="/img/Market1Small.png" />
            </Box>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "35%", lg: "40%" },
          left: { xs: "20%", lg: "30%" },
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {getDetail === 2 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 1,
              }}
            >
              <Box>
                <img loading="lazy" alt="" src="/img/MarketDetail2.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          {getDetail !== 2 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 0,
              }}
            >
              <Box>
                <img loading="lazy" alt="" src="/img/MarketDetail2.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          <Link
            href="/free-market/nine-classes"
            onMouseOver={() => setGetDetail(2)}
            onMouseOut={() => setGetDetail(0)}
          >
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <img loading="lazy" alt="" src="/img/Market2.png" />
            </Box>
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <img loading="lazy" alt="" src="/img/Market2Small.png" />
            </Box>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "45%", lg: "50%" },
          left: { xs: "55%", lg: "60%" },
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {getDetail === 3 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 1,
              }}
            >
              <Box>
                <img loading="lazy" alt="" src="/img/MarketDetail4.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          {getDetail !== 3 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 0,
              }}
            >
              <Box>
                <img loading="lazy" alt="" src="/img/MarketDetail4.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          <Link
            href="/free-market/commodites-exchange"
            onMouseOver={() => setGetDetail(3)}
            onMouseOut={() => setGetDetail(0)}
          >
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <img loading="lazy" alt="" src="/img/Market4.png" />
            </Box>
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <img loading="lazy" alt="" src="/img/Market4Small.png" />
            </Box>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "30%", lg: "40%" },
          left: { xs: "75%", lg: "80%" },
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {getDetail === 4 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 1,
              }}
            >
              <Box>
                <img loading="lazy" alt="" src="/img/MarketDetail5.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          {getDetail !== 4 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 0,
              }}
            >
              <Box>
                <img loading="lazy" alt="" src="/img/MarketDetail5.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          <Link
            href="/free-market/items-auction"
            onMouseOver={() => setGetDetail(4)}
            onMouseOut={() => setGetDetail(0)}
          >
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <img loading="lazy" alt="" src="/img/Market5.png" />
            </Box>
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <img loading="lazy" alt="" src="/img/Market5Small.png" />
            </Box>
          </Link>
        </Box>
      </Box>
      <img loading="lazy" alt="" width={"100%"} src="/img/Market.png" />
    </Box>
  );
};

export default index;
