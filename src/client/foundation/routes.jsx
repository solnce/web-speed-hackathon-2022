import React, { lazy, Suspense } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";

import { CommonLayout } from "./layouts/CommonLayout";
const Top = lazy(async () => await import("./pages/Top"));
const Odds = lazy(async () => await import("./pages/races/Odds"));
const RaceCard = lazy(async () => await import("./pages/races/RaceCard"));
const RaceResult = lazy(async () => await import("./pages/races/RaceResult"));

/** @type {React.VFC} */
export const Routes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterRoutes>
        <Route element={<CommonLayout />} path="/">
          <Route index element={<Top />} />
          <Route element={<Top />} path=":date" />
          <Route path="races/:raceId">
            <Route element={<RaceCard />} path="race-card" />
            <Route element={<Odds />} path="odds" />
            <Route element={<RaceResult />} path="result" />
          </Route>
        </Route>
      </RouterRoutes>
    </Suspense>
  );
};
