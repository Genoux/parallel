import Button from "@/components/atoms/ui/Button";
import Text from "@/components/atoms/typography/Text";
import { motion, useMotionValue, useSpring } from "motion/react";
import clsx from "clsx";
import { useRef } from "react";

interface CardProps {
  title: string;
  subtitle: string;
  bg: string;
  buttonHref: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  bg,
  buttonHref,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const translateX = useSpring(x, { damping: 50, stiffness: 500 });
  const translateY = useSpring(y, { damping: 50, stiffness: 500 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - centerX) / 32;
    const mouseY = (e.clientY - centerY) / 32;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        translateX,
        translateY,
      }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.1 }}
      className="will-change-transform overflow-hidden"
    >
      <motion.div
        className={clsx(
          "w-full text-left cursor-pointer flex flex-col justify-between rounded-sm px-4 py-5 h-[340px] md:h-[425px]",
          bg,
          className
        )}
        onClick={() => window.open(buttonHref, "_blank")}
      >
        <div>
          <Text size="medium" tag="h3">{title}</Text>
          <Text size="medium" variant="muted" tag="h4">{subtitle}</Text>
        </div>
        <Button href={buttonHref}>Website</Button>
      </motion.div>
    </motion.div>
  );
};

export default Card;