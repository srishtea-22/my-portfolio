import { useState, useEffect } from "react";

export const useScrollOpacity = (threshold: 300, power: 1.5) => {
    const [opacity, setOpacity] = useState(0.6);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const easedOpacity = Math.min(1, Math.pow(scrollY / threshold, power));
            setOpacity(easedOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold, power]);

    return opacity;
}