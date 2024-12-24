import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { toast } from 'react-hot-toast';
import { EyeIcon, EyeSlashIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      toast.success('Welcome back!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex transition-colors duration-200 dark:bg-dark-bg-primary bg-light-bg-primary">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 md:p-20">
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-bg-secondary transition-colors"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6 text-dark-text-primary" />
            ) : (
              <MoonIcon className="h-6 w-6 text-light-text-primary" />
            )}
          </button>
        </div>
        
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              Sign in to continue your journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-dark-text-primary text-light-text-primary">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary border-0 focus:ring-2 focus:ring-primary-500 dark:text-dark-text-primary text-light-text-primary transition-all duration-200"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 dark:text-dark-text-primary text-light-text-primary">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary border-0 focus:ring-2 focus:ring-primary-500 dark:text-dark-text-primary text-light-text-primary transition-all duration-200"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-500 dark:hover:text-primary-400"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded dark:border-gray-600"
                />
                <label htmlFor="remember-me" className="ml-2 block dark:text-dark-text-secondary text-light-text-secondary">
                  Remember me
                </label>
              </div>
              <button type="button" className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-lg text-white bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg-primary transition-all duration-200 transform hover:scale-[1.02]"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign in'
              )}
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 dark:bg-dark-bg-primary bg-light-bg-primary dark:text-dark-text-secondary text-light-text-secondary">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-3 dark:bg-dark-bg-secondary bg-light-bg-secondary rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <img
                  className="h-5 w-5 mr-2"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google logo"
                />
                <span className="dark:text-dark-text-primary text-light-text-primary">Google</span>
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-3 bg-[#1877F2] rounded-lg hover:bg-[#1865F2] transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-white">Facebook</span>
              </button>
            </div>
          </form>

          <p className="mt-8 text-center dark:text-dark-text-secondary text-light-text-secondary">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Create one now
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Image/Animation */}
      <div className="hidden lg:block w-1/2 bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 p-12">
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-white max-w-lg">
            <h2 className="text-4xl font-bold mb-6">Start Your Journey</h2>
            <p className="text-lg mb-8">
              Join our community and discover amazing features that await you.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Secure Platform</h3>
                <p className="text-sm">Your data is protected with industry-leading encryption.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm">Our team is always here to help you succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
