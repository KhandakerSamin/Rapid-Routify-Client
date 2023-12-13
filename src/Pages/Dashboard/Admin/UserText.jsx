/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Components/SectionTitle";

const SingleText = ({ singleData }) => {
  return (
    <div className="bg-slate-600 w-[380px] rounded-xl h-auto min-h-[200px] p-6">
      <h1 className="text-left font-medium text-xl text-white">Name: {singleData.name}</h1>
      <h1 className="text-left font-medium text-xl text-white">Email: {singleData.email}</h1>
      <h1 className="text-left font-normal text-base text-white">Messege: {singleData.messege}</h1>
    </div>
  );
};

const UserText = () => {
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosPublic
      .get('/userText')
      .then((res) => res.data)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching user text:', error);
      });
  }, [axiosPublic]);

  return (
    <div>
        <SectionTitle heading={'Al Text From User'} subHeading={"Solve the issue as soon as possible"}></SectionTitle>
      <div className="grid grid-cols-3 gap-10 m-10">
        {data.map((singleData) => (
          <SingleText key={singleData._id} singleData={singleData} />
        ))}
      </div>
    </div>
  );
};

export default UserText;
