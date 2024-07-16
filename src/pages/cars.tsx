import sedanCar from "../assets/sedan.png";
import suvCar from "../assets/car.png";
import luxuryCar from "../assets/supercar.png";

type CarType = {
  title: string;
  description: string;
  img: string | undefined;
};

const data: CarType[] = [
  {
    title: "SEDANS",
    description:
      "Chose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    img: sedanCar,
  },
  {
    title: "SUVS",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    img: suvCar,
  },
  {
    title: "LUXURY",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style",
    img: luxuryCar,
  },
];

const Cars = () => {
  return (
    <>
      <div className="cars">
        {data.map((car) => {
          return (
            <div key={car.title} className="cars__card">
              <img
                className="cars__img"
                src={car.img}
                alt="Icon of a sedan car"
              />
              <h2 className="cars__title">{car.title}</h2>
              <p className="cars__desc">{car.description}</p>
              <button className="cars__btn">Learn More</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cars;
