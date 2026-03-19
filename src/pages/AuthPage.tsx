import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Chrome, ArrowRight, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  // Get redirect path from query params or default to home
  const searchParams = new URLSearchParams(location.search);
  const redirectTo = searchParams.get('redirect') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock user data
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      email: formData.email,
      name: isLogin ? formData.email.split('@')[0] : formData.name,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${isLogin ? formData.email.split('@')[0] : formData.name}`,
    };

    login(user);
    setIsLoading(false);
    navigate(redirectTo);
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);

    // Simulate Google OAuth
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock Google user data
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      email: 'founder@equityvault.com',
      name: 'Founder Name',
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=Founder`,
    };

    login(user);
    setIsLoading(false);
    navigate(redirectTo);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/">
            <img src="/logo.png" alt="EquityVault" className="h-8 mx-auto mb-4" />
          </Link>
          <h2 className="text-2xl font-bold text-slate-900">
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {isLogin 
              ? 'Sign in to access your saved ideas and profile' 
              : 'Join 50,000+ founders building profitable businesses'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          {/* Google Auth Button */}
          <Button
            variant="outline"
            className="w-full h-11 mb-6 gap-2 border-slate-200 hover:bg-slate-50"
            onClick={handleGoogleAuth}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Chrome className="w-4 h-4" />
            )}
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-slate-500">or continue with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required={!isLogin}
                  className="h-11"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="founder@startup.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  minLength={8}
                  className="h-11 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-slate-300" />
                  <span className="text-slate-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-emerald-600 hover:text-emerald-700">
                  Forgot password?
                </Link>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-11 gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  {isLogin ? 'Sign in' : 'Create account'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Toggle */}
          <p className="mt-6 text-center text-sm text-slate-600">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        {/* Terms */}
        <p className="mt-6 text-center text-xs text-slate-500">
          By continuing, you agree to our{' '}
          <Link to="/terms" className="text-slate-600 hover:text-slate-900 underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-slate-600 hover:text-slate-900 underline">
            Privacy Policy
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
