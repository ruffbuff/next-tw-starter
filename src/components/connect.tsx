// src/configs/connect.tsx
"use client";
import { ConnectButton, darkTheme } from "thirdweb/react";
import { client } from "../configs/client";
import styles from "../styles/connect.module.css";

export default function Connect() {
  return (
    <>
      <div className={styles.connect}>
        <ConnectButton 
          client={client}
          theme={darkTheme({
            colors: {
              primaryButtonBg: "#ababab",
            },
          })}
          connectModal={{ size: "compact" }}
        />
      </div>
    </>
  );
}
