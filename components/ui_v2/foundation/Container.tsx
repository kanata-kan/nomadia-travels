// components/ui_v2/foundation/Container.tsx
import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container.maxWidth.xl};
  padding-inline: ${({ theme }) => theme.layout.container.padding.md};
  margin-inline: auto;
`;
