import React, { useState, useRef, useEffect } from 'react';

export default function FadeInSections(props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(ref.current);
      }
    });
    observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${visible ? 'visible' : ''}`}>
      {props.children}
    </div>
  );
}
