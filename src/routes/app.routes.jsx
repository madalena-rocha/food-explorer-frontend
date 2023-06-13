import { Routes, Route } from "react-router-dom";

import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { Favorites } from "../pages/Favorites";

export function AppRoutes({ isAdmin }) {
  return (
    <Routes>
      <Route path="/" element={<Home isAdmin={isAdmin} />} />
      <Route path="/new" element={<New isAdmin={isAdmin} />} />
      <Route path="/edit/:id" element={<Edit isAdmin={isAdmin} />} />
      <Route path="/dish/:id" element={<Dish isAdmin={isAdmin} />} />
      <Route path="/favorites" element={<Favorites isAdmin={isAdmin} />} />
    </Routes>
  );
}