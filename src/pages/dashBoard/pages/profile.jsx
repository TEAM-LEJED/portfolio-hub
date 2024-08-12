import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import { LynImg } from "../../../assets";
import "../../../App.css";
import c from "../../../components/preview/constants";
import { useEffect, useState } from "react";
import { apiGetProfile, apiUpdateProfile } from "../../../services/profile";
import { toast } from "react-toastify";
import PageLoader from "../../../components/dashBorad/pageLoader";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile]=useState([]);
  const [isLoading, setIsLoading]=useState(false)
  const [isDeleting, setIsDeleting] = useState(false);


  const fetchProfile =async ()=>{
    setIsLoading(true);

    try {
      const res = await apiGetProfile();
      console.log(res.data);
      setProfile(res.data.userProfile)
      
    } catch (error) {
      console.log(error)
      
    }finally{
      setIsLoading(false)
    }
  };


  const handleDelete =async(_id)=>{
    try {
      const res = await apiUpdateProfile(_id);
      console.log(res.data);
      toast.success(res.data.message)
      
    } catch (error) {
      console.log(error);
      toast.error("An error occurred")
      
    }
  }

  useEffect(()=>{
    fetchProfile();
  },[]);
  return (
    <div>
      <PagesLayout
        headerText="Profile"
        buttonText="Add New"
        onClick={() => navigate("/dashboard/profile/add-profile")}
      />
      {isLoading ? (

        <PageLoader/>
      ):(
    
    

      <div className="flex items-center justify-center  h-[40rem]">
        <div className="bg-[#12071F] w-[60rem] h-full flex">
          {/* Profile Image Section */}
          <div className="bg-[#88A9F0] w-1/2 h-full flex flex-col gap-8 items-center justify-center">
            <h1 className="italic text-3xl font-extrabold shadow-inner text-[#F59E0B]">
              Profile
            </h1>
            <div className="w-48 h-48 flex items-center justify-center mb-4 rounded-full shadow-2xl overflow-hidden">
              <img
                src={LynImg}
                alt="profile image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Info and Sections */}
          <div className="flex flex-col items-center w-1/2 h-full p-14 text-white">
            <h3 className="text-2xl font-bold mb-8">Elizabeth James Hammond</h3>

            {/* Sections */}
            <div className="flex flex-col gap-4 w-full max-w-3xl">
              {c.PROFILESECTIONS.map((section, index) => (
                <div key={index} className="flex flex-col ">
                  {/* Section Title and Icon */}
                  <div className="flex flex-row items-center p-1 font-bold">
                    {section.title} {section.icon}
                  </div>

                  {/* Section Content */}
                  <div className="card">
                    <div className="card-content border p-3 border-[#F59E0B] flex flex-col ">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex w-72">
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Profile;
