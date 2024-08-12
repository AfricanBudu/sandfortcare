import axiosInstance from "../../utils/axiosInstance";

const AdminLogin = () => {
    const simulateAdminLogin = async () => {
        try {
          // Replace with your actual login API endpoint
          const response = await axiosInstance.post("/admin/login", {
            email: 'admin@gmail.com',
            password: '123456'
          });
          
          if (response.data && response.data.adminToken) {
            localStorage.setItem("adminToken", response.data.adminToken);
            console.log("Admin logged in successfully");
            
          }
        } catch (error) {
          console.error("Login failed:", error);
        }
      };


  return (
    <div>
      <button onClick={simulateAdminLogin}>Login</button>
    </div>
  )
}

export default AdminLogin
