import { Route, Routes } from "react-router-dom";
import PhotoList from "./components/PhotoList";
import PhotoModal from "./components/PhotoModal";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PhotoList />}>
        <Route path=":id" element={<PhotoModal />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
