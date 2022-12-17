import {useEffect} from "react";
import {useState} from "react";

import styles from "./TasteItem.module.scss";
import {useDispatch} from "react-redux";
import {deleteNewCurrentItem} from "../../../../Redux/tastes";

const TasteItem = ({
    item,
    index,
    updateTastes,
    currentTastes,
    CandyLimit,
    updateCandyLimit,
}) => {
    const dispatch = useDispatch();
    const [count, updateCount] = useState(1);

    return (
        <div>
            <div className={styles["tastes_block"]}>
                {index + 1}) {item}
                <button
                    onClick={() => {
                        dispatch(deleteNewCurrentItem(item));
                    }}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z"
                            fill="red"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className={styles["count-block"]}>
                <p>Количество: </p>
                <button
                    onClick={() => {
                        if (count > 1) {
                            updateCount(count - 1);
                        }
                    }}
                >
                    -
                </button>
                {count} шт
                <button
                    onClick={() => {
                        updateCount(count + 1);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default TasteItem;
