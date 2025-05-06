import { useRef, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Text from '@/components/atoms/typography/Text';
import { cn } from '@/lib/utils';

function TextTransition({ children }: PropsWithChildren) {
  const [height, setHeight] = useState<number | string>('auto');
  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = currentRef.current;
    if (!element) return;

    const { height } = element.getBoundingClientRect();
    setHeight(height);
  }, []);

  return (
    <div
      className={cn(
        'text-transition overflow-hidden flex-row gap-1.5 relative whitespace-normal flex',
        height
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={children?.toString()}
          initial={{ opacity: 0, y: '50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
        >
          <div ref={currentRef}>
            <Text>{children}</Text>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TextTransition;
