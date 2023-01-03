'use client'
import React from "react";
import { useFetch } from "../firebase";
import Styles from "./title.module.css";

const index = () => {
  const { isLoading, cardList } = useFetch()
  console.log(cardList);
  return (
    <div className={Styles.title}>
      <div className={Styles.logo}>
        <h1>Galery App </h1>
      </div>
      <h2>Bütün Resimler </h2>
      <h2>Resim Galerimize Hoşgeldiniz </h2>
    </div>
  );
};

export default index;
