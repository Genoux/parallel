import Link from "next/link";
import Text from "@/components/atoms/typography/Text";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href = "#", className }) => {
  const buttonClasses = clsx(
    "cursor-pointer text-lg bg-black text-white px-3 rounded-full py-1 border border-transparent w-fit hover:border-black hover:bg-transparent hover:text-black transition-colors ease-in-out",
    className
  );

  return (
    <Link href={href} target="_blank" className={buttonClasses}>
      <Text>{children}</Text>
    </Link>
  );
};

export default Button;
