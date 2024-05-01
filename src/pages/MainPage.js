import React from "react";
import { FormSection, RecentHistorySection, TopSection } from "../components";

export const MainPage = () => {
  return (
    <div className="flex flex-col h-screen gap-5 px-4 py-4 bg-background">
      <div className="h-3/5">
        <TopSection />
      </div>
      <div className="flex flex-row w-full gap-5 h-2/5">
        <FormSection />
        <RecentHistorySection />
      </div>
    </div>
  );
};
