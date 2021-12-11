import React from "react";

import styles from "./Card.module.css";

import { useRouter } from "next/router";

export default function Card({ name, phone, email, image, id }) {
  const { url, alt } = image;

  const router = useRouter();

  return (
    <div
      className={styles.card}
      data-testid="pet-card"
      onClick={() => {
        router.push(`/cats/${id}`);
      }}
    >
      <div className={styles["card-header"]}>
        <img src={url} alt={alt} className={styles["card-img"]} />
      </div>
      <div className={styles["cardContent"]}>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
