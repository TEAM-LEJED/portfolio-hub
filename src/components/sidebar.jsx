import { NavLink, useNavigate } from "react-router-dom";
import { K } from "../constants";
import { apiLogout } from "../services/auth";
import { LogOut } from "lucide-react"; // Ensure correct import

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await apiLogout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <div className="min-h-[100rem] w-[250px] bg-[#12071F] flex flex-col px-8 py-8">
      <div>
        <span className="text-2xl font-bold text-amber-400 text-start">
          LEJED PORTFOLIO
        </span>
      </div>
      <div className="flex flex-col gap-y-[40px] text-xl font-bold py-6">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <NavLink
            to={link}
            key={index}
            className={({ isActive }) =>
              `flex gap-x-4 items-center hover:bg-pink hover:text-white hover:rounded-md p-2 ${
                isActive ? "bg-pink text-white" : ""
              }`
            }
            end
          >
            <span className="bg-pink text-white p-2 rounded-full">{icon}</span>
            <span>{text}</span>
          </NavLink>
        ))}
      </div>
      <button
        className="flex gap-x-4 items-center mt-auto hover:bg-pink hover:text-white hover:rounded-md p-2"
        onClick={logout}
      >
        <span className=" text-white p-2 rounded-full">
          <LogOut />
        </span>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
