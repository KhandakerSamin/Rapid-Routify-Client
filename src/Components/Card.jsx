
const Card = () => {
    return (
        <div className="w-[390px]  overflow-hidden aspect-square relative cursor-pointer group bg-[#F3F3F3] h-[510px]">
            <img className=" object-cover w-full h-[250px] group-hover:scale-110 transition " src='' alt="" />
            <div className="absolute right-3 top-3">
                <p className="text-white bg-slate-900 font-bold text-lg px-4 py-2 ">$ price</p>
            </div>
            <h1 className="text-left my-4 mx-10 text-2xl font-semibold">Samin</h1>
            <p className="text-left  h-24 mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta neque, dolore delectus animi est quam maxime! Saepe, repudiandae nemo.</p>
            <div className="flex  justify-left mx-10">
                <button  className="btn btn-outline uppercase px-4 py-2  hover:bg-slate-900 border-b-4  my-4">View Details</button>
            </div>
        </div>
    );
};

export default Card;