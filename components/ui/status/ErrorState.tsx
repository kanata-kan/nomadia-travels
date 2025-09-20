"use client";

import { useEffect } from "react";
import { StatusBtn } from "./status.styles";
import { StatusLayout } from "./StatusLayout";
import { DEFAULT_ERROR_DESC, DEFAULT_ERROR_TITLE } from "./constants";

export function ErrorState({
  error,
  onRetry,
  title = DEFAULT_ERROR_TITLE,
  description = DEFAULT_ERROR_DESC,
}: {
  error?: unknown;
  onRetry?: () => void;
  title?: string;
  description?: string;
}) {
  // Optional logging hook; Sentry integration can be added later
  useEffect(() => {
    if (error && process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <StatusLayout
      title={title}
      description={description}
      actions={
        onRetry ? <StatusBtn onClick={onRetry}>Try again</StatusBtn> : null
      }
    />
  );
}
