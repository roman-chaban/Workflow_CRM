import { useEffect, useRef, RefObject } from "react";

type EventType = keyof WindowEventMap;
type EventListener = (event: Event) => void;

export const useEventListener = (
  eventType: EventType,
  callback: EventListener,
  element: RefObject<HTMLElement> | Window = window,
): void => {
  const callbackRef = useRef<EventListener>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const targetElement: HTMLElement | Window | null =
      element && "current" in element ? element.current : element;

    if (!targetElement) return;

    const handler = (event: Event) => callbackRef.current(event);
    targetElement.addEventListener(eventType, handler);

    return () => {
      targetElement.removeEventListener(eventType, handler);
    };
  }, [eventType, element]);
};
