import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="text-black bg-white pb-20">
      <div className="grid md:grid-cols-2 container mx-auto">
        <div className="py-4">
          <img src={laptop} alt="laptop img" />
        </div>
        <div className="pl-4 flex flex-col justify-center">
          <h3 className="uppercase text-green-400 font-medium">data Analytics dashboard</h3>
          <h2 className="text-2xl font-bold capitalize pb-4">manage data analytics centrally</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia
            reiciendis molestias, quidem nobis magnam exercitationem vero? Ullam
            dicta quae culpa veniam soluta maxime corporis reiciendis unde!
            Temporibus itaque velit quaerat officiis.
          </p>
          <button className="capitalize bg-green-400 font-medium mt-8 w-[200px] mx-auto md:mx-0 py-3 rounded-md">
            get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
