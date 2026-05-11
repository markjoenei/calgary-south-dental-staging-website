"use client";

import ServicePage from "../components/ServicePage";
import type { ServiceConfig } from "../services-data";

const EMERGENCY: ServiceConfig = {
  category: "emergency",
  slug: "",
  categoryLabel: "Urgent Care",
  title: "Dental Emergencies",
  eyebrow: "Same-Day Appointments",
  heroSubtitle:
    "Toothache, knocked-out tooth, broken crown, dental abscess? Calgary South Dental keeps space in our schedule every day for emergencies — call 403-984-1616 and we'll see you as soon as possible.",
  heroImage: "/images/services/detail-clinical.jpg",
  intro:
    "A dental emergency is anything that's bleeding, infected, knocked out, or causing significant pain — and waiting almost always makes it worse. Calgary South Dental holds same-day emergency appointments aside every day, and our team has surgical training to handle even complex urgent cases without referring you elsewhere.",
  pillars: [
    {
      num: "01",
      label: "Same-Day Slots",
      body: "We hold time aside every weekday specifically for emergency patients — call us first thing for the best chance of being seen today.",
    },
    {
      num: "02",
      label: "Pain Relief Fast",
      body: "Numbing, prescription where appropriate, and same-visit treatment so you leave feeling dramatically better.",
    },
    {
      num: "03",
      label: "Surgical Expertise In-House",
      body: "Extractions, root canals, and trauma cases we can handle ourselves — no second appointment elsewhere.",
    },
    {
      num: "04",
      label: "Direct Billing",
      body: "We bill your insurance directly — including NIHB and CDCP — so you don't pay up front on a stressful day.",
    },
  ],
  detailHeading: "What Counts as a Dental Emergency?",
  detailBody:
    "Severe toothache, a knocked-out adult tooth (save it in milk and call immediately!), broken or chipped teeth with sharp edges, lost fillings or crowns, swelling in the face or gums, soft-tissue injuries inside the mouth, and abscesses are all reasons to call us right away. If you're not sure, call anyway — we'll triage on the phone and tell you whether it can wait or needs to be seen now.",
  detailImage: "/images/services/detail-woman-visit.jpg",
  closingHeading: "Need help right now?",
  closingBody:
    "Call 403-984-1616 — daytime, evening, or weekend, our team will get back to you as quickly as possible and arrange care.",
};

export default function EmergencyPage() {
  return <ServicePage service={EMERGENCY} />;
}
