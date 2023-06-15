import bannerImage from "../../../assets/image/banner-pic.png";

export const Banner = () => {
  return (
    <>
      <div className="mx-5 rounded-md">
        <div className="hero bg-emerald-100">
          <div className="hero-content flex-col lg:flex-row">
            
            <div>
              <h1 className="text-6xl font-bold">
                Buy your <br /> dream plants
              </h1>
              <p className="py-6">
                <div className="flex space-x-4">
                  <div>
                    <h1 className="text-4xl font-semibold">50+</h1>
                    <p className="text-2xl font-semibold py-2">Plant Species</p>
                  </div>
                  <div className="border-2 border-slate-950 h-20">
                    
                  </div>
                  <div>
                  <h1 className="text-4xl font-semibold">150+</h1>
                  <p className="text-2xl font-semibold py-2">Customers</p>
                  </div>
                  
                </div>
              </p>
              <button className="btn btn-primary">change to input here</button>
            </div>
            <img
              src={bannerImage}
              className="max-w-sm  rounded-lg md:mx-40 -mt-28 "
            />
          </div>
        </div>
      </div>
    </>
  );
};
