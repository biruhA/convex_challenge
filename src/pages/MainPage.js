import React from "react";
import { FormSection, RecentHistorySection, TopSection } from "../components";

export const MainPage = () => {
  return (
    <div className="flex flex-col h-screen gap-5 px-4 py-4 bg-background overflow-y-auto lg:overflow-hidden">
      <div className="h-1/3 lg:h-3/5 bg-background">
        <TopSection />
      </div>
      <div className="flex flex-col w-full gap-5 h-2/3 bg-background lg:flex-row lg:h-2/5">
        <FormSection />
        <RecentHistorySection />
      </div>
    </div>
  );
};
