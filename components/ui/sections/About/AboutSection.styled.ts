import styled from "styled-components";
import { SectionWrapper as BaseSection } from "../SectionWrapper.styled";

export const SectionWrapper = styled(BaseSection)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;
