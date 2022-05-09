import React from "react";
import Books from "./Books";
import Footer from "./Footer";
import Navibar from "./Navibar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <React.Fragment>
      <header>
        <Navibar />
      </header>
      <main>
        <Books />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
