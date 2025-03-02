import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Workflow", href: "#" },
  
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "IT Development",
    description:
      "We develop bespoke software for organizations to complement existing solutions. These solutions are specific to an organization's unique needs and workflows.",
  },
  {
    icon: <Fingerprint />,
    text: "IT Implementation",
    description:
      "On the implementation, we focus on core banking solutions. Our consultants have 30+ years of experience in core banking systems and ensure seamless integration.",
  },
  {
    icon: <ShieldHalf />,
    text: "IT Consultancy",
    description:
      "We offer project implementation consultancy either through project management or project quality assurance. We work closely with clients to ensure successful delivery.",
  },
  {
    icon: <BatteryCharging />,
    text: "IT Integration",
    description:
      "Service-oriented architecture (SOA) is the current norm of solution implementation. We integrate your organization’s core solutions with modern, scalable architectures.",
  },
];

export const products = [
  {
    icon: <BotMessageSquare />,
    text: "Core Banking Solution",
    description:
      "A comprehensive core banking solution designed to streamline banking operations, enhance customer experience, and ensure regulatory compliance.",
  },
  {
    icon: <Fingerprint />,
    text: "Microfinance Solution Product Suite",
    description:
      "Tailored solutions for microfinance institutions to manage loans, savings, and customer relationships efficiently.",
  },
  {
    icon: <ShieldHalf />,
    text: "Sacco Solution Product Suite",
    description:
      "A specialized suite for Savings and Credit Cooperative Organizations (SACCOs) to manage member accounts, loans, and dividends.",
  },
  {
    icon: <BatteryCharging />,
    text: "Data Protection Compliance Solution",
    description:
      "Ensure compliance with data protection regulations through robust tools and frameworks for data security and privacy.",
  },
  {
    icon: <PlugZap />,
    text: "Business Intelligence and Analytics Solutions",
    description:
      "Leverage advanced analytics and business intelligence tools to make data-driven decisions and gain actionable insights.",
  },
  {
    icon: <GlobeLock />,
    text: "Human Resource Management System",
    description:
      "An integrated HRMS solution to manage employee data, payroll, recruitment, and performance evaluation.",
  },
  {
    icon: <BotMessageSquare />,
    text: "Fixed Assets Management",
    description:
      "Efficiently manage and track fixed assets throughout their lifecycle, ensuring accurate depreciation and compliance.",
  },
  {
    icon: <Fingerprint />,
    text: "Revenue Assurance Solution",
    description:
      "Maximize revenue by identifying and eliminating revenue leakage through automated monitoring and reconciliation.",
  },
  {
    icon: <ShieldHalf />,
    text: "Procurement Management Solution",
    description:
      "Streamline procurement processes, from vendor management to purchase orders, ensuring cost efficiency and transparency.",
  },
  {
    icon: <BatteryCharging />,
    text: "Anti-Money Laundering, Fraud Detection, and Prevention Solutions",
    description:
      "Advanced tools to detect and prevent fraudulent activities and ensure compliance with anti-money laundering regulations.",
  },
  {
    icon: <PlugZap />,
    text: "Mobile Applications Development",
    description:
      "Custom mobile application development to enhance customer engagement and provide seamless user experiences.",
  },
  {
    icon: <GlobeLock />,
    text: "Identity Management Solutions",
    description:
      "Secure and manage user identities and access controls across your organization with robust identity management tools.",
  },
  {
    icon: <BotMessageSquare />,
    text: "Data Security Solutions",
    description:
      "Comprehensive data security solutions to protect sensitive information from breaches and unauthorized access.",
  },
  {
    icon: <Fingerprint />,
    text: "Bulk SMS Solution",
    description:
      "A reliable bulk SMS solution for effective communication with customers, employees, and stakeholders.",
  },
  {
    icon: <ShieldHalf />,
    text: "Customer Correspondence Solution",
    description:
      "Automate and manage customer communication through emails, letters, and notifications for improved engagement.",
  },
  {
    icon: <BatteryCharging />,
    text: "Core Insurance Solution",
    description:
      "A complete core insurance solution to manage policies, claims, underwriting, and customer relationships.",
  },
];

export const checklistItems = [
  {
    title: "Seamless IT Integration",
    description:
      "Integrate your core systems with modern, scalable architectures to streamline operations and improve efficiency.",
  },
  {
    title: "Expert IT Consultancy",
    description:
      "Leverage our 30+ years of experience in IT implementation and project management to ensure smooth workflows and successful delivery.",
  },
  {
    title: "Custom Software Development",
    description:
      "Develop bespoke software solutions tailored to your organization's unique needs, enhancing productivity and reducing bottlenecks.",
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "Utilize our business intelligence and analytics solutions to gain actionable insights and optimize your workflows.",
  },
];

export const pricingOptions = [
  {
    title: "Starter",
    price: "$1000",
    features: [
      "Custom software development consultation",
      "Basic IT integration support",
      "Access to standard IT implementation templates",
      "Email and chat support",
    ],
  },
  {
    title: "Professional",
    price: "$3000",
    features: [
      "End-to-end IT project implementation",
      "Advanced IT integration services",
      "Core banking or microfinance solution setup",
      "Dedicated account manager",
      "Priority support",
    ],
  },
  {
    title: "Enterprise",
    price: "$5000",
    features: [
      "Full-scale IT consultancy and project management",
      "Custom core banking or insurance solution development",
      "Data protection and compliance solutions",
      "Business intelligence and analytics integration",
      "24/7 premium support",
      "Unlimited storage and scalability",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
