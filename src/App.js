import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InsuranceHome } from "./Pages/InsuranceHome";
import { QuotePersonalDetails } from "./Pages/QuotePersonalDetails";
import { NavBar } from "./components/navbar/NavBar";
import { AdditionalDriversSelect } from "./components/additionalDrivers/AdditionalDriversSelect";
import { PersonalDetails } from "./components/quotePersonDetails/PersonalDetails";
import { VehicleDetails } from "./components/quoteVehicleDetails/VehicleDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<InsuranceHome />} />
          <Route path="/personal-details" element={<QuotePersonalDetails />}>
            <Route
              path="contact-information"
              element={
                <>
                  <PersonalDetails />
                </>
              }
            />
            <Route path="vehicle-details" element={<VehicleDetails />} />
            <Route
              path="additional-drivers"
              element={<AdditionalDriversSelect />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
