import * as React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Button } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from "@mui/material/Link";

import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";


export default function IconBreadcrumbs() {
  return (
    <BrowserRouter>
      
        <div role="presentation">
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor:'whitesmoke'
            }}
          >
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color='4dabf5'
              component={Button}
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Início
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color='4dabf5'
              component={Button}
              href="/contact"
            >
              <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Contácto
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color='4dabf5'
            ></Typography>
          </Breadcrumbs>
        </div>
    
        <Routes>
            <Route
            path="/"
            element={<HomePage/>}
            />
            <Route path="/contact" element={<ContactPage/>} />
        </Routes>
    </BrowserRouter>
  );
}
