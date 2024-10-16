import React, { useState } from 'react';
import {Bell,ChevronDown,Search,Mail,LogOut,Settings,User,Sun,Moon} from 'lucide-react';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Mock admin data - replace with your actual admin data
  const admin = {
    name: "Sarah Johnson",
    role: "Senior Administrator",
    email: "sarah.j@company.com",
    avatarUrl: "/api/placeholder/40/40",  // Using placeholder image
    notifications: 3,
    messages: 5
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2 w-[100%]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
      {/* <div className="max-w-7xl mx-auto flex items-center justify-between"> */}
        {/* Left section - Search */}
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Right section - Admin details and actions */}
        <div className="flex items-center space-x-6">
          {/* Theme Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            {isDarkMode ? 
              <Sun className="h-5 w-5 text-gray-600" /> : 
              <Moon className="h-5 w-5 text-gray-600" />
            }
          </button>

          {/* Notifications */}
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="h-5 w-5 text-gray-600" />
            {admin.notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {admin.notifications}
              </span>
            )}
          </button>

          {/* Messages */}
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Mail className="h-5 w-5 text-gray-600" />
            {admin.messages > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {admin.messages}
              </span>
            )}
          </button>

          {/* Admin Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2"
            >
              <img
                src={admin.avatarUrl}
                alt={admin.name}
                className="h-10 w-10 rounded-full border-2 border-gray-200"
              />
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-700">{admin.name}</p>
                <p className="text-xs text-gray-500">{admin.role}</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-700">{admin.name}</p>
                  <p className="text-xs text-gray-500">{admin.email}</p>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                  <User className="h-4 w-4 mr-2" /> Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                  <Settings className="h-4 w-4 mr-2" /> Settings
                </button>
                <div className="border-t border-gray-200">
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center">
                    <LogOut className="h-4 w-4 mr-2" /> Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );

}
export default Header;
    