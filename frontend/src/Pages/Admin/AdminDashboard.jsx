import axiosInstance from "../../utils/axiosInstance";
import Table from "../Admin/components/Table";
import Sidebar from "./Sidebar";

import { useState, useEffect } from "react";
import TopBar from "./TopBar";


const Dashboard = () => {
  const [ applications, setApplications ] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axiosInstance.post("/admin/applications");

        if (response.data && Array.isArray(response.data.applications)) {
          setApplications(response.data.applications);
        } else {
          console.error('Invalid response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);
  

  return (
    <div className="relative flex justify-between">
      <Sidebar />
      <div className="w-[77vw] flex justify-start gap-14 flex-col items-center pl-[2.5vw] pr-[3vw] overflow-y-scroll h-[calc(100vh-10px)]">
        <TopBar />
        <div className="">
          <Table rows={applications} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
