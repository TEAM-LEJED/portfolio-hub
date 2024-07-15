import { Link } from 'react-router-dom'
import c from "./constants";
const navPreview = () => {
  return (
    <nav>
    <ul className="flex flex-col space-y-2">
      {c.NAVPREVIEW.map((item, index) => (
        <li key={index}>
          <Link to={item.link} className="text-blue-500 hover:text-blue-700">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default navPreview