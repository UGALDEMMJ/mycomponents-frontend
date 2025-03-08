import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Welcome from './pages/Welcome'

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/'>
        <Route index element={<Welcome/>}/>
      </Route>

      <Route path='/admin'>

      </Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App