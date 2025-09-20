import carsData from "@/data/carsData";
import AllCars from "@/components/templates/AllCars";
import Categories from "@/components/modules/Categories";

function allCars() {
  return (
    <>
      <Categories />
      <AllCars data={carsData} />;
    </>
  );
}

export default allCars;
