"use client";

import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Counter from '../Counter/index';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function Landing() {
    const landingRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const paraRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(() => {
        if (!containerRef.current || !paraRef.current) return;

        const tl = gsap.timeline();

        tl.to(containerRef.current, {
            height: "50vh",
            duration: 1.2,
            ease: "power2.out",
        }).from(paraRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
        });
    }, { scope: landingRef });

    return (
        <section className={styles.landing} ref={landingRef}>
            <div className={styles.container} ref={containerRef}>
                <p ref={paraRef}>Monitoring & Optimizing<br /> Sustainable Systems </p>
            </div>
            <Counter />
        </section>
    );
}
