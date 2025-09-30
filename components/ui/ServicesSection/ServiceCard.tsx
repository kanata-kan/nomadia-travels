//components/ui/molecules/ServiceCard.tsx

"use client";
import React, { ReactNode } from "react";
import { Card, IconWrapper, Title, Description } from "./ServiceCard.styled";
import { FaBus, FaHiking, FaCity, FaPlaneArrival } from "react-icons/fa";
import { Service } from "@/types/Service";

type Props = { service: Service };

const iconsMap: Record<string, ReactNode> = {
  transportation: <FaBus />,
  "private-tours": <FaHiking />,
  "city-tours": <FaCity />,
  "airport-transfers": <FaPlaneArrival />,
};

export default function ServiceCard({ service }: Props) {
  return (
    <Card>
      <IconWrapper>
        {iconsMap[service.id] || <FaCity />} {/* fallback */}
      </IconWrapper>
      <Title>{service.title}</Title>
      <Description>{service.description}</Description>
    </Card>
  );
}
