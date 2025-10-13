"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Dot = styled(motion.span)`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  margin: 0 0.3rem;
`;

export function Spinner() {
  return (
    <Loader>
      {[0, 1, 2].map((i) => (
        <Dot
          key={i}
          animate={{ y: ["0%", "-50%", "0%"] }}
          transition={{
            duration: 0.8,
            delay: i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </Loader>
  );
}
