import { notFound } from "next/navigation";
import ServicePage from "../../components/ServicePage";
import { SERVICES, SERVICE_MAP } from "../../services-data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ category: s.category, service: s.slug }));
}

export default async function CategoryServiceRoute({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category, service } = await params;
  const config = SERVICE_MAP[`${category}/${service}`];
  if (!config) notFound();
  return <ServicePage service={config} />;
}
