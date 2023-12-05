import Card from "./Card";
import FAQ from "./FAQ/FAQ";
import Plans from "./Plans/Plans";
import Services from "./services/Services";

function Main() {
  return (
    <>
      <div className="flex flex-col mx-96 my-10 justify-center items-center">
        <Card />
        <Services />
      </div>
      <Plans />
      <FAQ />
    </>
  );
}

export default Main;
