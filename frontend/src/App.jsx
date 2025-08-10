import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App;