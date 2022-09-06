import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InsuranceHome } from "./Pages/InsuranceHome";
import { QuotePersonalDetails } from "./Pages/QuotePersonalDetails";
// import { PersonalDetails } from "./components/quotePersonDetails/PersonalDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InsuranceHome />} />
          <Route
            path="/personal-details"
            element={<QuotePersonalDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
