import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/utils/ScrollToTop";

import { Home } from "../screens/home/index";
import { ErrorPage } from "../ErrorPage";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
