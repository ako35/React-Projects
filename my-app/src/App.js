import React from 'react'
import Dersler from './components/01-component/Dersler'
import IsLogin from './components/02-component/IsLogin'
import Filtered from './components/03-component/Filtered'
import SelectedCourses from './components/04-component/SelectedCourses'
import Tablo from './components/05-component/Tablo'
import Product from './components/06-component/Product'
import Ulkeler from './components/07-component/Ulkeler'
import Kisiler from './components/08-component/Kisiler'


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
      <hr />
      <Tablo />
      <hr />
      <Product />
      <hr />
      <Ulkeler />
      <hr />
      <Kisiler />
      <hr />
    </div>
  )
}

export default App