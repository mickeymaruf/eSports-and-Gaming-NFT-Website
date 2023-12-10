import styles from "./Btn.module.css"

const Btn = () => {
    return (
        <button type='button' className={styles["hexagon-btn-bg"]}>
            <div className={styles['hexagon-btn']}>CONTACT US</div>
        </button>
    );
};

export default Btn;