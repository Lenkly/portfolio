import {
  createElement,
  ReactHTML,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styles from '../styles/ScrollAnimation.module.css';

type AnimationProps = {
  type: keyof ReactHTML;
  children: ReactNode;
  className?: string;
  id?: string;
};

function ScrollAnimation({ type, className, id, children }: AnimationProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) {
      return;
    }
    const handleScroll = () => {
      if (window !== undefined) {
        setVisible(
          window.pageYOffset + window.innerHeight > container.offsetTop &&
            window.pageYOffset < container.offsetTop + container.offsetHeight
        );
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const element = useMemo(
    () =>
      createElement(
        type,
        {
          ref: containerRef,
          className: `${className} ${styles.container} ${
            isVisible ? styles.inner : ''
          }`,
          id: id,
        },
        children
      ),
    [children, id, className, isVisible, type]
  );

  return element;
}

export default ScrollAnimation;
