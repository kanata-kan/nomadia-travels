"use client";

import Image from "next/image";
import Link from "next/link";
import { Car } from "@/types";
import Card from "../foundation/Card";
import Typography from "../foundation/Typography";
import Button from "../foundation/Button";
import { FaUsers, FaGasPump, FaCogs, FaSuitcase } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { CardWrapper, SpecsGrid } from "./CarCard.styled";

export default function CarCard({ car }: { car: Car }) {
  const t = useTranslations("carsSection");

  return (
    <Card interactive variant="outline">
      <CardWrapper>
        <div style={{ position: "relative", width: "100%", height: "230px" }}>
          <Image
            src={car.coverImage}
            alt={car.metadata?.alt || car.name}
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
            {car.name}
          </Typography>

          <Typography
            as="p"
            variant="body"
            align="center"
            className="text-clamp-2"
          >
            {car.description}
          </Typography>

          <SpecsGrid>
            <div>
              <FaUsers />
              <span>{car.seats}</span>
            </div>
            <div>
              <FaCogs />
              <span>{car.transmission}</span>
            </div>
            <div>
              <FaSuitcase />
              <span>{car.luggage}</span>
            </div>
            <div>
              <FaGasPump />
              <span>{car.fuel}</span>
            </div>
          </SpecsGrid>

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
            {car.price} {car.currency} / {car.unit}
          </Typography>
        </div>

        <Link
          href={`/cars/${car.id}`}
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
            {t("viewAll")}
          </Button>
        </Link>
      </CardWrapper>
    </Card>
  );
}
