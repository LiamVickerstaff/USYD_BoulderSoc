import styles from "./OurSocietySection.module.css";

export default function OurSocietySection() {
  return (
    <div className={`${styles.OurSocietyContainer}`}>
      <h2 className={`sectionTitle`}>Our Society</h2>
      <p className={`paragraph ${styles.textBox}`}>
        At USYD BoulderSoc, we’re all about making climbing welcoming, fun, and
        accessible for everyone — whether you're brand new to the sport or
        already projecting V-grades in your sleep. Since 2018, we’ve been the
        go-to community for students looking to climb hard, hang out, and get
        involved. Our members get together every week to explore Sydney’s
        climbing gyms, hit up outdoor crags, and go on legendary road trips
        (yes, they're as good as they sound).
      </p>
    </div>
  );
}
