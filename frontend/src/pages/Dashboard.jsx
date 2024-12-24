import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function Dashboard() {
  const { user } = useAuth();
  const { isDarkMode } = useTheme();

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] dark:bg-dark-bg-primary bg-light-bg-primary">
      <div className="w-full p-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <div className="col-span-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-primary-50">
              Here's what's happening with your projects today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="dark:bg-dark-bg-secondary bg-light-bg-secondary p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-dark-text-primary text-light-text-primary mb-4">
              Total Projects
            </h3>
            <p className="text-3xl font-bold text-primary-500">12</p>
          </div>

          <div className="dark:bg-dark-bg-secondary bg-light-bg-secondary p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-dark-text-primary text-light-text-primary mb-4">
              Active Tasks
            </h3>
            <p className="text-3xl font-bold text-primary-500">25</p>
          </div>

          <div className="dark:bg-dark-bg-secondary bg-light-bg-secondary p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-dark-text-primary text-light-text-primary mb-4">
              Team Members
            </h3>
            <p className="text-3xl font-bold text-primary-500">8</p>
          </div>

          {/* Recent Activity */}
          <div className="col-span-full dark:bg-dark-bg-secondary bg-light-bg-secondary rounded-lg p-6">
            <h2 className="text-2xl font-bold dark:text-dark-text-primary text-light-text-primary mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between p-4 dark:bg-dark-bg-primary bg-light-bg-primary rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium dark:text-dark-text-primary text-light-text-primary">
                        New project created
                      </p>
                      <p className="text-sm dark:text-dark-text-secondary text-light-text-secondary">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <button className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
