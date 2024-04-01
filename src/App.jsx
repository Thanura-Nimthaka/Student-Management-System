import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'
import Settings from "./components/Settings";
import Logout from "./components/Login";
import AddStudent from "./components/AddStudent";
import AddCourse from "./components/AddCourse";
import { Courses } from "./components/Courses";
import EditCourse from "./components/EditCourse";
import DeleteCourse from "./components/DeleteCourse";
import { Students } from "./components/Students";
import EditStudent from "./components/EditStudent";
import DeleteStudent from "./components/DeleteStudent"

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/' element={<Logout />}></Route>
        <Route path='/add-student' element={<AddStudent />}></Route>
        <Route path='/add-course' element={<AddCourse />}></Route>
        <Route path='/add-course' element={<AddCourse />}></Route>
        <Route path='/course' element={<Courses />}></Route>
        <Route path='/course/:id' element={<EditCourse />}></Route>
        <Route path='/delete/:id' element={<DeleteCourse />}></Route>
        <Route path='/student' element={<Students/>}></Route>
        <Route path='/student/:id' element={<EditStudent />}></Route>
        <Route path='/change/:id' element={<DeleteStudent />}></Route>



      </Routes>
    </BrowserRouter>

  )
}

export default App
