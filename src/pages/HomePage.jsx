import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>
          You travel the world <br /> Worldwise keeps track of your adventures
        </h1>
        <h2>
          A worldmap that tracks your footsteps into every city you think of.
          Never forget your wonderful experiences and show your friends how you
          have wandered the world
        </h2>
      </section>
    </main>
  );
}
