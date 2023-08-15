import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import WhiteHightLight from "../../components/TitleHightlight/White";
import DisplayLine from "../../components/Icon/DisplayLine";
import Link from "next/link";
import CampaignSkeletalStructure from "../../components/Layout/CampaignSkeletalStructure";
import YellowLine from "../../components/Icon/YellowLine";
import YellowEclipse from "../../components/Icon/YellowEclipse";
import GrayLine from "../../components/Icon/GrayLine";
import GrayEclipse from "../../components/Icon/GrayEclipse";

const index = () => {
  const [getDetail, setGetDetail] = useState(0);
  return (
    <Box sx={{ position: "relative" }}>
      <CampaignSkeletalStructure />
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
              <p>Infinite Content</p>
            </Box>
            <WhiteHightLight />
          </Box>
        </Box>
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
            sx={{
              minWidth: { xs: "10px", lg: "30px" },
              padding: "5px",
              margin: {
                xs: "0px 10px 0px 5px",
                lg: "0px 30px 0px 25px",
              },
              "&.MuiButton-root:hover": { backgroundColor: "#F6C660" },
            }}
            disabled
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
            <YellowEclipse />
            <GrayLine />
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
              <GrayEclipse />
            </Button>
            <GrayLine />
            <Button
              href="/free-market"
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
            href="/storyline"
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
          top: { xs: "25%", lg: "30%" },
          left: "10%",
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
                <img loading="lazy" alt="" src="/img/CampaignDetail1.png" />
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
                <img loading="lazy" alt="" src="/img/CampaignDetail1.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          <Link
            href="/infinite-content/contents/#large-language-model"
            scroll={true}
            onMouseOver={() => setGetDetail(1)}
            onMouseOut={() => setGetDetail(0)}
          >
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <img loading="lazy" alt="" src="/img/Campaign1.png" />
            </Box>
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              <img loading="lazy" alt="" src="/img/Campaign1Small.png" />
            </Box>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "35%", lg: "40%" },
          left: "30%",
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
                <img loading="lazy" alt="" src="/img/CampaignDetail2.png" />
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
                <img loading="lazy" alt="" src="/img/CampaignDetail2.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          <Link
            href="/infinite-content/contents/#ai-powered-npc"
            scroll={true}
            onMouseOver={() => setGetDetail(2)}
            onMouseOut={() => setGetDetail(0)}
          >
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <img loading="lazy" alt="" src="/img/Campaign2.png" />
            </Box>
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              <img loading="lazy" alt="" src="/img/Campaign2Small.png" />
            </Box>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "40%", lg: "45%" },
          left: { xs: "45%", lg: "50%" },
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
                <img loading="lazy" alt="" src="/img/CampaignDetail3.png" />
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
                <img loading="lazy" alt="" src="/img/CampaignDetail3.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          <Link
            href="/infinite-content/contents/#npc-x-player"
            scroll={true}
            onMouseOver={() => setGetDetail(3)}
            onMouseOut={() => setGetDetail(0)}
          >
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <img loading="lazy" alt="" src="/img/Campaign3.png" />
            </Box>
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              <img loading="lazy" alt="" src="/img/Campaign3Small.png" />
            </Box>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "25%", lg: "30%" },
          left: { xs: "60%", lg: "65%" },
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
                <img loading="lazy" alt="" src="/img/CampaignDetail4.png" />
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
                <img loading="lazy" alt="" src="/img/CampaignDetail4.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          <Link
            href="/infinite-content/contents/#npc-x-npc"
            scroll={true}
            onMouseOver={() => setGetDetail(4)}
            onMouseOut={() => setGetDetail(0)}
          >
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <img loading="lazy" alt="" src="/img/Campaign4.png" />
            </Box>
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <img loading="lazy" alt="" src="/img/Campaign4Small.png" />
            </Box>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "25%", lg: "35%" },
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
          {getDetail === 5 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 1,
              }}
            >
              <Box>
                <img loading="lazy" alt="" src="/img/CampaignDetail5.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          {getDetail !== 5 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 0,
              }}
            >
              <Box>
                <img loading="lazy" alt="" src="/img/CampaignDetail5.png" />
              </Box>
              <Box>
                <DisplayLine />
              </Box>
            </Box>
          )}
          <Link
            href="/infinite-content/contents/#everchanging-world"
            scroll={true}
            onMouseOver={() => setGetDetail(5)}
            onMouseOut={() => setGetDetail(0)}
          >
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <img loading="lazy" alt="" src="/img/Campaign5.png" />
            </Box>
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              <img loading="lazy" alt="" src="/img/Campaign5Small.png" />
            </Box>
          </Link>
        </Box>
      </Box>
      <img loading="lazy" alt="" width={"100%"} src="/img/Campaign.png" />
    </Box>
  );
};

export default index;
