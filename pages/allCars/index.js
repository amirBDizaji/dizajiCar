import carsData from "@/data/carsData";
import AllCars from "@/components/templates/AllCars";
import Categories from "@/components/modules/Categories";
import SearchBar from "@/components/modules/SearchBar";

function allCars() {
  return (
    <>
      <SearchBar />
      <Categories />
      <AllCars data={carsData} />;
    </>
  );
}

export default allCars;
