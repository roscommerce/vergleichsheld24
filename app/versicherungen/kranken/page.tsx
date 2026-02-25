import type { Metadata } from "next";
import { getBySlug } from "@/lib/categories";
import CategoryPage from "@/components/CategoryPage";

export const dynamic = "force-dynamic";

const item = getBySlug("kranken")!;

export const metadata: Metadata = {
  title: `${item.label} vergleichen – kostenlos & unverbindlich`,
  description: item.description,
  alternates: { canonical: `https://www.vergleichsheld24.de/versicherungen/kranken` },
  openGraph: {
    title: `${item.label} vergleichen | Vergleichsheld24`,
    description: item.description,
  },
};

export default function Page() {
  return <CategoryPage item={item} />;
}
