import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // veya "smooth" yumuşak geçiş için
    });
  }, [pathname]);
};

export default useScrollTop;
