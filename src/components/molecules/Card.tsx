import Button from '@/components/atoms/ui/Button';
import Text from '@/components/atoms/typography/Text';
import { motion } from 'motion/react';
import clsx from 'clsx';

interface CardProps {
  title: string;
  subtitle: string;
  bg: string;
  buttonHref: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, bg, buttonHref, className }) => {
  return (
    <motion.div className="overflow-hidden">
      <motion.div
        className={clsx(
          'w-full text-left cursor-pointer flex flex-col justify-between rounded-sm px-4 py-5 h-[340px] md:h-[425px]',
          bg,
          className
        )}
        onClick={() => window.open(buttonHref, '_blank')}
      >
        <div>
          <Text size="medium" tag="h3">
            {title}
          </Text>
          <Text size="medium" variant="muted" tag="h4">
            {subtitle}
          </Text>
        </div>
        <Button href={buttonHref}>Website</Button>
      </motion.div>
    </motion.div>
  );
};

export default Card;
