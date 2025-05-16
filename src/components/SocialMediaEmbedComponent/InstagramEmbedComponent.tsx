import { useEffect } from "react";
import styles from './SocialMediaEmbed.module.css'

export default function InstagramEmbed() {
  useEffect(() => {
    const scriptId = "elfsight-platform-script";

    // Prevent adding the script multiple times
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className={styles.instagramWrapper}>
      <div
        className="elfsight-app-60912215-2e9a-485a-8720-f8dbaa4b6a1e"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
