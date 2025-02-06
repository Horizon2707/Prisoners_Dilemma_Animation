import styles from "../styles/Tournament.module.css";
import Card from "../components/Card";
export default function Tournament() {
  return (
    <>
      <div className={styles["main"]}>
        <div className={styles["cardHolder"]}>
          <Card img={"/assets/coop.jpg"} title={"Spiteful Memory"} />
          <div className={styles["corousel"]}>HELLO!</div>
          <div className={styles["multipleCards"]}>
            <Card
              img={"/assets/coop.jpg"}
              title={"Spiteful Memory"}
              width={"10rem"}
              height={"10rem"}
              className={styles["card"]}
            />
            <Card
              img={"/assets/coop.jpg"}
              title={"Spiteful Memory"}
              width={"10rem"}
              height={"10rem"}
              className={styles["card"]}
            />
            <Card
              img={"/assets/coop.jpg"}
              title={"Spiteful Memory"}
              width={"10rem"}
              height={"10rem"}
              className={styles["card"]}
            />
            <Card
              img={"/assets/coop.jpg"}
              title={"Spiteful Memory"}
              width={"10rem"}
              height={"10rem"}
              className={styles["card"]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
