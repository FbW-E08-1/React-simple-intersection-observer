import { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const secRef = useRef();
  const anotherRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.map((entry) => entry.isIntersecting && console.log(entry));
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    observer.observe(secRef.current);
    observer.observe(anotherRef.current);
  }, []);

  return (
    <>
      <main>
        <h1>Intersection observer</h1>
      </main>

      <section ref={secRef}>
        <h1>Section</h1>
      </section>
      <section ref={anotherRef}>
        <h1>Another section</h1>
      </section>
    </>
  );
};

export default App;
