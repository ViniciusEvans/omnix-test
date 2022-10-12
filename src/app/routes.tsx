import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import { Page404 } from "../components/page404";
import { Home } from "../pages/home";
import { Offers } from "../pages/offers";
import React from "react";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="offers" element={<Offers />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
