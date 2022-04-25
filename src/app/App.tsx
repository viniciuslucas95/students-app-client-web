import { Route, Routes } from "react-router-dom";
import { StudentsListPage } from "./pages/StudentsListPage";

export function App() {
  return (
    <Routes>
      <Route path='/' element={<StudentsListPage />} />
    </Routes>
  )
}