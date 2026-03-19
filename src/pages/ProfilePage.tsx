import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trash2, TrendingUp, DollarSign, Clock, LogOut, User } from 'lucide-react';
import { businessIdeas } from '@/data/mockData';

export default function ProfilePage() {
  const { user, savedIdeas, removeIdea, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <User className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Please sign in</h2>
          <p className="text-slate-600 mb-6">Sign in to view your saved ideas and profile.</p>
          <Button asChild>
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get full idea details for saved ideas
  const savedIdeasWithDetails = savedIdeas.map(saved => {
    const fullIdea = businessIdeas.find(idea => idea.id === saved.id);
    return { ...saved, ...fullIdea };
  });

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="flex items-center gap-4">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full bg-white border-2 border-slate-200"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl">
                {getInitials(user?.name || 'U')}
              </div>
            )}
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{user?.name}</h1>
              <p className="text-slate-600">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <div className="text-2xl font-bold text-slate-900">{savedIdeas.length}</div>
            <div className="text-sm text-slate-600">Saved Ideas</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <div className="text-2xl font-bold text-slate-900">
              {savedIdeas.filter(i => i.category === 'Low Capital').length}
            </div>
            <div className="text-sm text-slate-600">Low Capital Ideas</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <div className="text-2xl font-bold text-slate-900">
              {savedIdeas.filter(i => i.trending).length}
            </div>
            <div className="text-sm text-slate-600">Trending Ideas</div>
          </div>
        </div>

        {/* Saved Ideas */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Saved Ideas</h2>
            <p className="text-sm text-slate-600 mt-1">
              {savedIdeas.length > 0 
                ? 'Ideas you\'ve saved for later reference'
                : 'No saved ideas yet. Browse the Idea Vault to find opportunities.'}
            </p>
          </div>

          {savedIdeasWithDetails.length > 0 ? (
            <div className="divide-y divide-slate-200">
              {savedIdeasWithDetails.map((idea, index) => (
                <motion.div
                  key={idea.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
                          {idea.category}
                        </span>
                        {idea.trending && (
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1">{idea.niche}</h3>
                      <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                        {idea.howToStart}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {idea.capitalRequired}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Market: {idea.marketSize}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeIdea(idea.id)}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">No saved ideas yet</h3>
              <p className="text-slate-600 mb-6 max-w-sm mx-auto">
                Browse our Idea Vault to discover profitable business opportunities and save them for later.
              </p>
              <Button asChild variant="outline">
                <Link to="/idea-vault">Browse Idea Vault</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Logout */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={logout}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
