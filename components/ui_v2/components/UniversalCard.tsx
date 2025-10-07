"use client";

import Image from "next/image";
import Link from "next/link";
import Card from "../foundation/Card";
import Typography from "../foundation/Typography";
import Button from "../foundation/Button";
import { CardWrapper, SpecsGrid } from "./UniversalCard.styled";

type Spec = {
  icon: React.ReactNode;
  label: string;
};

type Props = {
  image: string;
  title: string;
  description: string;
  specs?: Spec[];
  price?: string | number | null;
  ctaLabel: string;
  ctaLink: string;
};

export default function UniversalCard({
  image,
  title,
  description,
  specs,
  price,
  ctaLabel,
  ctaLink,
}: Props) {
  return (
    <Card interactive variant="outline">
      <CardWrapper>
        <div style={{ position: "relative", width: "100%", height: "230px" }}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            style={{
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
            }}
            priority
          />
        </div>

        <div style={{ flexGrow: 1, marginTop: "1rem" }}>
          <Typography as="h3" variant="h3" align="center" color="primary">
            {title}
          </Typography>

          <Typography
            as="p"
            variant="body"
            align="center"
            className="text-clamp-2"
          >
            {description}
          </Typography>

          {specs && (
            <SpecsGrid>
              {specs.map((s, i) => (
                <div key={i}>
                  {s.icon}
                  <span>{s.label}</span>
                </div>
              ))}
            </SpecsGrid>
          )}

          {price && (
            <Typography
              as="p"
              variant="body"
              align="center"
              color="accent"
              style={{
                fontWeight: "bold",
                letterSpacing: "0.3px",
              }}
            >
              {price}
            </Typography>
          )}
        </div>

        <Link
          href={ctaLink}
          style={{
            textDecoration: "none",
            marginTop: "1rem",
            width: "100%",
          }}
        >
          <Button
            fullWidth
            variant="primary"
            style={{
              width: "100%",
              padding: "0.9rem 0",
              borderRadius: "8px",
              fontWeight: 600,
              transition: "background 0.3s ease",
            }}
          >
            {ctaLabel}
          </Button>
        </Link>
      </CardWrapper>
    </Card>
  );
}
