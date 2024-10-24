import { Outlet } from 'react-router-dom';
import Sidebar from '../component/Sidebar'; // Import your Sidebar component
import Header from '../pages/dashboard/Header'; // Import your Header component

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg fixed h-full"> {/* Fixed sidebar */}
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="ml-64 flex-1 pl-3"> {/* Adjusted margin to match sidebar width */}
        {/* Header section */}
        <div className="w-full bg-white shadow-sm fixed top-0 left-64 z-10"> {/* Fixed header */}
          <Header />
        </div>
        
        {/* Main content section */}
        <div className="p-6 mt-16"> {/* Added margin-top to offset the fixed header */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
