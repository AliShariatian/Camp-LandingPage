// NAVIGATION
export const NAV_LINKS: { href: string; key: string; label: string }[] = [
   { href: "/", key: "home", label: "Home" },
   { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
   { href: "/", key: "services", label: "Services" },
   { href: "/", key: "pricing ", label: "Pricing " },
   { href: "/", key: "contact_us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL: string[] = ["/img/person-1.png", "/img/person-2.png", "/img/person-3.png", "/img/person-4.png"];

// FEATURES SECTION
export const FEATURES: { title: string; icon: string; variant: string; description: string }[] = [
   {
      title: "Real maps can be offline",
      icon: "/img/map.svg",
      variant: "green",
      description:
         "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
   },
   {
      title: "Set an adventure schedule",
      icon: "/img/calendar.svg",
      variant: "green",
      description: "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
   },
   {
      title: "Technology using augment reality",
      icon: "/img/tech.svg",
      variant: "green",
      description:
         "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
   },
   {
      title: "Many new locations every month",
      icon: "/img/location.svg",
      variant: "orange",
      description: "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
   },
];

// FOOTER SECTION
export const FOOTER_LINKS: { title: string; links: string[] }[] = [
   {
      title: "Learn More",
      links: ["About Hilink", "Press Releases", "Environment", "Jobs", "Privacy Policy", "Contact Us"],
   },
   {
      title: "Our Community",
      links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
   },
];

export const FOOTER_CONTACT_INFO: { title: string; links: { label: string; value: string }[] } = {
   title: "Contact Us",
   links: [
      { label: "Admin Officer", value: "123-456-7890" },
      { label: "Email Officer", value: "hilink@akinthil.com" },
   ],
};

export const SOCIALS: { title: string; links: string[] } = {
   title: "Social",
   links: ["/img/facebook.svg", "/img/instagram.svg", "/img/twitter.svg", "/img/youtube.svg", "/img/wordpress.svg"],
};
