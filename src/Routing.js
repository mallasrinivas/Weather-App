import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CityComponent from "./Components/CityComponent";

function Routing() {
  return (
    <Container maxWidth="sm">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CityComponent />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default Routing;
