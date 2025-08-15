import React from 'react';
import { useDashboardData } from '../hooks/useDashboardData';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import MetricsCards from '../components/dashboard/MetricsCards';
import ChartsGrid from '../components/dashboard/ChartsGrid';
import RecentActivity from '../components/dashboard/RecentActivity';
import LoadingState from '../components/dashboard/LoadingState';

const AdminDashboard: React.FC = () => {
  const { data, loading, error, refreshData } = useDashboardData();

  // Show loading or error states
  if (loading || error) {
    return <LoadingState loading={loading} error={error} onRetry={refreshData} />;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="min-h-screen bg-color-body-default p-6">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader onRefresh={refreshData} />
        <MetricsCards researchStats={data.researchStats} />
        <ChartsGrid chartData={data} />
        <RecentActivity activities={data.recentActivity} />
      </div>
    </div>
  );
};

export default AdminDashboard;