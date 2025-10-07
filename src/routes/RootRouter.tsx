import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "../components/utils/ScrollToTop";
import Loader from "../Loader";
import { ErrorPage } from "@/ErrorPage";

// Lazy imports
const Home = lazy(() => import("@/screens/home/index"));
const Shortlets = lazy(() => import("@/screens/shortlets"));
const Waitlist = lazy(() => import("@/screens/waitlist"));

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader color="#ffffff" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shortlets" element={<Shortlets />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
