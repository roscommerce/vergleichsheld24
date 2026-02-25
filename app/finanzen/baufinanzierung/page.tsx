import type { Metadata } from "next";

export const dynamic = "force-dynamic";
import { getBySlug } from "@/lib/categories";
import CategoryPage from "@/components/CategoryPage";

const item = getBySlug("baufinanzierung")!;

export const metadata: Metadata = {
  title: `${item.label} vergleichen – kostenlos & unverbindlich`,
  description: item.description,
  alternates: {
    canonical: `https://www.vergleichsheld24.de/finanzen/baufinanzierung`,
  },
  openGraph: {
    title: `${item.label} vergleichen | Vergleichsheld24`,
    description: item.description,
  },
};

export default function Page() {
  return <CategoryPage item={item} />;
}
