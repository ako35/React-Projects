import React from 'react'
import Dersler from './components/01-component/Dersler'
import IsLogin from './components/02-component/IsLogin'
import Filtered from './components/03-component/Filtered'
import SelectedCourses from './components/04-component/SelectedCourses'

const App = () => {
  return (
    <div>
      <Dersler />
      <hr />
      <IsLogin />
      <hr />
      <Filtered />
      <hr />
      <SelectedCourses />
    </div>
  )
}

export default App