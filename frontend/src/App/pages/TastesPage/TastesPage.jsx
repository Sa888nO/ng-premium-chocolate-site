import React, {useState, useEffect} from "react";

import CandyFlavors from "@store/CandyFlavors";
import TruffleFlavors from "@store/TruffleFlavors";
import classNames from "classnames";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";

import ShopItems from "./../../../store/ShopItems/ShopItems";
import {BodyCandyItem} from "./components";
import DropDownList from "./DropDownList";
import DropDownListTastes from "./DropDownListTastes";
import TasteItem from "./TasteItem";
import styles from "./TastesPage.module.scss";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {addNewCurrentItem, deleteNewCurrentItem} from "./../../../Redux/tastes";

const price1 = {
    number9: "900",
    number12: "1200",
    number16: "1600",
    number24: "2400",
    number30: "3000",
};
const price2 = {
    number9: "1000",
    number12: "1300",
    number16: "1700",
    number24: "2500",
    number30: "3100",
};

const TastesPage = () => {
    const dispatch = useDispatch();
    const currentItems = useSelector((state) => state.tastes.currentItems);
    const {id} = useParams();
    let currentItem = ShopItems.getItems.filter((item) => item.id === +id)[0];
    let data = currentItem.truffle
        ? TruffleFlavors.getFlavors
        : CandyFlavors.getFlavors;

    const [countCandy, setCountCandy] = useState(9);
    let maxTastes =
        countCandy === 9
            ? 3
            : countCandy === 12 || countCandy === 16
            ? 4
            : countCandy > 23
            ? 6
            : 3;
    const [currentTastes, updateTastes] = useState([]);
    const [candyLimit, updateCandyLimit] = useState(countCandy);
    let price =
        currentItem.price === 1
            ? price1
            : currentItem.price === 2
            ? price2
            : price1;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className={classNames("page-container", styles.content, {
                [styles["no-current-tastes"]]: currentItems.length < 2,
            })}
        >
            <div className={styles["main-content"]}>
                <div>
                    <img
                        className={styles["img"]}
                        src={currentItem.image}
                        alt="candy"
                    />
                </div>
                <div className={styles["core-block"]}>
                    <div className={styles["core-block__title"]}>
                        {currentItem.title}
                    </div>
                    <div className={styles["price-block"]}>
                        <div className={styles["price-block__select"]}>
                            Количество:
                            <DropDownList
                                options={[
                                    {title: 9},
                                    {title: 12},
                                    {title: 16},
                                    {title: 24},
                                    {title: 30},
                                ]}
                                update={(value) => {
                                    setCountCandy(value);
                                    updateCandyLimit(
                                        value - currentTastes.length
                                    );
                                    maxTastes =
                                        value === 9
                                            ? 3
                                            : value === 12 || value === 16
                                            ? 4
                                            : value > 23
                                            ? 6
                                            : 3;

                                    let newCurrentTastes = [];
                                    for (let i = 0; i < maxTastes; i++) {
                                        if (currentTastes[i]) {
                                            newCurrentTastes.push(
                                                currentTastes[i]
                                            );
                                        }
                                    }
                                    updateTastes(newCurrentTastes);
                                }}
                                typeCount={true}
                            />
                        </div>
                        <div className={styles["price-block__select"]}>
                            <div className={styles.tastes}>
                                <div className={styles.info}>
                                    {`с таким количеством конфет вы можете выбрать 
                                    ${maxTastes} вкусов`}
                                </div>
                                <span>Вкусы</span>

                                {currentItems.map((item, index) => (
                                    <TasteItem
                                        key={item}
                                        item={item}
                                        index={index}
                                        updateTastes={updateTastes}
                                        currentTastes={currentTastes}
                                        CandyLimit={candyLimit}
                                        updateCandyLimit={updateCandyLimit}
                                    />
                                ))}
                                {!(maxTastes - currentItems.length <= 0) ? (
                                    <DropDownListTastes
                                        options={data}
                                        update={(value) => {
                                            if (currentItems.includes(value)) {
                                                dispatch(
                                                    deleteNewCurrentItem(value)
                                                );
                                            } else {
                                                dispatch(
                                                    addNewCurrentItem(value)
                                                );
                                            }
                                        }}
                                        currentTastes={currentItems}
                                        CandyLimit={countCandy}
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className={styles["price-block__price"]}>
                            Цена: <span>{price[`number${countCandy}`]} р</span>
                        </div>
                    </div>
                </div>
            </div>

            {data
                .filter((item) => currentItems.includes(item.title))
                .map((item) => (
                    <BodyCandyItem
                        key={item.id}
                        Title={item.title}
                        subTitle={item.subTitle}
                        image={item.image}
                        info={item.info}
                        price={item.price}
                    />
                ))}
        </div>
    );
};
export default observer(TastesPage);
