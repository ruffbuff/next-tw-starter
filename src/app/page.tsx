// src/app/page.tsx
"use client";
import Connect from "../components/connect";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Connect />
    </main>
  );
}
