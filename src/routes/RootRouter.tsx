import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "../components/utils/ScrollToTop";
import Loader from "../Loader";
import { GeneralWaitlist as General } from "@/screens/waitlists/general";
import { OfficesWaitlist as Offices } from "@/screens/waitlists/offices";
import { SpacesWaitlist as Spaces } from "@/screens/waitlists/spaces";
import { ShortletsWaitlist as Shortlet } from "@/screens/waitlists/shortlets";
import { ErrorPage } from "@/ErrorPage";

// Lazy imports
const Home = lazy(() => import("@/screens/home/index"));
const Shortlets = lazy(() => import("@/screens/shortlets"));

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader color="#ffffff" />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shortlets" element={<Shortlets />} />
          <Route path="/" element={<General />} />
          <Route path="/waitlist-offices" element={<Offices />} />
          <Route path="/waitlist-spaces" element={<Spaces />} />
          <Route path="/waitlist-shortlets" element={<Shortlet />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
