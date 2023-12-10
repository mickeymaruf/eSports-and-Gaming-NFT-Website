import styles from "./Btn.module.css"

const Btn = ({ children }) => {
    return (
        <button type='button' className={`${styles["hexagon-btn-bg"]} bg-white`}>
            <div
                style={{ clipPath: "polygon(2% 50%, 15% 0, 85% 0, 98% 50%, 85% 100%, 15% 100%)" }}
                className={`${styles['hexagon-btn']} font-bold uppercase duration-300 py-[15px] px-12 whitespace-nowrap text-gray-900 bg-[#4bd46d] hover:bg-white`}
            >
                {children}
            </div>
        </button>
    );
};


export { Btn };