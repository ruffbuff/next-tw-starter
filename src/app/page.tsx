// src/app/page.tsx
"use client";
import Connect from "../components/connect";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Connect />
    </main>
  );
}
