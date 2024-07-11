import { Link } from "react-router-dom";
import { K } from "../constants";


const Sidebar = () => {
  return (
    <div className="h-screen w-[300px] bg-amber-500 flex flex-col px-8 py-8">
      <div>
        <span className="text-3xl font-bold text-black text-start">LEJED PORTFOLIO</span>
      </div>
      <div>
       {K.NAVLINKS.map(({icon, text, link }, index) => (
        <Link 
        to={link}
        key={index} 
        className="flex gap-x-4 items-center hover:bg-white ">
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