import { Link } from "react-router-dom";
import { K } from "../constants";


const Sidebar = () => {
  return (
    <div className="h-screen w-[300px] bg-amber-500 flex flex-col px-8 py-8">
      <div>
        <span className="text-2xl font-bold text-black text-start">LEJED PORTFOLIO</span>
      </div>
      <div className="flex flex-col gap-y-[40px] text-xl font-bold py-6">
       {K.NAVLINKS.map(({icon, text, link }, index) => (
        <Link 
        to={link}
        key={index} 
        className="flex gap-x-4 items-center hover:text-white">
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