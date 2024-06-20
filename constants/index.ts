// constants/index.ts
import microsoft from "@/public/Images/Microsoft.webp";
import wordpress from "@/public/Images/Wordpress1.jpg";
import pro from "@/public/Images/Pro.jpg";

export interface FAQItem {
  question: string;
  ans: string;
  points?: string[];
}

interface BusinessSolution {
  title: string;
  subtitle: string;
  content: string;
  button: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does GoDaddy help small business owners succeed?",
    ans: "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional email helps you build a professional image, while our online marketing tools empower entrepreneurs to get online with an SEO-friendly website. GoDaddy is an all-in-one solution provider to get your idea online, backed with expert, personalized support from GoDaddy Guides.",
  },
  {
    question: "Why do I need a website for my business?",
    ans: "Even small local businesses that only serve their hometown need a site. That's because the web is the first place people go when looking for a product or service. A website helps every business:",
    points: [
      "Promote and sell their products and services",
      "Connect with new customers (and keep existing customers)",
      "Build credibility",
      "Compete with bigger businesses",
      "Control their brand and keep their marketing fresh and current",
    ],
  },
  {
    question: "Why do I need a professional email?",
    ans: "There are a lot of reasons to switch from your free email to a domain-based email, but here are the top 3:",
    points: [
      "Customers are much more likely to trust a professional address like lily@lilysbikes.com than lilysbikestexas84@notmail.com.",
      "Professional Email provides world-class security with industry-leading spam and virus filters.",
      "Personalized email addresses promote your business more effectively. Every time you send an email, you are giving your web address to customers and prospects, encouraging them to visit your website.",
    ],
  },
  {
    question: "Why get a domain name from GoDaddy?",
    ans: "GoDaddy is the world’s largest and trusted domain registrar that empowers people like you with creative ideas to succeed online. Buying a domain name is easy with our domain search tool and domain name generator tools you can find the perfect website address for your business.",
  },
  {
    question: "Why use GoDaddy Website Builder?",
    ans: "Because it’s a fast, simple way to create a website that you — and your customers — will love. Simply type in your idea or industry and GoDaddy Website Builder will pull up a number of professionally designed, ready-to-launch templates. From there, just add your own text and images and you’re good to go.",
  },
];

export const SIDEBAR_LINKS: string[] = [
  "Domain",
  "Websites and Hosting",
  "Email",
  "Security",
  "Marketing",
  "Pricing",
];

export interface FooterLink {
  title: string;
  links: string[];
}

export const FOOTER_LINKS: FooterLink[] = [
  {
    title: "About GoDaddy",
    links: [
      "About Us",
      "Annual Returns",
      "Careers",
      "Contact Us",
      "Corporate Social Responsibility",
      "GoDaddy Blog",
      "Investor Relations",
      "Legal",
      "Newsroom",
      "Trust Center",
    ],
  },
  {
    title: "Support",
    links: ["Product Support", "Report Abuse", "Resources"],
  },
  {
    title: "Resources",
    links: [
      "Webmail",
      "WHOIS",
      "ICANN Confirmation",
      "Designers & Developers",
      "Redeem Code",
      "Product Catalog",
      "Customer Testimonials",
      "Business Name Generator",
    ],
  },
  {
    title: "Partner Programs",
    links: ["Affiliates", "Reseller Programs", "GoDaddy Pro"],
  },
  {
    title: "Account",
    links: ["My Products", "Renewals & Billing", "Create Account"],
  },
  {
    title: "Shopping",
    links: [
      "Buy a Domain",
      "Websites",
      "WordPress",
      "Hosting",
      "Web Security",
      "Business Email",
    ],
  },
];

export const BUSSINESS_SOLUTIONS = [
  {
    title: "Empower Your Business with Microsoft 365",
    subtitle: "Microsoft 365",
    img: microsoft,
    content:
      "Microsoft 365 suite provides a robust set of tools and services that can improve productivity, collaboration, and security Productivity tools including Word, Excel, PowerPoint and Outlook.Online meetings, cloud storage, and personalized email.Optimized for mobile devices, smartphones, and tablets.",
    button: "View Plans",
  },
  {
    title: "Built for speed  and security.",
    subtitle: "WordPress Hosting",
    img: wordpress,
    content:
      "Get the most from your WordPress site with hosting designed to perform. From automated updates and backups to industry-leading load times, this is WordPress how it was meant to be.",
    button: "See Plans",
  },
  {
    title: "Free tools for designers and developers.",
    subtitle: "GoDaddy Pro Program",
    img: pro,
    content:
      "Save hours with bulk WordPress updates and automated backups, manage multiple clients from a single dashboard, get exclusive members-only discounts and more — all for free.",
    button: "Learn More",
  },
];
