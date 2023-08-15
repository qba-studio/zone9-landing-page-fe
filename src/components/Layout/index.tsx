import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [time, setTime] = useState(0);
  const audio = useMemo(() => new Audio("/audio/sound-nen.mp3"), []);
  audio.loop = true;
  var resp = audio.play();
  if (resp !== undefined) {
    resp
      .then((_) => {
        audio.play();
      })
      .catch((error) => {
        //show error
      });
  }
  useEffect(() => {
    const getTime = () => {
      setTime(audio.currentTime);
    };
    router.events.on("routeChangeStart", getTime);
    const useTime = () => {
      audio.currentTime = time;
    };
    router.events.on("routeChangeComplete", useTime);
    return () => {
      router.events.off("routeChangeStart", getTime);
      router.events.off("routeChangeComplete", useTime);
    };
  }, []);
  return <Box>{children}</Box>;
};

export default Layout;
