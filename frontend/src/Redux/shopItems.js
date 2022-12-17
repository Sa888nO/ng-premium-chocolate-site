import {createReducer} from "@reduxjs/toolkit";
import img1 from "@assets/shopItemImages/1.jpg";
import img10 from "@assets/shopItemImages/10.jpg";
import img11 from "@assets/shopItemImages/11.jpg";
import img13 from "@assets/shopItemImages/13.jpg";
import img14 from "@assets/shopItemImages/14.jpg";
import img15 from "@assets/shopItemImages/15.jpeg";
import img16 from "@assets/shopItemImages/16.jpg";
import img17 from "@assets/shopItemImages/17.jpg";
import img2 from "@assets/shopItemImages/2.jpg";
import img3 from "@assets/shopItemImages/3.jpeg";
import img4 from "@assets/shopItemImages/4.jpeg";
import img5 from "@assets/shopItemImages/5.jpg";
import img6 from "@assets/shopItemImages/6.jpeg";
import img7 from "@assets/shopItemImages/7.jpeg";
import img8 from "@assets/shopItemImages/8.jpeg";

export const Data = [
    {id: 1, image: img1, title: "Королевский", price: 1},
    {id: 3, image: img3, title: "Прованс", price: 1},
    {id: 16, image: img16, title: "Love story 1", price: 1},
    {id: 4, image: img4, title: "Роскошь", price: 2},
    {id: 8, image: img8, title: "Шоколад с печатью", price: 1},
    {id: 6, image: img6, title: "Хеллоуин", price: 2},
    {id: 5, image: img5, title: "Учителю", price: 1},
    {id: 2, image: img2, title: "Нежность", price: 1},
    {id: 14, image: img14, title: "Авангард", price: 1},
    {id: 10, image: img10, title: "Трюфели", truffle: true, price: 1},
    {id: 11, image: img11, title: "Машинки", price: 1},
    {id: 13, image: img13, title: "Gold", truffle: true, price: 2},
    {id: 7, image: img7, title: "Цветы", price: 1},
    {id: 17, image: img17, title: "Love story 2", price: 1},
    {id: 15, image: img15, title: "Love", price: 1},
];

const initialState = {
    items: [
        {id: 1, image: img1, title: "Королевский", price: 1},
        {id: 3, image: img3, title: "Прованс", price: 1},
        {id: 16, image: img16, title: "Love story 1", price: 1},
        {id: 4, image: img4, title: "Роскошь", price: 2},
        {id: 8, image: img8, title: "Шоколад с печатью", price: 1},
        {id: 6, image: img6, title: "Хеллоуин", price: 2},
        {id: 5, image: img5, title: "Учителю", price: 1},
        {id: 2, image: img2, title: "Нежность", price: 1},
        {id: 14, image: img14, title: "Авангард", price: 1},
        {id: 10, image: img10, title: "Трюфели", truffle: true, price: 1},
        {id: 11, image: img11, title: "Машинки", price: 1},
        {id: 13, image: img13, title: "Gold", truffle: true, price: 2},
        {id: 7, image: img7, title: "Цветы", price: 1},
        {id: 17, image: img17, title: "Love story 2", price: 1},
        {id: 15, image: img15, title: "Love", price: 1},
    ],
};
export default createReducer(initialState, {});
