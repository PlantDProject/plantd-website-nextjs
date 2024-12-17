import Script from "next/script";
const websiteUrl = "https://plantd.life";

export const HomePageSchema = () => {

  const jsonLdSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": websiteUrl,
    "name": "Plantd",
    "alternateName": "Plantd",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${websiteUrl}/search?q={plantd}`,
      "query-input": "required name=plantd"
    },
    "mainEntity": [
      {
        "@type": "WebPage",
        "@id": websiteUrl,
        "url": websiteUrl,
        "name": "Plantd",
        "description": "Contribute and Plant One Billion Trees with Plantd"
      },
      {
        "@type": "WebPage",
        "@id": `${websiteUrl}/about`,
        "name": "About",
        "url": `${websiteUrl}/about`,
        "description": "Learn more about PlantD and our mission to promote plant care and gardening.",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${websiteUrl}/projects`,
        "name": "Projects",
        "url": `${websiteUrl}/projects`,
        "description": "Learn more about PlantD and our mission to promote plant care and gardening.",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${websiteUrl}/giveaways`,
        "name": "Giveaways",
        "url": `${websiteUrl}/giveaways`,
        "description": "Sign up for a PlantD account to access exclusive content and features.",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${websiteUrl}/sign-up`,
        "name": "Join The Movement",
        "url": `${websiteUrl}/sign-up`,
        "description": "Explore our collection of gardening blogs for tips, inspiration, and advice.",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${websiteUrl}/ambassador`,
        "name": "Ambassador",
        "url": `${websiteUrl}/ambassador`,
        "description": "Explore our collection of gardening blogs for tips, inspiration, and advice.",
        "inLanguage": "en-US"
      }
    ]
  });

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLdSchema,
      }}
      id="defaultSchema"
    />
  );
};

export const AboutUsSchema = () => {
  const jsonLdSchema = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Plantd.Life",
        "item": websiteUrl,
        "url": websiteUrl,
        "description": "Contribute and Plant One Billion Trees with Plantd",
        "image": "https://plantd.life/images/plantdimg/favicon.png"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "description": "We envision a greener future for our planet where a thriving community of different individual actions lead to an equally thriving ecosystem.",
        "item": `${websiteUrl}/about`,
        "url": `${websiteUrl}/about`
      }]
    }
  );

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLdSchema,
      }}
      id="aboutSchema"
    />
  );
}
export const ProjectsSchema = () => {
  const jsonLdSchema = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Plantd.Life",
        "item": websiteUrl,
        "url": websiteUrl,
        "description": "Contribute and Plant One Billion Trees with Plantd",
        "image": "https://plantd.life/images/plantdimg/favicon.png"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "description": "Fight Climate Change, Calculate-Reduce-Offset Your Carbon Footprint, and Get a chance to win epic prizes and experiences with our Green Initiative App",
        "item": `${websiteUrl}/about`,
        "url": `${websiteUrl}/about`
      }, {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "description": "See our Projects all over the world in our journey as we plant 1 Billion Trees through our Reforestation Contribution App",
        "item": `${websiteUrl}/projects`,
        "url": `${websiteUrl}/projects`
      }]
    }
  );

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLdSchema,
      }}
      id="projectSchema"
    />
  );
}