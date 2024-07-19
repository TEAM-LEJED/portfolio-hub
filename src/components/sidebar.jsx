import { Link } from "react-router-dom";
import { K } from "../constants";


const Sidebar = () => {

  const logoutItem = K.NAVLINKS.find(navItem => navItem.text === "LogOut");
  // Filter out the LogOut item from the rest of the items
  const otherItems = K.NAVLINKS.filter(navItem => navItem.text !== "LogOut");

  return (
    <div className="min h-[100rem] w-[250px] bg-[#12071F] flex flex-col px-8 py-8">
      <div>
        <span className="text-2xl font-bold text-amber-400 text-start">LEJED PORTFOLIO</span>
      </div>
      <div className="flex flex-col gap-y-[40px] text-xl font-bold py-6">
       {K.NAVLINKS.map(({icon, text, link }, index) => (
        <Link 
        to={link}
        key={index} 
        className="flex gap-x-4 text-white items-center hover:text-amber-500">
          <span>{icon}</span>
        {text}

        </Link>

       ))

       }
      </div>
    </div>
  )




}

export default Sidebar