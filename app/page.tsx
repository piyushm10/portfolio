import Portfolio from "@/components/Portfolio";
import { profile } from "@/data/portfolio";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Software Engineer",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://piyushm10.github.io",
    sameAs: [profile.linkedin, profile.github],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.university
    },
    knowsAbout: [
      "Software Engineering",
      "Automation",
      "Applied AI",
      "Healthcare Technology",
      "Data Analysis"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Portfolio />
    </>
  );
}
