import { useState, useEffect, createContext, useContext } from "react";
import compStyles from "../styles/component.module.css";
import routeStyles from "../styles/route.module.css";

const ResizeContext = createContext({
  msgListHeight: "100%",
  epicContentHeight: "100vh",
});

const ResizeProvider = ({ children }) => {
  const [epicContentHeight, setEpicContentHeight] = useState("100vh");
  const [msgListHeight, setMsgListHeight] = useState("100%");
  
  useEffect(() => {
    const updateEpicContentHeight = () => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
      
      if (window.innerWidth < 768) {
        const root = document.querySelector("#root");
        const topBar = document.querySelector(`.${compStyles.topbar}`);
        const bottomBar = document.querySelector(`.${compStyles.bottombar}`);
        if ((root && topBar && bottomBar)) {
          const maxHeight = window.innerHeight - bottomBar.offsetHeight - topBar.offsetHeight - 20 - 20;
          setEpicContentHeight(maxHeight + "px");
        }
      } else if (document.querySelector(`.${compStyles.sidebar}`)){
        setEpicContentHeight("calc(100vh - 32px)");
      }
    };
    
    const updateMsgListHeight = () => {
      const epicContent = document.querySelector(`.${routeStyles.epicContent}`);
      const messagingHeader = document.querySelector(`.${compStyles.messagingHeader}`);
      const messagingInput = document.querySelector(`.${compStyles.messagingInput}`);
      if (messagingHeader && messagingInput && epicContent) {
        if (window.innerWidth >= 768) {
          const maxHeight = epicContent.offsetHeight - messagingHeader.offsetHeight - messagingInput.offsetHeight - 20 - 20 - 12 - 12 - 12 - 12;
          console.log(maxHeight);
          setMsgListHeight(maxHeight + "px");
        } else {
          const maxHeight = parseInt(epicContent.style.maxHeight) - messagingHeader.offsetHeight - messagingInput.offsetHeight - 8 - 8 - 20 - 20 - 12 - 12;
          setMsgListHeight(maxHeight + "px");
        }
      }
    };
    
    const update = () => {
      updateEpicContentHeight();
      updateMsgListHeight();
    };

    const observer = new MutationObserver(() => update());

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
    });

    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
    };
  }, []);
  
  return (
    <ResizeContext.Provider value={{ epicContentHeight, msgListHeight }}>
      {children}
    </ResizeContext.Provider>
  );
};

const useResize = () => useContext(ResizeContext);

export { ResizeProvider, useResize };