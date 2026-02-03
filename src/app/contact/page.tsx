import { PlaceholderPage } from "@/app/_components/PlaceholderPage";
import { SUPPORT_EMAIL } from "@/content/site";

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact Us"
      description={`This page is a placeholder. For now, reach us at ${SUPPORT_EMAIL}.`}
    />
  );
}

