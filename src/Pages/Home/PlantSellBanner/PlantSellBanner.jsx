import image1 from "../../../assets/image/home-pic-1.jpg";
import image2 from "../../../assets/image/home-pic-2.jpg";
import image3 from "../../../assets/image/home-pic-3.jpg";

const PlantSellBanner = () => {
  return (
    <>
      <section className="mx-5 mt-10">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="mx-5">
              <h1 className="text-5xl font-bold">Best Selling Plants</h1>
              <p className="py-6">
                Easiest way to healthy life by buying your favorite plants
              </p>
              <button className="btn btn-accent">See more --</button>
            </div>
            <div>
              <img src={image1} alt="" />
              <p className="py-1 text-xl mt-3">Natural Plants</p>
              <p className="text-gray-600 text-xl">25$</p>
            </div>
            <div>
              <img src={image2} alt="" />
              <p className="py-1 text-xl mt-3">Natural Plants</p>
              <p className="text-gray-600 text-xl">25$</p>
            </div>
            <div>
              <img src={image3} alt="" />
              <p className="py-1 text-xl mt-3">Natural Plants</p>
              <p className="text-gray-600 text-xl">25$</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlantSellBanner;
