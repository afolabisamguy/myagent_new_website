export type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  avatarSrc: string;
};
export const testimonials: Testimonial[] = [
  {
    quote:
      "Found my dream apartment in Lekki without paying a single naira in agent fees. The landlord was genuine and the process was so smooth!",
    name: "User One",
    meta: "Tenant • Lagos",
    avatarSrc: "/assets/avatars/user.png",
  },
  {
    quote:
      "MyAgent helped me find quality tenants for my properties. The verification process gives me peace of mind about who I'm renting to.",
    name: "User Two",
    meta: "Landlord • Abuja",
    avatarSrc: "/assets/avatars/user2.png",
  },
  {
    quote:
      "As a student, I couldn't afford agent fees. MyAgent made it possible for me to find affordable housing close to my university.",
    name: "User Three",
    meta: "Tenant • Port Harcourt",
    avatarSrc: "/assets/avatars/user3.png",
  },
];
