import React, { useState } from "react";
import { PiStudentFill } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import { BsFillBagCheckFill, BsPersonWorkspace } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { useStateContext } from "../contexts/ContextProvider";
import { Box, ListItemButton } from "@mui/material";
import LineChart from "./Charts/LineChart";
import OpenForm from "./OpenForm";
import BasicTable from "./BasicTable";
import axios from "axios";
import { toast } from "react-toastify";
import PieChart from "./Charts/PieChart";

const Ecommerce = () => {
  const data = [10, 7.5, 8, 9, 7.7];
  const labels = ["2022", "2021", "2020", "2019", "2018"];

  const { currentColor } = useStateContext();
  const [grade, setGrade] = useState("");
  const [university, setUniversity] = useState("");

  const saveGrade = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://fastfood-api-bz41.onrender.com/save-grade", {
        grade,
      });
      toast.success("saved successfully,check out your database");
    } catch (error) {
      return toast.error("an unexpected error occurred,please try later");
    }
  };

  const handleGradeChange = (event) => {
    const selectedGrade = event.target.value;
    setGrade(selectedGrade);

    const universityRecommendations = {
      A: "Harvard University",
      Aminus: "Harvard University",
      B: "Stanford University",
      Cplus: "University of California, Berkeley",
      Cminus: "Meru University",
      Bplus: "Moi University",
      Bminus: "Kenyatta University",
      Dminus: "RVIST",
      D: "NIBS Training Institute",
      Dplus: "Mukurweinini Technical Training Institute",
      C: "The Nyeri National Polytechnic",
      E: "Mombasa Polytechnic",
    };

    setUniversity(universityRecommendations[selectedGrade] || "Searching....");
  };

  return (
    <div className="mt-20 md:mt-0 p-6 h-full">
      {/* Cards Section */}
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 md:justify-between items-center gap-6">
        <div className="flex items-center justify-around gap-6 bg-orange-300 shadow-sm hover:drop-shadow-2xl p-4 w-full h-28">
          <div className="flex flex-col items-center">
            <i>
              <PiStudentFill size={50} color={currentColor} />
            </i>
            <p className="text-lg">Candidates</p>
          </div>
          <div className="text-3xl">
            <p>175,402</p>
          </div>
        </div>

        <div className="flex items-center justify-around gap-6 bg-blue-200 shadow-sm hover:drop-shadow-2xl p-4 w-full h-28">
          <div className="flex flex-col items-center">
            <i>
              <FaSchool size={50} color={currentColor} />
            </i>
            <p className="text-lg">Schools</p>
          </div>
          <div className="text-3xl">
            <p>20,341</p>
          </div>
        </div>

        <div className="flex items-center justify-around gap-6 bg-red-300 shadow-sm hover:drop-shadow-2xl p-4 w-full h-28">
          <div className="flex flex-col items-center">
            <i>
              <IoBook size={50} color={currentColor} />
            </i>
            <p className="text-lg">Subjects</p>
          </div>
          <div className="text-3xl">
            <p>24</p>
          </div>
        </div>

        <div className="flex items-center justify-around gap-6 bg-pink-300 shadow-sm hover:drop-shadow-2xl p-4 w-full h-28">
          <div className="flex flex-col items-center">
            <i>
              <FcCancel size={50} color={currentColor} />
            </i>
            <p className="text-lg">Cancelled</p>
          </div>
          <div className="text-3xl">
            <p>8,000</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16">
        <div className="text-center">
          <button className="cursor-auto p-2 rounded-3xl w-72 dark:bg-white uppercase text-orange-400 bg-black drop-shadow-xl">
            WHY CHOOSE US
          </button>
          <div className="mt-10 md:flex sm:block justify-around items-center gap-8">
            <div className="bg-white dark:bg-secondary-dark-bg dark:text-white md:w-96 w-full h-full shadow-xl mb-6 rounded-lg p-6 text-center space-y-4">
              <button className="bg-black p-6 rounded-full">
                <BsFillBagCheckFill size={56} style={{ color: currentColor }} />
              </button>
              <h2>Unique Approach</h2>
              <p className="text-gray-500 text-sm pb-6 dark:text-gray-300">
                we seamlessly provide free check out for every school matching
                your results.
              </p>
            </div>

            <div className="bg-white dark:bg-secondary-dark-bg dark:text-white md:w-96 w-full h-full mb-6 shadow-xl rounded-lg p-6 text-center space-y-4">
              <button className="bg-black p-6 rounded-full">
                <BsPersonWorkspace size={56} style={{ color: currentColor }} />
              </button>
              <h2>Great Team</h2>
              <p className="text-gray-500 text-sm pb-6 dark:text-gray-300">
                Our team are always available 24/7 dedicated to serving you.
                Always awaiting for your consultation
              </p>
            </div>

            <div className="bg-white md:w-96 w-full mb-6 h-full shadow-xl dark:bg-secondary-dark-bg dark:text-white rounded-lg p-6 text-center space-y-4">
              <button className="bg-black p-6 rounded-full">
                <RiCustomerService2Line
                  size={56}
                  style={{ color: currentColor }}
                />
              </button>
              <h2>Help Line</h2>
              <p className="text-gray-500 text-sm pb-6 dark:text-gray-300">
                students with any issues concerning their school selection can
                email or call us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* School Selection Form */}
      <div>
        <div className="text-center">
          <button className="cursor-auto p-2 rounded-3xl w-72 dark:bg-white uppercase text-orange-400 bg-black drop-shadow-xl">
            School Selection
          </button>
        </div>

        <div className="bg-white mt-10 p-2 shadow-sm rounded-lg">
          <h3 className="text-gray-600 font-bold ml-4">
            Open the form to fill out
          </h3>
          <div className="items-center justify-between p-4">
            <Box mt="10px">
              <OpenForm />
            </Box>

            <div className="p-4">
              <p className="text-orange-400 text-center">
                Your Grade matches the University or College given below by the
                system
              </p>

              <form onSubmit={saveGrade}>
                <div className="bg-white md:p-10 p-5 shadow-xl">
                  <i>
                    fill the form above for accuracy during school selection
                  </i>
                  <div className="mt-4">
                    <h1 className="font-bold">
                      University Recommendation Tool
                    </h1>
                    <div className="flex flex-col">
                      <label className="text-gray-400 font-semibold">
                        Select Your Grade:
                      </label>
                      <select
                        value={grade}
                        onChange={handleGradeChange}
                        className="border-2 w-full mt-4 p-4"
                      >
                        <option value="">-- Select Grade --</option>
                        <option value="A">A</option>
                        <option value="Aminus">A-</option>
                        <option value="Bplus">B+</option>
                        <option value="B">B</option>
                        <option value="Bminus">B-</option>
                        <option value="Cplus">C+</option>
                        <option value="C">C</option>
                        <option value="Cminus">C-</option>
                        <option value="Dplus">D+</option>
                        <option value="D">D</option>
                        <option value="Dminus">D-</option>
                        <option value="E">E</option>
                      </select>
                    </div>
                    {grade && (
                      <div className="text-center mt-6">
                        <p className="text-gray-800">
                          Recommended University/College:
                          <span className="font-bold flex flex-wrap justify-center items-center md:text-2xl ml-4 text-black">
                            {university}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    style={{ background: currentColor }}
                    className="p-2 mt-4 ml-auto flex text-white rounded-lg hover:drop-shadow-xl"
                  >
                    Save Grade
                  </button>
                </div>
              </form>
            </div>

            <div>
              <div className="mt-6">
                <h2 className="font-bold text-center">Top 5 Students 2023</h2>
                <BasicTable />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yearly Graph Section */}
      <div className="mt-10">
        <div className="text-center pb-8">
          <button className="cursor-auto p-2 rounded-3xl w-72 dark:bg-white uppercase text-orange-400 bg-black drop-shadow-xl">
            Yearly Graph
          </button>
        </div>
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-6 flex flex-col xl:flex-row gap-6 justify-center">
          <div className="line-chart w-full xl:w-1/2 max-w-lg">
            <LineChart />
          </div>
          <div className="pie-chart w-full xl:w-1/2 max-w-lg">
            <PieChart data={data} labels={labels} />
          </div>
        </div>
      </div>

      {/* School Section */}
      <div className="mt-10 bg-white dark:bg-gray-800 md:p-6 p-4 text-center rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">2023 Top 10 Highly Ranked Schools</h3>
        <div
          style={{ borderColor: currentColor }}
          className="border-t-4 border-b-4 mt-4 p-6 rounded-lg"
        >
          <ol
            className="grid md:grid-cols-2 grid-cols-1 gap-4"
            style={{ color: currentColor, textDecoration: "underline" }}
          >
            <a href="https://thenyeripoly.ac.ke/">
              <ListItemButton>Nyeri National Polytechnic</ListItemButton>
            </a>
            <a href="https://tukenya.ac.ke/">
              <ListItemButton>Technical University Of Kenya</ListItemButton>
            </a>
            <a href="https://strathmore.edu/">
              <ListItemButton>Strathmore University</ListItemButton>
            </a>
            <a href="http://mu.ac.ke/">
              <ListItemButton>Moi University</ListItemButton>
            </a>
            <a href="https://www.maseno.ac.ke/">
              <ListItemButton>Maseno University</ListItemButton>
            </a>
            <a href="https://www.uonbi.ac.ke/">
              <ListItemButton>University Of Nairobi</ListItemButton>
            </a>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
