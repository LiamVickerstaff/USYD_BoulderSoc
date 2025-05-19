import { useEffect, useRef } from "react";
import styles from "./SocialMediaEmbed.module.css";

export default function InstagramEmbed() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fetching and caching the instagram embed
  useEffect(() => {
    const scriptId = "elfsight-platform-script";
    const cacheKey = "elfsight-instagram-html";

    const cachedHTML = sessionStorage.getItem(cacheKey);
    // First check if instagram embed is cached
    if (cachedHTML && wrapperRef.current) {
      wrapperRef.current.innerHTML = cachedHTML;
      // If not, load from elfsight
    } else {
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        script.id = scriptId;
        document.body.appendChild(script);
      }
    }

    // set timer so it can load first, then cache
    const timer = setTimeout(() => {
      const element = document.querySelector(
        "elfsight-app-60912215-2e9a-485a-8720-f8dbaa4b6a1e"
      );
      if (element) {
        sessionStorage.setItem(cacheKey, element.innerHTML);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.instagramWrapper}>
      <div
        className="elfsight-app-60912215-2e9a-485a-8720-f8dbaa4b6a1e"
        data-elfsight-app-lazy
        ref={wrapperRef}
      ></div>
    </div>
  );
}
