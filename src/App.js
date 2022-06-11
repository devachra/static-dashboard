import "./App.css";
import Navbar from "./Components/MainNavbar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Page from "./Components/Pages/Page";
import Application from "./Components/Application/Application";
import UI from "./Components/Uicomponents/UI";
import Widgets from "./Components/Widgets/Widgets";
import Form from "./Components/Forms/Form";
import Chart from "./Components/Charts/Chart";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pages" element={<Page />} />
        <Route path="/application" element={<Application />} />
        <Route path="/ui" element={<UI />} />
        <Route path="/widget" element={<Widgets />} />
        <Route path="/form" element={<Form />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;
