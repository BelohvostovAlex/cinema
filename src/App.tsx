import React from "react";

import { AppRouter } from "./components/AppRouter/AppRouter";
import { AppLayout } from "./layouts/AppLayout";

import "./index.css";

export const App: React.FC = () => {
  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  );
};
