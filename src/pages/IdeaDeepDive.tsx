import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft, Clock, TrendingUp, Target, DollarSign, Zap,
  CheckCircle, ExternalLink, BarChart, Cpu, Star, Users
} from "lucide-react";
import { detailedBusinessIdeas, BusinessIdea } from "@/data/detailedBusinessIdeas";
import CoreMetricsTable from "@/components/CoreMetricsTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const IdeaDeepDive: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<"overview" | "playbook">("overview");

  const idea = detailedBusinessIdeas.find(i => i.id === id);

  if (!idea) {
    return (
      <div className="min-h-screen bg-white pt-14 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Idea not found</h1>
          <Link to="/idea-vault">
            <Button>Back to Idea Vault</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (score: number) => {
    if (score <= 2) return "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (score <= 3) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  // Business Reality Table rows config
  const realityTableRows = [
    {
      icon: TrendingUp,
      label: "Market Size & Trend",
      value: `${idea.marketSize} — ${idea.marketTrend}`,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: Star,
      label: "Skillset Needed",
      value: idea.skillset,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Clock,
      label: "Time to Revenue",
      value: idea.timeToFirstDollar,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Cpu,
      label: "Monetization Stack",
      value: idea.monetizationStack,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: DollarSign,
      label: "Profit Margin",
      value: `${idea.margin} NET margin`,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: TrendingUp,
      label: "Growth Rate",
      value: idea.growthMoM,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50/30 pt-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back nav */}
        <Link
          to="/idea-vault"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Idea Vault
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="capitalize">
                  {idea.category}
                </Badge>
                {idea.trending && (
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                )}
                {idea.startupCost < 500 && (
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                    Low Capital
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-3">{idea.title}</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{idea.description}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-medium text-emerald-600">Revenue</span>
                  </div>
                  <div className="font-mono font-bold text-emerald-700 text-sm">{idea.potentialRevenue}</div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-blue-600">Investment</span>
                  </div>
                  <div className="font-mono font-bold text-blue-700 text-sm">{idea.initialInvestment}</div>
                </div>

                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-medium text-purple-600">First Dollar</span>
                  </div>
                  <div className="font-mono font-bold text-purple-700 text-sm">{idea.timeToFirstDollar}</div>
                </div>

                <div className="bg-orange-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <BarChart className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-medium text-orange-600">Difficulty</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map(d => (
                      <div key={d} className={`w-2.5 h-2.5 rounded-full ${d <= idea.difficultyScore ? 'bg-orange-500' : 'bg-orange-200'}`} />
                    ))}
                    <span className="text-sm font-bold text-orange-700 ml-1">{idea.difficultyScore}/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 mb-6 p-1 bg-gray-100 rounded-xl w-fit">
          {(["overview", "playbook"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all capitalize ${activeTab === tab
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
                }`}
            >
              {tab === "overview" ? "📊 Overview" : "🗺️ Execution Playbook"}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "overview" ? (
          <div className="space-y-6">
            {/* Business Reality Table */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Business Reality Table</h2>
              <p className="text-sm text-gray-500 mb-5">At-a-glance data before you commit</p>
              <div className="divide-y divide-gray-50">
                {realityTableRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.label} className="flex items-center gap-4 py-3.5">
                      <div className={`p-2 rounded-lg ${row.bg} shrink-0`}>
                        <Icon className={`w-4 h-4 ${row.color}`} />
                      </div>
                      <div className="flex-1 flex items-center justify-between gap-4 min-w-0">
                        <span className="text-sm text-gray-500 shrink-0 w-44">{row.label}</span>
                        <span className="text-sm font-semibold text-gray-800 text-right">{row.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Core Metrics Table */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Core Metrics</h2>
              <CoreMetricsTable idea={idea} />
            </div>

            {/* Recommended Tools */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Recommended Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {idea.recommendedTools.map((tool) => (
                  <div key={tool} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Zap className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Story */}
            <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Real Success Story</h2>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    {idea.executionPlaybook.successStory.founder}
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-xs text-gray-500">Revenue</span>
                      <div className="font-mono font-bold text-emerald-600">
                        {idea.executionPlaybook.successStory.revenue}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Timeframe</span>
                      <div className="font-semibold text-gray-900">
                        {idea.executionPlaybook.successStory.timeframe}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Strategy</span>
                      <div className="font-medium text-gray-700 text-sm">
                        {idea.executionPlaybook.successStory.strategy.split(' ').slice(0, 6).join(' ')}...
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 bg-white/60 rounded-lg p-3">
                    {idea.executionPlaybook.successStory.strategy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-6">
            {/* Summary */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Summary</h2>
              <p className="text-gray-600">{idea.executionPlaybook.summary}</p>
            </div>

            {/* Steps */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">Step-by-Step Execution</h3>
              <div className="space-y-3">
                {idea.executionPlaybook.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="text-xs text-purple-500 font-medium">Timeline</div>
                  <div className="font-semibold text-purple-900">{idea.executionPlaybook.timeline}</div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">Essential Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {idea.executionPlaybook.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors bg-gray-50">
                    <div className="w-9 h-9 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0">
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{tool.name}</h4>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Visit website
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaDeepDive;
