import { RouterProvider } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import { router } from "./routes";

function App() {
  return (
    <div className="layout">
      <SideBar />

      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
