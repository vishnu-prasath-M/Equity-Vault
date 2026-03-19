import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PageLoader } from "./components/PageLoader";

createRoot(document.getElementById("root")!).render(
  <PageLoader>
    <App />
  </PageLoader>
);
