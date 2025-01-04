import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Props = {
  register: UseFormRegister<FieldValues>;
  domains?:
    | {
        name: string;
        id: string;
        icon: string;
      }[]
    | undefined;
};

const ConversationSearch = ({ register, domains }: Props) => {
  return (
    <div className="space-y-4 ">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Select Domain
        </h2>
        <div className="relative">
          <select
            {...register("domain", {
              onChange: (e) => {
                // Trigger domain change
                const event = new CustomEvent("domainChange", {
                  detail: e.target.value,
                });
                window.dispatchEvent(event);
              },
            })}
            className="border px-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full pl-10 py-2 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <option value="" disabled selected>
              Select domain
            </option>
            {domains?.map((domain) => (
              <option value={domain.id} key={domain.id}>
                {domain.name}
              </option>
            ))}
          </select>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>      
    </div>
  );
};

export default ConversationSearch;
