import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'

import "./App.css"
 
function App() {
 
  return (
    <BrowserRouter>
    <div className='front'> 
    <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/edit/:id' element={<UpdateUser />}></Route>
       
      </Routes>
    </div>
     
    </BrowserRouter>
  )
}
 
export default App