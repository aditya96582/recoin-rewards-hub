
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Lost & Found", path: "/lost-items" },
    { name: "Donations", path: "/donations" },
    { name: "Help Requests", path: "/help-requests" },
    { name: "Rewards", path: "/rewards" },
  ];

  const handleLogout = () => {
    logout();
    toast.success("You've been logged out successfully");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 rounded-full p-1.5">
              <span className="text-white font-bold">RC</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">ReConnect</h1>
          </div>
          <div className="flex items-center space-x-2">
            {user && (
              <>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center">
                  <span className="mr-1">💰</span>
                  <span className="font-medium">{user.recoins} ReCoins</span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                      <span className="text-sm font-medium">{user.avatar || user.name.substring(0, 2)}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-2 py-1.5 text-sm font-medium">
                      {user.name}
                    </div>
                    <div className="px-2 py-1.5 text-xs text-gray-500">
                      {user.email}
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/" className="cursor-pointer">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/" className="cursor-pointer">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={handleLogout}
                      className="cursor-pointer text-red-600 focus:text-red-600"
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-200 overflow-x-auto">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "inline-block py-3 border-b-2 font-medium",
                    location.pathname === item.path
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="pb-6">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} ReConnect - Building Communities Through Sharing</p>
          <p className="mt-1">Earn ReCoins by helping others and redeem them for vouchers & rewards</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
