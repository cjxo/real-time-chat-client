import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";
import styles from "../styles/route.module.css";
import compStyles from "../styles/component.module.css";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";

const Homepage = () => {
  const auth = useAuth();
  const [maxEpicContentHeight, setMaxEpicContentHeight] = useState("100vh");

  useEffect(() => {
    const updateMaxHeight = () => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight

      if (window.innerWidth < 768) {
        const topBar = document.querySelector(`.${compStyles.topbar}`);
        const bottomBar = document.querySelector(`.${compStyles.bottombar}`);
        if ((topBar && bottomBar)) {
          const interiorHeightOfTheWindowInPixels = window.innerHeight;
          const maxHeight = interiorHeightOfTheWindowInPixels - topBar.offsetHeight - bottomBar.offsetHeight - 24 - 32 - 24;
          setMaxEpicContentHeight(maxHeight + "px");
          return true;
        }
      } else if (document.querySelector(`.${compStyles.sidebar}`)){
        setMaxEpicContentHeight("calc(100vh - 32px)");
        return true;
      }

      return false;
    };

    const observer = new MutationObserver(() => {
      if (updateMaxHeight()) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });

    window.addEventListener('resize', updateMaxHeight);

    return () => {
      window.removeEventListener('resize', updateMaxHeight);
    };
  }, []);
    
  console.log(maxEpicContentHeight);

  if (auth.isLoading) {
    return <>Loading...</>;
  }

  if (!auth.isAuth) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <section className={styles.homepage}>
      <Topbar />
      <Sidebar />
      
      <section
        className={styles.epicContent}
        style={{ maxHeight: maxEpicContentHeight }}
      >
        <Outlet />
      </section>
      
      <Bottombar />
    </section>
  );
};

export default Homepage;
