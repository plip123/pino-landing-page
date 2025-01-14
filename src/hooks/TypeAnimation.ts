import { useEffect, useState } from "react";
import { type ITypeAnimationHook } from "@/components/TypeAnimation/TypeAnimation.interface";

import { useOnScreen } from "./OnScreen";

export const useTypeAnimation = ({
  elementRef,
  sequence,
  delay,
  sequenceDelay = 1000,
  infinite = false,
}: ITypeAnimationHook) => {
  const [currentText, setCurrentText] = useState("");
  const [currentChartIndex, setCurrentChartIndex] = useState(0);
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isReverse, setIsReverse] = useState(false);
  const isVisible = useOnScreen(elementRef);

  /// Type string
  useEffect(() => {
    if (isReverse || !isVisible) return;

    let timeout: NodeJS.Timeout;
    const currentString = sequence[currentStringIndex] ?? "";

    if (currentChartIndex < currentString.length) {
      timeout = setTimeout(() => {
        setCurrentText(
          (prevText) => `${prevText}${currentString[currentChartIndex]}`,
        );
        setCurrentChartIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else {
      timeout = setTimeout(() => {
        setIsReverse(true);
      }, sequenceDelay);
    }

    return () => clearTimeout(timeout);
  }, [
    isReverse,
    currentChartIndex,
    currentStringIndex,
    delay,
    sequenceDelay,
    sequence,
    isVisible,
  ]);

  /// Reverse
  useEffect(() => {
    if (!isReverse || !isVisible || sequence.length === 1) return;

    let timeout: NodeJS.Timeout;

    if (currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText.slice(0, -1));
      }, delay);
    } else if (
      currentText.length === 0 &&
      currentStringIndex < sequence.length - 1
    ) {
      setCurrentStringIndex((prevIndex) => prevIndex + 1);
      setCurrentChartIndex(0);
      setIsReverse(false);
    } else if (!!infinite) {
      setCurrentStringIndex(0);
      setCurrentChartIndex(0);
      setIsReverse(false);
    }

    return () => clearTimeout(timeout);
  }, [
    isReverse,
    currentChartIndex,
    currentStringIndex,
    delay,
    infinite,
    sequence,
    currentText.length,
    isVisible,
  ]);

  return currentText;
};
