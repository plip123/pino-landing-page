import { useRouter } from "next/router";
import { Icon } from "@/components/Common/Icon";
import { Typography } from "@/components/Common/Typography";
import { type INavbarItem } from "@/components/Navbar/Navbar.interface";
import { useMobileMenuStorage } from "@/store/MobileMenuStore";

export const useNavbarItems = () => {
  const router = useRouter();
  const { isActive: activeMobileMenu, setIsActive: setActiveMobileMenu } =
    useMobileMenuStorage();

  const textItems: Array<INavbarItem> = [
    {
      label: "Vision",
      type: "basic",
      uri: "#vision",
    },
    {
      label: "Features",
      type: "basic",
      uri: "#features",
    },
    {
      label: "Team",
      type: "basic",
      uri: "#team",
    },
    {
      label: "Roadmap",
      type: "basic",
      uri: "#roadmap",
    },
  ];

  const socialItems: Array<INavbarItem> = [
    {
      label: "Github",
      type: "icon",
      uri: "https://github.com/plip123",
      icon: "pi pi-github text-text-primary text-xl",
    },
    {
      label: "Telegram",
      type: "icon",
      uri: "https://t.me/plip123",
      icon: "telegram",
    },
    {
      label: "Email",
      type: "icon",
      uri: "cpservice98@gmail.com",
      icon: "email",
    },
  ];

  const actionItems: Array<INavbarItem> = [
    {
      label: "Portfolio",
      type: "action",
      uri: "https://cpservice.es/",
      icon: "pi pi-arrow-right",
    },
  ];

  const handleMenu = () => {
    setActiveMobileMenu();
  };

  const getBtnContent = (item: INavbarItem) => {
    switch (item.type) {
      case "basic":
        return item.label;
      case "icon":
        return <Icon icon={item.icon ?? ""} size={22} priority />;
      case "action":
        return (
          <span className="flex w-full items-center justify-between">
            <Typography>{item.label}</Typography>

            <Icon icon={item.icon ?? ""} size={16} />
          </span>
        );
    }
  };

  const getRedirectUri = async (uri: string) => {
    if (activeMobileMenu) handleMenu();

    if (uri.includes("#")) {
      await router.push(`/${uri}`);
      await router.push("/");
    } else if (uri.includes("@")) {
      window.open(`mailto:${uri}`);
    } else if (uri.includes("https://")) {
      window.open(uri, "_blank");
    }
  };

  return {
    getBtnContent,
    getRedirectUri,
    handleMenu,
    actionItems,
    activeMobileMenu,
    textItems,
    socialItems,
  };
};
