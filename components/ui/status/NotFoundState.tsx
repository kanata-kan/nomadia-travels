import { LinkLike } from "./status.styles";
import { StatusLayout } from "./StatusLayout";
import { DEFAULT_404_DESC, DEFAULT_404_TITLE } from "./constants";

export function NotFoundState({
  title = DEFAULT_404_TITLE,
  description = DEFAULT_404_DESC,
  backHref = "/",
  backLabel = "Go Home",
}: {
  title?: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <StatusLayout
      title={title}
      description={description}
      actions={<LinkLike href={backHref}>{backLabel}</LinkLike>}
    />
  );
}
