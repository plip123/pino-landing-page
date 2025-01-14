import { useState } from "react";
import LoginAnimation from "@/assets/animations/login-anim.json";
import SecurityAnimation from "@/assets/animations/security-anim.json";
import VisionAnimation from "@/assets/animations/vision-anim.json";
import {
  SectionTheme,
  SectionType,
  type TSections,
} from "@/components/Sections/Section.interface";
import { icons, signUpIcons } from "@/constants";

export const useSections = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleSection = (sectionIndex: number) =>
    setCurrentSection(sectionIndex);

  const visionSection: Array<TSections> = [
    {
      id: "vision",
      title: "Vision",
      description:
        "To be the go-to solution for managing digital assets, offering a secure, accessible, and efficient experience that empowers users to navigate the blockchain ecosystem effortlessly while connecting multiple chains through a single, intuitive, and reliable platform.",
      image: JSON.stringify(VisionAnimation),
      type: SectionType.base,
      theme: SectionTheme.light,
      onEnter: handleSection,
    },
  ];

  const topNotchSecurity: Array<TSections> = [
    {
      title: "Multi-Factor Authentication (MFA)",
      description:
        "Add an extra layer of security with customizable MFA options, including SMS, email, and authenticator apps for maximum protection.",
      icons: [icons.lock],
      type: SectionType.cards,
      theme: SectionTheme.extraLight,
      isCol: false,
    },
    {
      title: "Private Key Ownership",
      description:
        "Your keys, your control. With our wallet, private keys are securely stored on your device, ensuring only you have access to your funds.",
      icons: [icons.walletDark],
      type: SectionType.cards,
      theme: SectionTheme.extraLight,
      isCol: false,
    },
  ];

  const featuresSection: Array<TSections> = [
    {
      id: "features",
      title: "Features",
      type: SectionType.main,
      theme: SectionTheme.light,
      onEnter: handleSection,
    },
    {
      title: "Sign up and access your wallet seamlessly.",
      description:
        "Choose your preferred method to create an account or log in. Whether you prefer email, social platforms, or SMS, we've got you covered for a quick and secure start.",
      icons: signUpIcons,
      image: JSON.stringify(LoginAnimation),
      type: SectionType.base,
      theme: SectionTheme.light,
      onEnter: handleSection,
    },
    {
      title: "Top-Notch Security",
      description:
        "Your security is our priority. With cutting-edge encryption, decentralized mechanisms, and advanced authentication protocols, our wallet ensures your funds and personal data are always protected. We go beyond standard practices to provide a secure environment, giving you peace of mind as you manage your digital assets. From multi-signature wallets to private key protection, we’ve implemented robust measures to stay ahead of evolving threats.",
      image: JSON.stringify(SecurityAnimation),
      subCards: topNotchSecurity,
      type: SectionType.base,
      theme: SectionTheme.light,
      onEnter: handleSection,
    },
  ];

  const team: Array<TSections> = [
    {
      title: "Carlos Pino",
      description: "Full Stack Blockchain Developer",
      image: "/images/cp-ai.jpg",
      icons: [icons.linkedinDark],
      uriIcons: ["https://www.linkedin.com/in/carlos-pino-dev/"],
      type: SectionType.team,
      theme: SectionTheme.dark,
    },
    {
      title: "Jane Doe",
      description: "Blockchain Engineer",
      image: "/images/user1.png",
      icons: [icons.global],
      uriIcons: ["https://www.flaticon.es/iconos-gratis/personas"],
      type: SectionType.team,
      theme: SectionTheme.dark,
    },
    {
      title: "John Smith",
      description: "Crypto Analyst",
      image: "/images/user2.png",
      icons: [icons.global],
      uriIcons: ["https://www.flaticon.es/iconos-gratis/personas"],
      type: SectionType.team,
      theme: SectionTheme.dark,
    },
    {
      title: "Bob Brown",
      description: "DeFi Specialist",
      image: "/images/user3.png",
      icons: [icons.global],
      uriIcons: ["https://www.flaticon.es/iconos-gratis/personas"],
      type: SectionType.team,
      theme: SectionTheme.dark,
    },
    {
      title: "Eve Davis",
      description: "UX/UI Designer",
      image: "/images/user4.png",
      icons: [icons.global],
      uriIcons: ["https://www.flaticon.es/iconos-gratis/personas"],
      type: SectionType.team,
      theme: SectionTheme.dark,
    },
    {
      title: "Alice Johnson",
      description: "Community Manager",
      image: "/images/user5.png",
      icons: [icons.global],
      uriIcons: ["https://www.flaticon.es/iconos-gratis/personas"],
      type: SectionType.team,
      theme: SectionTheme.dark,
    },
    {
      title: "Charlie Wilson",
      description: "Project Manager",
      image: "/images/user6.png",
      icons: [icons.global],
      uriIcons: ["https://www.flaticon.es/iconos-gratis/personas"],
      type: SectionType.team,
      theme: SectionTheme.dark,
    },
  ];

  const teamSection: Array<TSections> = [
    {
      id: "team",
      title: "Team",
      type: SectionType.team,
      theme: SectionTheme.light,
      subCards: team,
      onEnter: handleSection,
    },
  ];

  const roadMap: Array<TSections> = [
    {
      title: "Launch the Multi-Chain Wallet",
      description:
        "Deploy a secure and intuitive wallet that supports multiple blockchains, enabling users to seamlessly manage their digital assets in one place. This includes advanced features like multi-signature wallets, real-time transaction tracking, and cross-chain asset swaps.",
      icons: [icons.walletDark],
      type: SectionType.roadMap,
      theme: SectionTheme.dark,
    },
    {
      title: "Integrate Card Payment Support",
      description:
        "Enable users to buy cryptocurrencies directly using their credit or debit cards, making blockchain assets more accessible to everyone. Our payment system will prioritize security and speed, featuring real-time fiat-to-crypto conversion with minimal fees.",
      icons: [icons.cardDark],
      type: SectionType.roadMap,
      theme: SectionTheme.dark,
    },
    {
      title: "Develop the Mobile Application",
      description:
        "Launch a fully functional mobile app for iOS and Android, providing users with the flexibility to manage their wallets, execute transactions, and access their funds on the go. The app will include biometric authentication for enhanced security and a streamlined user experience.",
      icons: [icons.androidDark],
      type: SectionType.roadMap,
      theme: SectionTheme.dark,
    },
  ];

  const roadMapSection: TSections = {
    id: "roadmap",
    title: "Roadmap",
    type: SectionType.roadMap,
    theme: SectionTheme.light,
    subCards: roadMap,
    onEnter: handleSection,
  };

  const sections: Array<TSections> = [
    ...visionSection,
    ...featuresSection,
    ...teamSection,
  ];

  const allSections: Array<TSections> = [
    // supportedNetworks,
    ...sections,
    roadMapSection,
  ];

  return {
    handleSection,
    featuresSection,
    roadMapSection,
    team,
    teamSection,
    visionSection,
    currentSection,
    sections,
    allSections,
  };
};
