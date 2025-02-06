import styles from "../styles/Button.module.css";
import { useNavigate } from "react-router-dom";

export default function Button({ text, routeTo }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/" + routeTo);
  }
  return (
    <>
      <button className={styles["button-css"]} onClick={handleClick}>
        {text}
      </button>
    </>
  );
}
