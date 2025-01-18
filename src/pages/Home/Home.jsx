import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Про нас</h1>
      <p className={styles.description}>
        Ми - платформа, яка допомагає клієнтам знаходити бізнеси та записуватися
        на консультації до них швидко та зручно.
      </p>
    </main>
  );
}
