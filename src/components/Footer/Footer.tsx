import BoulderSocIcon from "/SVGs/BoulderSoc_Icon.svg";
import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.content}>
        <p className={`${styles.footerSection} ${styles.designBy}`}>
          <i>
            {" "}
            Website And Design <br /> By Liam Vickerstaff
          </i>
        </p>
        <img
          src={BoulderSocIcon}
          width={90}
          alt="BoulderSoc Logo"
          className={`${styles.footerSection} ${styles.boulderSocIcon}`}
        />
        <div className={`${styles.footerSection} ${styles.iconsAndBtn}`}>
          <a
            href="https://www.facebook.com/usydbouldersoc/"
            className={styles.FacebookLink}
          >
            <FaFacebookF size={32} color="#fff" />
          </a>
          <a
            href="https://www.instagram.com/usydboulderingsoc"
            className={styles.instagramLink}
          >
            <FaInstagram size={36} color="#fff" />
          </a>
          <BecomeAMemberBtn />
        </div>
      </div>
    </footer>
  );
}

function BecomeAMemberBtn() {
  return (
    <a
      className={styles.becomeAMemberBtn}
      href="https://campus.hellorubric.com/?tab=memberships&s=6444&fbclid=PAZXh0bgNhZW0CMTEAAacs1V8o-DrcKrzM3vo7f1gNaKl_doI4vQ6s41aPGkE1hi-vC9AuR01HQNdFiw_aem_ShqbibJ4H3PSXwb1tbfZsg"
    >
      <div className={styles.textWrapperBtn}>
        <span className={styles.textStroke}>Become A Member!</span>
        <span className={styles.textFill}>Become A Member!</span>
      </div>
    </a>
  );
}
