import Head from "next/head";
import styles from "../styles/index.module.css";
import Hovernotification from "../components/ui/hovernotification/hovernotification";
import {Canvas} from "@react-three/fiber";
import React, {Suspense} from "react";
import Loader from "../components/ui/loadingpage/Loader";
import {Physics, Debug} from "@react-three/cannon";
import CharWrapper from "../components/character/charWrapper";
import Floor from "../components/floor/floor";
import LandingPage from "../components/ui/landingpage/LandingPage";
import TestBox from "../components/zones/test/test";

const Home = () => {
  return (
    <div className={styles.appContainer}>
      <Head>
        <title>Penguin Icefield</title>
        <meta
          name="description"
          content="You're not the penguin that slides the farthest !"
        />
        <meta property="og:image" content="/assets/icons/banner.png"/>
        <meta itemProp="image" content="/assets/icons/banner.png"/>
        <meta itemProp="title" content="Elisa Henry - Penguin Icefield"/>
        <meta name="twitter:image" content="/assets/icons/banner.png"/>
        <meta property="og:title" content="Elisa Henry - Be a penguin!"/>
        <meta property="og:description"
              content="You're not the penguin that slides the farthest !"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Hovernotification/>
      <Canvas dpr={[1, 1.5]} shadows>
        <Suspense fallback={<Loader/>}>
          <LandingPage/>
          <fog attach="fog" args={["#325a80", 10, 50]}/>
          <color attach="background" args={["#325a80"]}/>
          <ambientLight intensity={0.4}/>
          <spotLight
            position={[10, 10, 10]}
            angle={0.4}
            intensity={0.5}
            castShadow
            penumbra={1}
          />
          <spotLight
            position={[50, 50, 50]}
            angle={0.4}
            intensity={0.5}
            castShadow
            penumbra={1}
          />
          <Physics
            broadphase="SAP"
            contactEquationRelaxation={4}
            friction={1e-3}
            allowSleep
          >
            <Debug color="white" scale={1}>
              <Floor rotation={[-Math.PI / 2, 0, 0]} userData={{id: "floor"}}/>
              <CharWrapper/>
              <TestBox/>
            </Debug>
          </Physics>
        </Suspense>
      </Canvas>
      <div style={{position: "absolute", top: 30, left: 40}}>
        <pre>
          ZQSD, WASD or ↑ ← ↓ → to move
	        <br/>space to stop, enter to interact
          <br/>R to reset
        </pre>
      </div>
    </div>
  );
};

export default Home;
