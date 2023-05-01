import { useEffect, useRef } from "react";
import { withRouter, useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// const ScrollToTopComponent = () => {
//   const mounted = useRef(false);

//   useEffect(() => {
//     if (!mounted.current) {
//       //componentDidMount
//       mounted.current = true;
//     } else {
//       //componentDidUpdate
//       window.scrollTo(0, 0);
//     }
//   });

//   return null;
// };

// export const ScrollToTop = withRouter(ScrollToTopComponent);
