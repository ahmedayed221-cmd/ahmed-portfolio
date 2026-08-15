"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  window.addEventListener("focus", callback);
  window.addEventListener("blur", callback);
  return () => {
    document.removeEventListener("visibilitychange", callback);
    window.removeEventListener("focus", callback);
    window.removeEventListener("blur", callback);
  };
}

function getSnapshot() {
  return document.visibilityState === "visible" && document.hasFocus();
}

function getServerSnapshot() {
  return true;
}

export function useIsPageActive() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
