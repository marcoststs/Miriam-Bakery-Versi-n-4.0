import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Root() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
