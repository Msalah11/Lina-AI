import {
  getUserBalance,
  getUserClients,
  getUserPlanInfo,
  getUserTotalProductPrices,
  getUserTransactions,
} from "@/actions/dashboard";
import DashboardCard from "@/components/dashboard/cards";
import { PlanUsage } from "@/components/dashboard/plan-usage";
import InfoBar from "@/components/infobar";
import { Separator } from "@/components/ui/separator";
import PersonIcon from "@/icons/person-icon";
import { TransactionsIcon } from "@/icons/transactions-icon";
import { DollarSign } from "lucide-react";
import React from "react";

interface Transaction {
  id: string;
  calculated_statement_descriptor: string;
  amount: number;
}

interface TransactionsSectionProps {
  transactions: { data: Transaction[] };
}

const TransactionsSection: React.FC<TransactionsSectionProps> = ({
  transactions,
}) => (
  <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
    <div className="w-full flex justify-between items-start mb-5">
      <div className="flex gap-3 items-center">
        <div className="p-2 bg-primary/10 rounded-lg">
          <TransactionsIcon className="text-primary w-5 h-5" />
        </div>
        <h3 className="font-bold text-lg">Recent Transactions</h3>
      </div>
      <button className="text-sm text-primary hover:text-primary/80 transition-colors">
        See more
      </button>
    </div>
    <Separator orientation="horizontal" className="mb-4" />
    <div className="space-y-3">
      {transactions?.data?.map((transaction) => (
        <div
          className="flex gap-3 w-full justify-between items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border border-gray-100 dark:border-gray-700"
          key={transaction.id}
        >
          <div className="flex flex-col">
            <p className="font-medium text-sm">
              {transaction.calculated_statement_descriptor}
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {new Date().toLocaleDateString()}
            </span>
          </div>
          <p className="font-bold text-lg text-primary">
            ${(transaction.amount / 100).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const Page = async () => {
  try {
    const [clients, sales, plan, transactions, products] = await Promise.all([
      getUserClients(),
      getUserBalance(),
      getUserPlanInfo(),
      getUserTransactions(),
      getUserTotalProductPrices(),
    ]);

    const pipelineValue = (products ?? 0) * (clients ?? 0);

    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Top Bar */}
        <div className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 lg:px-6 py-3">
            <InfoBar />
          </div>
        </div>
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="grid gap-6 mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <DashboardCard
              value={clients ?? 0}
              title="Potential Clients"
              icon={<PersonIcon className="text-indigo-500" />}
              className="bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/20 dark:to-gray-800"
            />
            <DashboardCard
              value={pipelineValue}
              sales
              title="Pipeline Value"
              icon={<DollarSign className="text-primary" />}
              className="bg-gradient-to-br from-primary/10 to-white dark:from-primary/20 dark:to-gray-800"
            />
            <DashboardCard
              value={sales ?? 0}
              sales
              title="Total Sales"
              icon={<DollarSign className="text-emerald-500" />}
              className="bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-800"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="mb-6">
                <h2 className="font-bold text-2xl mb-2">Plan Usage</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A detailed overview of your metrics, usage, customers and more
                </p>
              </div>
              <PlanUsage
                plan={plan?.plan ?? "Free"}
                credits={plan?.credits ?? 0}
                domains={plan?.domains ?? 0}
                clients={clients ?? 0}
              />
            </div>

            <TransactionsSection transactions={transactions ?? { data: [] }} />
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error loading dashboard data:", error);
    return (
      <div className="flex items-center justify-center h-full">
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg">
          Error loading dashboard data. Please try again later.
        </div>
      </div>
    );
  }
};

export default Page;
