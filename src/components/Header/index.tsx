"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import styles from "./style.module.scss";
import Magnetic from '@/ui/Magnetic/index';

gsap.registerPlugin(Flip, useGSAP);

export default function Header() {
    const scopeRef = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLHeadingElement | null>(null);
    const dockRef = useRef<HTMLDivElement | null>(null);
    const centerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (!logoRef.current || !dockRef.current) return;
        const state = Flip.getState(logoRef.current);
        dockRef.current.appendChild(logoRef.current);

        Flip.from(state, {
            duration: 1.2,
            ease: "power2.inOut",
            absolute: true,
            scale: true,
            onComplete: () => {
                if (centerRef.current) centerRef.current.style.display = "none";
            },
        });
    }, { scope: scopeRef });

    return (
        <div ref={scopeRef} className={styles.wrap}>
            <div ref={centerRef} className={styles.centerStage} aria-hidden="true">n
                <h1 ref={logoRef} className={styles.logoText}>MOSS</h1>
            </div>

            <header className={styles.header}>
                <div className={styles.brand}>
                    <div ref={dockRef} className={styles.logoDock} />
                </div>

                <nav className={styles.nav}>
                    <div className={styles.el}>
                        <Magnetic>
                            <Link href="/work">Work</Link>
                        </Magnetic>
                        <div className={styles.indicator} />
                    </div>
                    <div className={styles.el}>
                        <Magnetic>
                            <Link href="/about">About</Link>
                        </Magnetic>
                        <div className={styles.indicator} />
                    </div>
                    <div className={styles.el}>
                        <Magnetic>
                            <Link href="/contact">Contact</Link>
                        </Magnetic>
                        <div className={styles.indicator} />
                    </div>
                </nav>
            </header>
        </div>
    );
}
