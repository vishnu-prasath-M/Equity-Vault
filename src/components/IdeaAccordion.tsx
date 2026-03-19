import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronDown, ChevronRight, Clock, DollarSign, Target, TrendingUp, Zap, BarChart, Users, CheckCircle } from "lucide-react";
import { detailedBusinessIdeas, BusinessIdea } from "@/data/detailedBusinessIdeas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const IdeaAccordion: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [expandedIdeas, setExpandedIdeas] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  
  const categoryFilter = searchParams.get("category") || "";
  const typeFilter = searchParams.get("type") || "";

  const filteredIdeas = detailedBusinessIdeas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || idea.category === categoryFilter;
    const matchesType = !typeFilter || 
                       (typeFilter === "weekend" && idea.category === "weekend") ||
                       (typeFilter === "low-capital" && idea.initialInvestment.includes("$0"));
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const toggleExpanded = (ideaId: string) => {
    const newExpanded = new Set(expandedIdeas);
    if (newExpanded.has(ideaId)) {
      newExpanded.delete(ideaId);
    } else {
      newExpanded.add(ideaId);
    }
    setExpandedIdeas(newExpanded);
  };

  const getDifficultyColor = (score: number) => {
    if (score <= 2) return "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (score <= 3) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getScalingColor = (potential: string) => {
    switch (potential) {
      case "High": return "text-emerald-600 bg-emerald-50 border-emerald-200";
      case "Medium": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "Low": return "text-red-600 bg-red-50 border-red-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const IdeaCard: React.FC<{ idea: BusinessIdea }> = ({ idea }) => {
    const isExpanded = expandedIdeas.has(idea.id);
    
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {/* Header - Always Visible */}
          <div 
            className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleExpanded(idea.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="capitalize">
                    {idea.category}
                  </Badge>
                  {idea.trending && (
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{idea.title}</h3>
                <p className="text-gray-600 mb-4">{idea.description}</p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-mono font-semibold text-emerald-600">
                      {idea.potentialRevenue.split("-")[0]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">
                      {idea.initialInvestment}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-600">
                      {idea.timeToFirstDollar}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getDifficultyColor(idea.difficultyScore)}>
                      {idea.difficultyScore}/5
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 ml-4">
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="border-t border-gray-200 bg-gray-50">
              <div className="p-6 space-y-6">
                {/* Core Metrics */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Metrics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-emerald-600" />
                        <span className="font-medium text-gray-700">Potential Revenue</span>
                      </div>
                      <div className="font-mono font-semibold text-emerald-600">
                        {idea.potentialRevenue}
                      </div>
                      <div className="text-sm text-gray-500">Monthly recurring revenue</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-gray-700">Initial Investment</span>
                      </div>
                      <div className="font-mono font-semibold text-blue-600">
                        {idea.initialInvestment}
                      </div>
                      <div className="text-sm text-gray-500">Upfront costs</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span className="font-medium text-gray-700">Time to First Dollar</span>
                      </div>
                      <div className="font-mono font-semibold text-purple-600">
                        {idea.timeToFirstDollar}
                      </div>
                      <div className="text-sm text-gray-500">First revenue timeline</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart className="w-4 h-4 text-orange-600" />
                        <span className="font-medium text-gray-700">Difficulty Score</span>
                      </div>
                      <Badge className={getDifficultyColor(idea.difficultyScore)}>
                        {idea.difficultyScore}/5
                      </Badge>
                      <div className="text-sm text-gray-500 mt-1">Technical complexity</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-indigo-600" />
                        <span className="font-medium text-gray-700">Market Size</span>
                      </div>
                      <div className="font-semibold text-indigo-600">
                        {idea.marketSize}
                      </div>
                      <div className="text-sm text-gray-500">Total addressable market</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-gray-700">Profit Margin</span>
                      </div>
                      <div className="font-mono font-semibold text-green-600">
                        {idea.profitMargin}
                      </div>
                      <div className="text-sm text-gray-500">Expected profit margin</div>
                    </div>
                  </div>
                </div>

                {/* Execution Steps */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Start Steps</h4>
                  <div className="space-y-3">
                    {idea.executionPlaybook.steps.slice(0, 3).map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-600">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Story */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Real Success Story</h4>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">
                          {idea.executionPlaybook.successStory.founder}
                        </h5>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Revenue:</span>
                            <div className="font-mono font-semibold text-emerald-600">
                              {idea.executionPlaybook.successStory.revenue}
                            </div>
                          </div>
                          <div>
                            <span className="text-gray-500">Time:</span>
                            <div className="font-semibold text-gray-900">
                              {idea.executionPlaybook.successStory.timeframe}
                            </div>
                          </div>
                          <div>
                            <span className="text-gray-500">Strategy:</span>
                            <div className="font-semibold text-gray-900">
                              {idea.executionPlaybook.successStory.strategy.split(' ').slice(0, 3).join(' ')}...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <Link to={`/idea/${idea.id}`}>
                    <Button>View Full Details</Button>
                  </Link>
                  <Button variant="outline">Save Idea</Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-4 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to home
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Idea Vault</h1>
          <p className="text-gray-600">
            {filteredIdeas.length} ideas found
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant={!typeFilter ? "default" : "outline"}
              size="sm"
              onClick={() => {
                searchParams.delete("type");
                setSearchParams(searchParams);
              }}
            >
              All Types
            </Button>
            <Button
              variant={typeFilter === "weekend" ? "default" : "outline"}
              size="sm"
              onClick={() => {
                searchParams.set("type", "weekend");
                setSearchParams(searchParams);
              }}
            >
              Weekend Projects
            </Button>
            <Button
              variant={typeFilter === "low-capital" ? "default" : "outline"}
              size="sm"
              onClick={() => {
                searchParams.set("type", "low-capital");
                setSearchParams(searchParams);
              }}
            >
              Low Capital
            </Button>
            <Button
              variant={typeFilter === "saas" ? "default" : "outline"}
              size="sm"
              onClick={() => {
                searchParams.set("type", "saas");
                setSearchParams(searchParams);
              }}
            >
              SaaS
            </Button>
          </div>
        </div>

        {/* Ideas List */}
        <div className="space-y-4">
          {filteredIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
          
          {filteredIdeas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No ideas found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdeaAccordion;
