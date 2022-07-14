import { Routes, Route } from "react-router-dom";
import { Home, Rules, Question } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" />
      <Route path="/singup" />
      <Route path="/profile" />
      <Route path="/rules" element={<Rules />} />
      <Route path="/question" element={<Question />} />
    </Routes>
  );
};

export { AllRoutes };
