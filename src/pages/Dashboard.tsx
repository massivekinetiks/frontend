import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Building2, 
  FileText, 
  Clock,
  AlertTriangle,
  CheckCircle,
  Eye,
  Calendar,
  BarChart3,
  Zap
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data - in real app, this would come from API
  const stats = [
    {
      name: 'Total Inspections',
      value: '1,247',
      change: '+12.5%',
      changeType: 'increase',
      icon: FileText,
      color: 'blue'
    },
    {
      name: 'Active Users',
      value: '23',
      change: '+8.2%',
      changeType: 'increase',
      icon: Users,
      color: 'green'
    },
    {
      name: 'Companies',
      value: '156',
      change: '+3.1%',
      changeType: 'increase',
      icon: Building2,
      color: 'purple'
    },
    {
      name: 'AI Analysis',
      value: '98.7%',
      change: '+2.3%',
      changeType: 'increase',
      icon: Zap,
      color: 'orange'
    }
  ];

  const recentInspections = [
    {
      id: 'INSP-001',
      company: 'PowerSafe Electrical',
      location: 'Downtown Office Complex',
      status: 'completed',
      inspector: 'Sarah Johnson',
      date: '2024-01-15',
      score: 95
    },
    {
      id: 'INSP-002',
      company: 'Citywide Inspections',
      location: 'Industrial Warehouse',
      status: 'in-progress',
      inspector: 'Mike Chen',
      date: '2024-01-14',
      score: null
    },
    {
      id: 'INSP-003',
      company: 'Industrial Power Solutions',
      location: 'Healthcare Facility',
      status: 'pending',
      inspector: 'Lisa Rodriguez',
      date: '2024-01-13',
      score: null
    },
    {
      id: 'INSP-004',
      company: 'PowerSafe Electrical',
      location: 'Shopping Mall',
      status: 'completed',
      inspector: 'David Wilson',
      date: '2024-01-12',
      score: 88
    }
  ];

  const upcomingInspections = [
    {
      id: 'INSP-005',
      company: 'Citywide Inspections',
      location: 'Residential Complex',
      inspector: 'Mike Chen',
      date: '2024-01-16',
      time: '09:00 AM'
    },
    {
      id: 'INSP-006',
      company: 'Industrial Power Solutions',
      location: 'Data Center',
      inspector: 'Lisa Rodriguez',
      date: '2024-01-17',
      time: '02:00 PM'
    },
    {
      id: 'INSP-007',
      company: 'PowerSafe Electrical',
      location: 'Hotel',
      inspector: 'Sarah Johnson',
      date: '2024-01-18',
      time: '10:00 AM'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'in-progress':
        return <Clock className="w-4 h-4" />;
      case 'pending':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Welcome back, {user?.firstName}! 👋
            </h1>
            <p className="text-blue-100">
              Here's what's happening with your electrical inspections today.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <BarChart3 className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            green: 'bg-green-100 text-green-600',
            purple: 'bg-purple-100 text-purple-600',
            orange: 'bg-orange-100 text-orange-600'
          };
          
          return (
            <div key={stat.name} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  {stat.changeType === 'increase' ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">from last month</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Inspections */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="card-header">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Recent Inspections</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View all
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="space-y-4">
                {recentInspections.map((inspection) => (
                  <div key={inspection.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(inspection.status)}`}>
                        {getStatusIcon(inspection.status)}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{inspection.id}</h4>
                        <p className="text-sm text-gray-600">{inspection.company}</p>
                        <p className="text-xs text-gray-500">{inspection.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{inspection.inspector}</p>
                      <p className="text-xs text-gray-500">{inspection.date}</p>
                      {inspection.score && (
                        <div className="flex items-center mt-1">
                          <span className="text-sm font-medium text-gray-900">{inspection.score}%</span>
                          <div className="w-16 h-2 bg-gray-200 rounded-full ml-2">
                            <div 
                              className="h-2 bg-green-500 rounded-full" 
                              style={{ width: `${inspection.score}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Inspections */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Inspections</h3>
            </div>
            <div className="card-body">
              <div className="space-y-4">
                {upcomingInspections.map((inspection) => (
                  <div key={inspection.id} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{inspection.id}</h4>
                      <p className="text-xs text-gray-600 truncate">{inspection.company}</p>
                      <p className="text-xs text-gray-500">{inspection.date} at {inspection.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 btn btn-outline btn-sm">
                View Calendar
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>
            <div className="card-body">
              <div className="space-y-3">
                <button className="w-full btn btn-primary btn-sm">
                  <Eye className="w-4 h-4 mr-2" />
                  New Inspection
                </button>
                <button className="w-full btn btn-outline btn-sm">
                  <Users className="w-4 h-4 mr-2" />
                  Add User
                </button>
                <button className="w-full btn btn-outline btn-sm">
                  <Building2 className="w-4 h-4 mr-2" />
                  Add Company
                </button>
                <button className="w-full btn btn-outline btn-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Report
                </button>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
            </div>
            <div className="card-body">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">AI Processing</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-green-600">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-green-600">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">API Services</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-green-600">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">File Storage</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-green-600">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">Sarah Johnson</span> completed inspection{' '}
                  <span className="font-medium">INSP-001</span>
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  New user <span className="font-medium">David Wilson</span> joined the team
                </p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Building2 className="w-4 h-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  New company <span className="font-medium">Industrial Power Solutions</span> registered
                </p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  AI analysis completed for <span className="font-medium">INSP-004</span> with 88% accuracy
                </p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
