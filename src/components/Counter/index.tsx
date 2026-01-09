"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./style.module.scss";

gsap.registerPlugin(useGSAP);

export default function Counter() {
    const elRef = useRef<HTMLSpanElement | null>(null);

    useGSAP(() => {
        const el = elRef.current!;
        const proxy = { value: 100 };

        const tween = gsap.to(proxy, {
            value: 0,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
                el.textContent = `${Math.round(proxy.value)}%`;
            },
            onComplete: () => {
                window.dispatchEvent(new CustomEvent("app:start", { detail: { source: "counter" } }));
                gsap.to(el, {
                    autoAlpha: 0,
                    duration: 0.5,
                    ease: "power1.out"
                });
            },
        });

        return () => tween.kill();
    });

    return (
        <div className={styles.counter}>
            <span ref={elRef}>100%</span>
        </div>
    );
}
