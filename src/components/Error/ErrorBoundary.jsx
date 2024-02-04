import { Component } from "react";

import "./ErrorBoundary.css";
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    return (
      <div className="error_Boundary">
        <section className="error_container">
          <h1 className="titleError_Boundary">Error en lado del cliente</h1>
          <br />
          <p></p>
        </section>
      </div>
    );
  }
}
