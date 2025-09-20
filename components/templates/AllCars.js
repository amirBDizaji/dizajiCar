import Card from "../modules/Card";
import styles from "./AllCars.module.css";

function AllCars({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
}

export default AllCars;
