import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actions/userActions";
import { Users, Eye, ChevronRight, Search, Grid, List } from "lucide-react";
import { Link } from "react-router-dom";

const Loader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-gray-200 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [filteredUsers, setFilteredUsers] = useState([]);



  useEffect(() => {
    if (users) {
      const filtered = users.filter(user =>
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [users, searchTerm]);

  if (!users) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded-lg w-48 mb-8"></div>
            <div className="h-12 bg-gray-200 rounded-lg mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="h-10 bg-gray-200 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          </div>
          <p className="text-gray-600">Manage and view all users in your organization</p>
        </div>

        {/* Controls */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
              />
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm border">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Users Grid/List */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {filteredUsers.length > 0 ? (
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
            }>
              {filteredUsers.map((user, index) => (
                <div
                  key={user.id}
                  className={`group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up ${
                    viewMode === "list" ? "flex items-center p-4" : "p-6"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex items-center ${viewMode === "list" ? "flex-1 space-x-4" : "flex-col space-y-4"}`}>
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                    </div>

                    {/* User Info */}
                    <div className={`${viewMode === "list" ? "flex-1" : "text-center"}`}>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-1">
                        {user.fullName}
                      </h3>
                    </div>

                    {/* Action Button */}
                    <div className={viewMode === "list" ? "" : "w-full"}>
                      <Link to={`/users/${user.id}/projects`} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2.5 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:scale-105 shadow-md hover:shadow-lg">
                        <Eye className="w-4 h-4" />
                        <span className="font-medium">See Projects</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No users found</h3>
              <p className="text-gray-600">Try adjusting your search terms</p>
            </div>
          )}
        </div>

        {/* Stats */}
        {filteredUsers.length > 0 && (
          <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-center">
                <div>
                  <p className="text-sm text-gray-600 text-center">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900 text-center">{filteredUsers.length}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default UsersPage;