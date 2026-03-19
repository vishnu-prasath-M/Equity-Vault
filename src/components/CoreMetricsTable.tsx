import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BusinessIdea } from "@/data/detailedBusinessIdeas";
import { CheckCircle, Clock, DollarSign, TrendingUp, Zap, Target, BarChart, Users } from "lucide-react";

interface CoreMetricsTableProps {
  idea: BusinessIdea;
}

const CoreMetricsTable: React.FC<CoreMetricsTableProps> = ({ idea }) => {
  const getDifficultyColor = (score: number) => {
    if (score <= 2) return "text-emerald-600 bg-emerald-50";
    if (score <= 3) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getScalingColor = (potential: string) => {
    switch (potential) {
      case "High": return "text-emerald-600 bg-emerald-50";
      case "Medium": return "text-yellow-600 bg-yellow-50";
      case "Low": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold text-gray-900">Metric</TableHead>
            <TableHead className="font-semibold text-gray-900">Value</TableHead>
            <TableHead className="font-semibold text-gray-900">Context</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                Potential Revenue
              </div>
            </TableCell>
            <TableCell className="font-mono font-semibold text-emerald-600">
              {idea.potentialRevenue}
            </TableCell>
            <TableCell className="text-sm text-gray-600">
              Monthly recurring revenue potential
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                Initial Investment
              </div>
            </TableCell>
            <TableCell className="font-mono font-semibold text-blue-600">
              {idea.initialInvestment}
            </TableCell>
            <TableCell className="text-sm text-gray-600">
              Upfront costs to get started
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600" />
                Time to First Dollar
              </div>
            </TableCell>
            <TableCell className="font-mono font-semibold text-purple-600">
              {idea.timeToFirstDollar}
            </TableCell>
            <TableCell className="text-sm text-gray-600">
              Time to generate first revenue
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <BarChart className="w-4 h-4 text-orange-600" />
                Difficulty Score
              </div>
            </TableCell>
            <TableCell>
              <Badge className={getDifficultyColor(idea.difficultyScore)}>
                {idea.difficultyScore}/5
              </Badge>
            </TableCell>
            <TableCell className="text-sm text-gray-600">
              Technical complexity & effort required
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-600" />
                Market Size
              </div>
            </TableCell>
            <TableCell className="font-semibold text-indigo-600">
              {idea.marketSize}
            </TableCell>
            <TableCell className="text-sm text-gray-600">
              Total addressable market size
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                Profit Margin
              </div>
            </TableCell>
            <TableCell className="font-mono font-semibold text-green-600">
              {idea.profitMargin}
            </TableCell>
            <TableCell className="text-sm text-gray-600">
              Expected profit margin
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-600" />
                Scaling Potential
              </div>
            </TableCell>
            <TableCell>
              <Badge className={getScalingColor(idea.scalingPotential)}>
                {idea.scalingPotential}
              </Badge>
            </TableCell>
            <TableCell className="text-sm text-gray-600">
              Growth potential over time
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-600" />
                Marketing Channel
              </div>
            </TableCell>
            <TableCell className="font-semibold text-cyan-600">
              {idea.marketingChannel}
            </TableCell>
            <TableCell className="text-sm text-gray-600">
              Primary customer acquisition method
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CoreMetricsTable;
