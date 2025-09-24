// 📂 components/ui/Skeleton.tsx
"use client";

import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const SkeletonBox = styled.div<{ $w?: string; $h?: string; $r?: string }>`
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: ${({ $r }) => $r || "8px"};
  width: ${({ $w }) => $w || "100%"};
  height: ${({ $h }) => $h || "1rem"};
`;

export function Skeleton({ w, h, r }: { w?: string; h?: string; r?: string }) {
  return <SkeletonBox $w={w} $h={h} $r={r} />;
}
