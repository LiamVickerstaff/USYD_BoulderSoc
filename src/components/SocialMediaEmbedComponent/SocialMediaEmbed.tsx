import FacebookEmbed from "./FacebookEmbedComponent";
import InstagramEmbed from "./InstagramEmbedComponent";
import styles from "./SocialMediaEmbed.module.css";

export default function SocialMediaEmbed() {
  return (
    <div className={styles.SocialMediaContainer}>
      <div className={styles.maxWidthContainer}>
        <InstagramEmbed />
        <FacebookEmbed />
      </div>
    </div>
  );
}
