import type { Metadata } from "next";
import { getBySlug } from "@/lib/categories";
import CategoryPage from "@/components/CategoryPage";


const item = getBySlug("kfz")!;

export const metadata: Metadata = {
  title: `${item.label} vergleichen – kostenlos & unverbindlich`,
  description: item.description,
  alternates: { canonical: `https://www.vergleichsheld24.de/versicherungen/kfz` },
  openGraph: { title: `${item.label} vergleichen | Vergleichsheld24`, description: item.description },
};

export default function Page() {
  return <CategoryPage item={item} />;
}
