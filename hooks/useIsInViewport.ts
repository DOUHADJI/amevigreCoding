

export function isInViewport(setState) {
    return new IntersectionObserver(([entry]) => {
        if (entry?.isIntersecting) {
            setState(true);
        } else {
            setState(false);
        }
      });
}

/* export function addAnimation(visibility,classList,ref) {
  visibility ? ref.current?.classList.add(classList) : null
} */

/* export function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  } */
  