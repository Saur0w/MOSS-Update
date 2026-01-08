"use client";

import styles from "./page.module.css";
import Landing from "@/components/Landing/index";
import Info from "@/components/Info/index";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <Landing />
          <Info />
      </main>
    </div>
  );
}
