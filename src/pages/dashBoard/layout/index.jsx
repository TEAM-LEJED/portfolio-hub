import { Outlet } from 'react-router-dom';
import Sidebar from '../../../components/sidebar';

const DashBoardLayout = () => {
  return (
    <div className='flex'>
        <Sidebar/>
       <div className='bg-zinc-50 w-full'>
       <Outlet/>
       </div>
    </div>
  )
}

export default DashBoardLayout;