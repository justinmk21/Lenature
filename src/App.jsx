
import { Route, Routes } from 'react-router'
import './App.css'
import EventPromo from './cosmeticStoreComponents/EventPromo'
import Footer from './cosmeticStoreComponents/FooterSection'
import FrontPage from './cosmeticStoreComponents/FrontPage'
import HeaderSection from './cosmeticStoreComponents/HeaderSection'
import InstagramPage from './cosmeticStoreComponents/InstagramPage'
import OurStory from './cosmeticStoreComponents/OurStory'
import PrescriptionPage from './cosmeticStoreComponents/Prescription'
import PreviewProducts from './cosmeticStoreComponents/PreviewProducts'
import Shop from './cosmeticStoreComponents/Shop'
import Detail from './cosmeticStoreComponents/Detail'


function App() {

  return (
    <>
    <HeaderSection/>
    <Routes>
      <Route path='/Lenature' element={
        <>
        <FrontPage/>
        <PreviewProducts/>
        <EventPromo/>
        <OurStory/>
        <PrescriptionPage/>
        <InstagramPage/>
        </>
        }>
      </Route>
      <Route path='/Shop' element={
        <>
        <Shop/>
        </>
      }>
      </Route>
      <Route  path='/Detail' element={
            <>
            <Detail/>
            </>
          }>
      </Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
