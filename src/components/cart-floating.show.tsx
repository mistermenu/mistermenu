import { useState, useEffect } from "react";
import { FloatingCart } from "./cart-floating";

export function ShowFloatingCart() {
  const [showFloatingCart, setShowFloatingCart] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 90) {
        setShowFloatingCart(true);
      } else {
        setShowFloatingCart(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div>{showFloatingCart && <FloatingCart />}</div>;
}
