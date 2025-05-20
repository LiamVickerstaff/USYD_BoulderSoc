import styles from "./MembershipCardContainer.module.css";

export default function MembershipCardContainer({
  title,
  BG_SVG,
  children,
}: {
  title: string;
  BG_SVG: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.membershipCardContainer}`}>
      <img src={BG_SVG} alt="background color" />
      <p className={`${styles.textWrapper}`}>
        <span className="text-stroke">{title}</span>
        <span className="text-fill">{title}</span>
      </p>

      {children}
    </div>
  );
}
