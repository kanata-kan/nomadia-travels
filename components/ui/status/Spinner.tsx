"use client";
import { SpinnerDot, SpinnerWrap } from "./status.styles";

export function Spinner() {
  return (
    <SpinnerWrap aria-live="polite" aria-busy="true">
      <SpinnerDot />
    </SpinnerWrap>
  );
}
