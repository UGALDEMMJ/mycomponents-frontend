import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'
import Layouth from './layout/Layouth'

const App = () => {
  return (
    <BrowserRouter basename='/mycomponents-frontend'>
    
    <Routes>
      <Route path='/'>
        <Route index element={<Welcome/>}/>

        <Route element={<Layouth/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        </Route>

      </Route>

      <Route path='/admin'>

      </Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App