import { PhoneMockup } from "./PhoneMockup";
import phoneLeft from "@/assets/phones/phone-left.png";
import phoneRight from "@/assets/phones/phone-right.png";

interface PhoneMockupsProps {
  position: "left" | "right";
}

export function PhoneMockups({ position }: PhoneMockupsProps) {
  const phoneImage = position === "left" ? phoneLeft : phoneRight;

  return (
    <PhoneMockup
      src={phoneImage}
      alt={`MyAgent app mockup ${position}`}
      position={position}
    />
  );
}
