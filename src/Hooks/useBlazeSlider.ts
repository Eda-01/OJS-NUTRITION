import { useEffect, useRef } from 'react';
import BlazeSlider, { type BlazeConfig } from 'blaze-slider';
import "blaze-slider/dist/blaze.css";

export function useBlazeSlider(config?: BlazeConfig) {
    const sliderRef = useRef<BlazeSlider | null>(null);
    const sliderElRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (
            typeof window !== 'undefined' &&
            !sliderRef.current &&
            !!sliderElRef.current
        ) {
            sliderRef.current = new BlazeSlider(sliderElRef.current, config);
        }
    }, [config]);

    return { sliderElRef, sliderRef };
}