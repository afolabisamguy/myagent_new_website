import { PhoneMockup } from "./PhoneMockup";

interface PhoneMockupsProps {
  position: "left" | "right";
}

export function PhoneMockups({ position }: PhoneMockupsProps) {
  const phoneImage =
    position === "left"
      ? "/assets/phones/phone-left.png"
      : "/assets/phones/phone-right.png";

  return (
    <PhoneMockup
      src={phoneImage}
      alt={`MyAgent app mockup ${position}`}
      position={position}
    />
  );
}
