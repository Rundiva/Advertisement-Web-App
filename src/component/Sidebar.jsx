import { BarChart2, Box, ShoppingCart, Users, RefreshCcw, Settings, HelpCircle, LogOut, FilePlus } from 'lucide-react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6 flex flex-col">
      <div className="flex items-center mb-10">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
          <span className="text-gray-800 font-bold text-sm">R</span>
        </div>
        <span className="text-xl font-bold">RUNADS</span>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-4">
          <li><Link to="/dashboard" className="flex items-center"><BarChart2 className="mr-3 h-5 w-5" /> Dashboard</Link></li>
          <li><a href="/dashboard/products" className="flex items-center"><Box className="mr-3 h-5 w-5" /> Products</a></li>
          <li><Link to="/dashboard/Orders" className="flex items-center"><ShoppingCart className="mr-3 h-5 w-5" /> Orders</Link></li>
          <li><Link to="/dashboard/customers" className="flex items-center"><Users className="mr-3 h-5 w-5" /> Customers</Link></li>
          <li><Link to="/dashboard/transactions" className="flex items-center"><RefreshCcw className="mr-3 h-5 w-5" /> Transactions</Link></li>
          <li>
            <Link to='/dashboard/postingform' className="flex items-center">
              <FilePlus className="mr-3 h-5 w-5" /> POST AD
            </Link>
          </li>
          <li>
            <Link to='/dashboard/singleview' className="flex items-center">
              <FilePlus className="mr-3 h-5 w-5" /> SingleView
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-auto pt-6">
        <ul className="space-y-4">
          <li><Link to='/dashboard/settings' className="flex items-center"><Settings className="mr-3 h-5 w-5" /> Settings</Link></li>

          {/* might throw an error */}
          <li><Link href="#" className="flex items-center"><HelpCircle className="mr-3 h-5 w-5" /> Help & Support</Link></li>
          <li><Link to="/" className="flex items-center"><LogOut className="mr-3 h-5 w-5" /> Logout</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;