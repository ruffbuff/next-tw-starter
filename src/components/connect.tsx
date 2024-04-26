// src/configs/connect.tsx
"use client";
import { ConnectButton, darkTheme } from "thirdweb/react";
import { client, chain, wallets } from "../configs/constants";

export default function Connect() {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
        <ConnectButton 
          client={client}
          chain={chain}
          wallets={wallets}
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
