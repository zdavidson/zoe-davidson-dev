import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import { Box, Container } from "@mui/material";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Work from "../components/Work";
import Cursor from "../components/Cursor";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const Home: NextPage = () => {
  const hero = useRef(null);

  const { scrollYProgress } = useScroll({
    target: hero,
    // offset: ["start end", "end start"],
  });
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <Head>
        <title>Zoë Davidson | Web Developer | Filmmaker</title>
        <meta
          name="description"
          content="Zoë Davidson is a professional web developer and filmmaker with nearly a decade of experience turning ideas into art."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ padding: "5vh 5vw" }}>
        <Cursor />
        <Nav />
        <Container
          maxWidth="md"
          sx={{
            "@media (max-width:600px)": {
              maxWidth: "70vw",
            },

            "@media (min-width:1500px)": {
              maxWidth: "75vw",
            },
          }}
        >
          <Hero ref={hero} y={y} />
          <About />
          <Work />
        </Container>
        <Sidebar />
      </Box>
    </div>
  );
};

export default Home;
