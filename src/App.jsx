import "./App.css";
import { Navbar } from "./components";
import { AllRoutes } from "./routes";
function App() {
  return (
    <main className="App w-full min-h-screen">
      <Navbar />
      <AllRoutes />
    </main>
  );
}

export default App;
