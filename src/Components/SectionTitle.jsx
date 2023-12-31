/* eslint-disable react/prop-types */

const SectionTitle = ({ heading ,headingBold , subHeading }) => {
    return (
        <div className="md:w-6/12 text-center mx-auto mb-10 pt-10">
            <p className=" text-4xl uppercase border-b-4 mx-10 border-b-yellow-300   py-4">{heading} <span className=" text-4xl  border-b-black font-bold uppercase  py-4">{headingBold}</span></p>
            <p className=" text-xl mt-4 text-black mb-2   ">__ {subHeading} __</p>
        </div>
    );
};

export default SectionTitle;