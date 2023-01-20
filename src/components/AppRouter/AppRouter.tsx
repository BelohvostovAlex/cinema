import { FunctionComponent } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { publicRoutes } from "./interfaces";

export const AppRouter: FunctionComponent = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
    </AnimatePresence>
  );
};
