"use client";

import {
  ActionsRow,
  StatusBox,
  StatusDesc,
  StatusTitle,
} from "./status.styles";
import type { StatusLayoutProps } from "./types";

export function StatusLayout({
  title,
  description,
  actions,
}: StatusLayoutProps) {
  return (
    <StatusBox role="status">
      <StatusTitle>{title}</StatusTitle>
      {description ? <StatusDesc>{description}</StatusDesc> : null}
      {actions ? <ActionsRow>{actions}</ActionsRow> : null}
    </StatusBox>
  );
}
