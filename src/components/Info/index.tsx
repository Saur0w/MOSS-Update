"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import styles from './style.module.scss';

export default function Info() {
    return (
        <>
            <section className={styles.info}>
                <div className={styles.header}>
                    <h1 className={styles.heading}>
                        MOSS(Monitoring and Optimizing sustainability system)
                    </h1>
                </div>
            </section>
        </>
    )
}