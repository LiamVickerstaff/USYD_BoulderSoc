import styles from "./SocialMediaEmbed.module.css";

export default function FacebookEmbed() {
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

// import { useMediaQuery } from "react-responsive";
// import { useState } from "react";
// import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

// export default function FacebookEmbed() {

//   const [currentPost, setCurrentPost] = useState(0);

//   const isTabletOrPhone = useMediaQuery({
//     query: "(min-width: 880px)",
//   });

//   const facebookCarousel = new Array(9).fill(null);

//   facebookCarousel.map((item) => console.log("another"));

//   return (
//     <div>
//       {isTabletOrPhone ? (
//         <div className={styles.FacebookContainer}>
//           <h3>Bouldersoc Facebook</h3>
//           <div className={styles.FacebookEmbed}>
//             <div className={styles.ExampleFacebookPhoto}>Photo</div>
//             <div className={styles.ExampleFacebookPhoto}>Photo</div>
//             <div className={styles.ExampleFacebookPhoto}>Photo</div>
//             <div className={styles.ExampleFacebookPhoto}>Photo</div>
//             <div className={styles.ExampleFacebookPhoto}>Photo</div>
//             <div className={styles.ExampleFacebookPhoto}>Photo</div>
//             <div className={styles.ExampleFacebookPhoto}>Photo</div>
//             <div className={styles.ExampleFacebookPhoto}>Photo</div>
//             <div className={styles.ExampleFacebookPhoto}>Photo</div>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <h3>Bouldersoc Facebook</h3>
//           <div>
//             {facebookCarousel.map((item, index) => {
//               if (index == currentPost) {
//                 return <p>{index}</p>;
//               }
//             })}
//           </div>

//           <BiLeftArrow onClick={() => setCurrentPost((prev) => prev - 1)} />
//           <BiRightArrow onClick={() => setCurrentPost((prev) => prev + 1)} />
//         </div>
//       )}
//     </div>
//   );
// }
