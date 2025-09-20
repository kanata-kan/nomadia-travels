import styled, { keyframes } from "styled-components";
import Link from "next/link";

// ====== Animations ======
const fadeSlideIn = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
`;

// ====== Overlay (خلفية سوداء عند فتح القائمة) ======
export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  z-index: 999;
`;

// ====== Navbar Desktop ======
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.muted};
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;

  span:first-child {
    color: ${({ theme }) => theme.colors.primary};
  }
  span:last-child {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.primary};
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

// ====== Drawer (القائمة الجانبية) ======
export const Drawer = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0; /* يجعلها تطلع من اليمين */
  height: 100%;
  width: 280px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// ====== Drawer Header ======
export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

// ====== Drawer Section ======
export const DrawerSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

// ====== Drawer Links ======
export const DrawerLink = styled(Link)`
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  opacity: 0;

  animation: ${fadeSlideIn} 0.4s ease forwards;
  animation-delay: ${({ style }) =>
    (style as any)?.["--i"] ? `${(style as any)["--i"] * 0.05}s` : "0s"};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(4px);
  }
`;

// ====== Drawer Footer ======
export const DrawerFooter = styled.div`
  padding: 1rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text.muted};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.text.muted};
`;
