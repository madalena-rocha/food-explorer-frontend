import { Routes, Route } from "react-router-dom";

import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New isAdmin />} />
      <Route path="/edit/:id" element={<Edit isAdmin />} />
      <Route path="/dish/:id" element={<Dish isAdmin />} />
    </Routes>
  );
}