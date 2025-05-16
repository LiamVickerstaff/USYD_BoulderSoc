import styles from "./JoinNowGroup.module.css";

export default function JoinNowGroup() {
  return (
    <div className={styles.joinNowContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.studentPriceBoxContainer}>
          <div className={styles.greenTitleBox}>
            <TextWrapper>USYD Students</TextWrapper>
          </div>
          <div className={styles.priceBox}>$10</div>
        </div>
        <div className={styles.studentPriceBoxContainer}>
          <div className={styles.greenTitleBox}>
            <TextWrapper>Non-USYD Students</TextWrapper>
          </div>
          <div className={styles.priceBox}>$15</div>
        </div>
        <div className={styles.subtitleBox}>
          <p className={styles.subtitle}>Yep, that's for the whole year!</p>
        </div>
      </div>
      <JoinNowBtn />
    </div>
  );
}

function TextWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.textWrapperText}>
      <span className={styles.textStroke}>{children}</span>
      <span className={styles.textFill}>{children}</span>
    </div>
  );
}

function JoinNowBtn() {
  return (
    <a
      className={styles.joinNowBtn}
      href="https://campus.hellorubric.com/?tab=memberships&s=6444&fbclid=PAZXh0bgNhZW0CMTEAAacs1V8o-DrcKrzM3vo7f1gNaKl_doI4vQ6s41aPGkE1hi-vC9AuR01HQNdFiw_aem_ShqbibJ4H3PSXwb1tbfZsg"
    >
      <div className={styles.textWrapperBtn}>
        <span className={styles.textStroke}>Join Now!</span>
        <span className={styles.textFill}>Join Now!</span>
      </div>
    </a>
  );
}
