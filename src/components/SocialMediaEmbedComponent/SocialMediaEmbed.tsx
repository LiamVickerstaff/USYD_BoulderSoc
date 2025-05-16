import InstagramEmbed from "./InstagramEmbedComponent";
import styles from "./SocialMediaEmbed.module.css";

export default function SocialMediaEmbed() {
  return (
    <div className={styles.SocialMediaContainer}>
      <div className={styles.maxWidthContainer}>
        {/* <InstagramEmbed /> */}
        <InstagramEmbed />
        <FacebookEmbed />
      </div>
    </div>
  );
}

// function InstagramEmbed() {
//   return (
//     <div>
//       <div className={styles.InstagramContainer}>
//         <iframe
//           src="//lightwidget.com/widgets/2f4e9dc0165d51d289452946fbb18991.html"
//           className={styles.lightwidgetWidget}
//         ></iframe>
//       </div>
//     </div>
//   );
// }
function FacebookEmbed() {
  return (
    <div>
      <div className={styles.FacebookContainer}>
        <h3>Bouldersoc Facebook</h3>
        <div className={styles.FacebookEmbed}>
          <div className={styles.ExampleFacebookPhoto}>Photo</div>
          <div className={styles.ExampleFacebookPhoto}>Photo</div>
          <div className={styles.ExampleFacebookPhoto}>Photo</div>
          <div className={styles.ExampleFacebookPhoto}>Photo</div>
          <div className={styles.ExampleFacebookPhoto}>Photo</div>
          <div className={styles.ExampleFacebookPhoto}>Photo</div>
          <div className={styles.ExampleFacebookPhoto}>Photo</div>
          <div className={styles.ExampleFacebookPhoto}>Photo</div>
          <div className={styles.ExampleFacebookPhoto}>Photo</div>
        </div>
      </div>
    </div>
  );
}
