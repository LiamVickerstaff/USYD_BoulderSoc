import styles from "./JoinTodayBtn.module.css";

export default function JoinTodayBtn() {
  return (
    <a
      className={styles.joinTodayBtn}
      href="https://campus.hellorubric.com/?tab=memberships&s=6444&fbclid=PAZXh0bgNhZW0CMTEAAacs1V8o-DrcKrzM3vo7f1gNaKl_doI4vQ6s41aPGkE1hi-vC9AuR01HQNdFiw_aem_ShqbibJ4H3PSXwb1tbfZsg"
    >
      <div className={styles.textWrapper}>
        <span className={styles.textStroke}>Join Today</span>
        <span className={styles.textFill}>Join Today</span>
      </div>
    </a>
  );
}
