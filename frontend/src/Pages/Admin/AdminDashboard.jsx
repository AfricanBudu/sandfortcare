import axiosInstance from "../../utils/axiosInstance";
import Table from "../Admin/components/Table";

import { useState, useEffect } from "react";


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
    <div>
      <nav>
        <div className="brand-name">Dashboard</div>
        <div className="">
          <div className="admin"></div>
          <div className="notification-icon"></div>
        </div>
      </nav>
      <div className="flex flex-col items-center">
        <div className="">
          <ul className="flex">
            <li>All Users</li>
            <li>Active</li>
            <li>Inactive</li>
          </ul>
        </div>
        <div className="relative w-[70vw]">
          <Table rows={applications} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
