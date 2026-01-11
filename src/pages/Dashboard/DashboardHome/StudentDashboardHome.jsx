import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const StudentDashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email || user?.providerData?.[0]?.email;

  const { data: stats = { totalPosts: 0, approved: 0, pending: 0, rejected: 0 } } = useQuery({
    queryKey: ['studentStats', email],
    queryFn: async () => {
    const res = await axiosSecure.get(`/student/stats/${email}`);
    return res.data;
  },
  enabled: !!email, 
});

  return (
    <div className="px-6 md:px-10 py-6 md:py-10">
      <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center"> Student Dashboard </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-indigo-50 dark:bg-gray-900  shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300 mb-2"> Total Tuition Posts</h3>
          <p className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 ">{stats.totalPosts}</p>
        </div>

        <div className="bg-green-50 dark:bg-gray-900 shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-green-600 dark:dark:text-green-300 mb-2">  Approved Tuitions</h3>
          <p className="text-3xl font-bold text-green-700 dark:dark:text-green-300">{stats.approved}</p>
        </div>

        <div className="bg-yellow-50 dark:bg-gray-900 shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300 mb-2"> Pending Tuitions </h3>
          <p className="text-3xl font-bold text-yellow-700 dark:text-yellow-300">{stats.pending}</p>
        </div>

        <div className="bg-red-50 dark:bg-gray-900 shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2"> Rejected Tuitions </h3>
          <p className="text-3xl font-bold text-red-700 dark:text-red-400 ">{stats.rejected}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardHome;