import { Route, Routes } from "react-router-dom";
import { StudentCreationPage } from "./pages/StudentCreationPage";
import { StudentsListPage } from "./pages/StudentsListPage";

export function App() {
  return (
    <Routes>
      <Route path='/creation' element={<StudentCreationPage />} />
      <Route path='/' element={<StudentsListPage />} />
    </Routes>
  )
}