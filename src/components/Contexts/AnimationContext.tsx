"use client";

import React, { createContext, useContext, useState } from "react";

interface AnimationContextType {
    counterComplete: boolean;
    setCounterComplete: (complete: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
    const [counterComplete, setCounterComplete] = useState(false);

    return (
        <AnimationContext.Provider value={{ counterComplete, }}
    )
}