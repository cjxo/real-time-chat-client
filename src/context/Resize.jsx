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
          const maxHeight = window.innerHeight - 40 - 12 - 12 - 36 - 16 - 16 - 12 - 12;
          setEpicContentHeight(maxHeight + "px");
        }
      } else if (document.querySelector(`.${compStyles.sidebar}`)){
        setEpicContentHeight("calc(100vh - 32px)");
      }
    };
    
    const updateMsgListHeight = () => {
      const root = document.querySelector("#root");
      const messagingHeader = document.querySelector(`.${compStyles.messagingHeader}`);
      const messagingInput = document.querySelector(`.${compStyles.messagingInput}`);
      const topBar = document.querySelector(`.${compStyles.topbar}`);
      const bottomBar = document.querySelector(`.${compStyles.bottombar}`);
      if (messagingHeader && messagingInput && topBar && bottomBar) {
        if (window.innerWidth >= 768) {
          // the number 48is the size of the image to be loaded, because I think that this line 
          // right here is executed EVEN IF THE IMAGE HASNT LOADED YET. So the offsetHeight are lower.
          // The other numbers are just paddings and gaps of the containers.
          const maxHeight = window.innerHeight - 48 - messagingInput.offsetHeight - 36 - 36 - 16 - 16 - 8 - 8;
          setMsgListHeight(maxHeight + "px");
        } else {
          // the 48 here are the size of the images to be loaded, because I think that this line 
          // right here is executed EVEN IF THE IMAGE HASNT LOADED YET. So the offsetHeights are lower.
          // The other numbers are just paddings and gaps of the containers.
          const maxHeight = window.innerHeight - messagingHeader.offsetHeight - topBar.offsetHeight - bottomBar.offsetHeight - 48 - messagingInput.offsetHeight - 16 - 16 - 12 - 12 - 20 - 20 - 8 - 8;
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