import React from "react";
import styles from "./Filters.module.css";

export default function PetFilter({ filters, setFilters }) {
  return (
    <div className={styles["pet-filter-container"]}>
      <div className={styles["filter-container"]}>
        <h4>Favourite</h4>
        <select
          className={styles["form-select"]}
          aria-label="Default select example"
          onChange={(e) =>
            setFilters({
              ...filters,
              favourite: e.target.value,
            })
          }
        >
          <option value="any">Any</option>
          <option value="favoured">Favoured</option>
          <option value="not favoured">Not Favoured</option>
        </select>
      </div>
      <div className={styles["filter-container"]}>
        <h4>Gender</h4>
        <select
          className={styles["form-select"]}
          aria-label="Default select example"
          onChange={(e) =>
            setFilters({
              ...filters,
              gender: e.target.value,
            })
          }
        >
          <option value="any">Any</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  );
}
