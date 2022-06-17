import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const Welcome = lazy(() => import('./pages/Welcome'))
const MainPage = lazy(() => import('./pages/MainPage'))

const App = () => {
  return (
    <Router>
        <Suspense /*fallback={<Loading />}*/>
          <Routes>
            <Route exact path='/'  element={<Welcome/>} />
            <Route exact path='/dashboard'  element={<MainPage/>} />
            {/* <Route path='*' component={InValidSurvey} /> */}
          </Routes>
        </Suspense>
    </Router>
  )
}

export default App
