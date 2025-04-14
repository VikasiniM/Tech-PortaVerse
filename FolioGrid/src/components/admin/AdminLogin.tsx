
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Lock, User } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple frontend-only authentication for demonstration
    // In a real app, this would be handled with proper backend authentication
    if (username === 'admin' && password === 'password') {
      toast({
        title: "Login successful",
        description: "Welcome back, Vikasini!",
      });
      // In a real app, this would redirect to the admin dashboard, set auth token, etc.
    } else {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Invalid username or password.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-purple p-6 text-center">
            <h2 className="text-2xl font-semibold text-white">Admin Login</h2>
            <p className="text-purple-100 mt-1">Access your portfolio dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-gray-700 mb-1">Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <User size={18} />
                  </div>
                  <Input 
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Lock size={18} />
                  </div>
                  <Input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
            </div>
            
            <Button type="submit" className="w-full btn-primary">
              Login
            </Button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              For testing, use: admin / password
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
