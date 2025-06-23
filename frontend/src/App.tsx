import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./layouts/dashboard";
import { AddRecipe, Home, More, MyRecipes } from "./pages/Dashboard";
import { ErrorPage } from "./pages/Error";
import { Landing } from "./pages/Landing";
import { UILoader } from "./components/loaders";
import { Suspense } from "react";

function App() {
  return (
    <div className="container h-[100vh] w-[100vw]">
      <Suspense fallback={<UILoader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Home />} />
              <Route path="addrecipe" element={<AddRecipe />} />
              <Route path="myrecipes" element={<MyRecipes />} />
              <Route path="recipe/:id" element={<More />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
