import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Welcome = lazy(() => import('./pages/Welcome'))

const App = () => {
  return (
    <Router>
        <Suspense /*fallback={<Loading />}*/>
          <Routes>
            <Route exact path='/'  element={<Welcome/>} />
            {/* <Route path='*' component={InValidSurvey} /> */}
          </Routes>
        </Suspense>
    </Router>
  )
}

export default App
