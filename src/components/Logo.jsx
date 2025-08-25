import config from "@/config";
import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";

const Logo = ({ className = "text-xl" }) => {
  const { appName } = config;

  const appNameParts = appName.split(" ");

  return (
    <Link href={HOME_ROUTE} className={className}>
      <div className="flex items-center justify-start font-semibold hover:font-bold w-40">
        <span className="text-primary">{appNameParts[0]}</span>
        <span className="text-secondary">{appNameParts[1]}</span>
      </div>
    </Link>
  );
};

export default Logo;
