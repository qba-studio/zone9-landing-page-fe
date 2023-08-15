import React from "react";
import ContentSkeletalStructure from "../../components/Layout/ContentSkeletalStructure";
import { Box, Button } from "@mui/material";
import BlackHightLight from "../../components/TitleHightlight/Black";
import WhiteHightLight from "../../components/TitleHightlight/White";
const infiniteContent = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <ContentSkeletalStructure />
      <Box
        sx={{
          position: "absolute",
          zIndex: 12,
          bottom: { xs: 80, lg: 100, xxl: 150 },
          right: "15%",
        }}
      >
        <Button
          href="/infinite-content"
          sx={{
            display: { xs: "none", lg: "flex" },
            padding: 0,
            "&.MuiButton-root :hover": {
              backgroundColor: "#F6C660",
            },
            "&.MuiButton-root :after": {
              content: '"Back to Campaign"',
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
          href="/infinite-content"
          sx={{
            padding: 0,
            display: { xs: "flex", lg: "none" },
            "&.MuiButton-root :hover": {
              backgroundColor: "#F6C660",
            },
            "&.MuiButton-root :after": {
              content: '"Back to Campaign"',
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
      <Box sx={{ position: "relative" }}>
        <img
          loading="lazy"
          alt=""
          src="/img/CampaignItemsBlackBackGround.png"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 8,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              loading="lazy"
              alt=""
              width={"100%"}
              src="/img/CampaignItemsWhiteBackGround.png"
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9,
          padding: { xs: "100px", lg: "150px" },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              padding: {
                xs: "50px 80px 100px 80px",
                md: "140px 150px 160px 150px",
                lg: "80px 180px 150px 180px",
                xl: "160px 300px 300px 300px",
                xxl: "150px 400px 350px 400px",
              },
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "20px", lg: "50px", xxl: "70px" },
              }}
            >
              <p>INFINITE CONTENT</p>
            </Box>
            <WhiteHightLight />
            <Box
              sx={{
                paddingTop: { xs: "10px", xxl: "30px" },
                fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
              }}
            >
              Our advanced AI system allowed NPC to talk to players as real
              person. They can even talk to other NPC and generate infinite
              number of events and contents
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ width: "40%" }}>
              <img
                loading="lazy"
                id="large-language-model"
                alt=""
                src="/img/LargeLanguageModelPic.png"
              />
            </Box>
            <Box sx={{ color: "black", width: "30%" }}>
              <Box
                sx={{
                  fontSize: { xs: "20px", lg: "40px", xxl: "70px" },
                  textTransform: "uppercase",
                }}
              >
                <div>
                  <p>Large Language Model</p>
                </div>
              </Box>
              <BlackHightLight />
              <Box
                sx={{
                  paddingTop: { xs: "10px", lg: "30px" },
                  fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
                }}
              >
                Experience a limitless adventure with an extensive language
                model generating an endless array of quests, dialogues, and
                narratives to keep you engaged.
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-evenly",
              flexDirection: "row-reverse",
            }}
          >
            <Box sx={{ width: "40%" }}>
              <img
                loading="lazy"
                id="ai-powered-npc"
                alt=""
                src="/img/AIPoweredNPCPic.png"
              />
            </Box>
            <Box sx={{ color: "black", width: "30%" }}>
              <Box
                sx={{
                  fontSize: { xs: "20px", lg: "40px", xxl: "70px" },
                  textTransform: "uppercase",
                }}
              >
                <p>AI - Powered NPC</p>
              </Box>
              <BlackHightLight />
              <Box
                sx={{
                  paddingTop: { xs: "10px", lg: "30px" },
                  fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
                }}
              >
                Engage in dynamic interactions with AI-powered NPCs, as their
                advanced behaviors create immersive and personalized encounters
                throughout the game.
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ width: "40%" }}>
              <img
                loading="lazy"
                id="npc-x-player"
                alt=""
                src="/img/NPCxPlayerPic.png"
              />
            </Box>
            <Box sx={{ color: "black", width: "30%" }}>
              <Box
                sx={{
                  fontSize: { xs: "20px", lg: "40px", xxl: "70px" },
                  textTransform: "uppercase",
                }}
              >
                <p>NPC x Players</p>
              </Box>
              <BlackHightLight />
              <Box
                sx={{
                  paddingTop: { xs: "10px", lg: "30px" },
                  fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
                }}
              >
                Influence the game world through meaningful NPC and player
                interactions, where your choices and actions shape the evolving
                narrative and impact the environment.
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-evenly",
              flexDirection: "row-reverse",
            }}
          >
            <Box sx={{ width: "40%" }}>
              <img
                loading="lazy"
                id="npc-x-npc"
                alt=""
                src="/img/NPCxNPCPic.png"
              />
            </Box>
            <Box sx={{ color: "black", width: "30%" }}>
              <Box
                sx={{
                  fontSize: { xs: "20px", lg: "40px", xxl: "70px" },
                  textTransform: "uppercase",
                }}
              >
                <p>NPC x NPC</p>
              </Box>
              <BlackHightLight />
              <Box
                sx={{
                  paddingTop: { xs: "10px", lg: "30px" },
                  fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
                }}
              >
                Witness the vibrant interactions between NPCs, forming
                alliances, rivalries, and pursuing their own agendas, adding
                depth and realism to the ever-evolving world.
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ width: "40%" }}>
              <img
                loading="lazy"
                id="everchanging-world"
                alt=""
                src="/img/EverChangingWorldPic.png"
              />
            </Box>
            <Box sx={{ width: "30%" }}>
              <Box
                sx={{
                  fontSize: { xs: "20px", lg: "40px", xxl: "70px" },
                  textTransform: "uppercase",
                }}
              >
                <p>EVERCHANGING WORLD</p>
              </Box>
              <WhiteHightLight />
              <Box
                sx={{
                  paddingTop: { xs: "10px", lg: "30px" },
                  fontSize: { xs: "7px", lg: "12px", xxl: "16px" },
                }}
              >
                Embark on an exciting journey through a dynamic world that
                reacts to your decisions, introducing new challenges, events,
                and discoveries, ensuring a constantly evolving experience.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default infiniteContent;
