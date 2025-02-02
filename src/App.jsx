/* eslint-disable react-refresh/only-export-components */

import { Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
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
import Checkout from './cosmeticStoreComponents/Checkout'
import RelatedProducts from './cosmeticStoreComponents/RelatedProducts'
import Promotions from './cosmeticStoreComponents/Promotions'
import Purchase from './cosmeticStoreComponents/Purchase'
import product from '../src/cosmeticStoreComponents/images/CBDOIL.png';

export const ProductContext = createContext();

function App() {

  const products = [
        { id: 0, name: 'Product A', price: 60, status: 'New', proImg: product, quantity: 0 },
        { id: 1, name: 'Product B', price: 75, status: '', proImg: product, quantity: 0 },
        { id: 2, name: 'Product C', price: 30, status: 'New', proImg: product, quantity: 0 },
        { id: 3, name: 'Product D', price: 45, status: '', proImg: product, quantity: 0 },
      ];

  return (
    <ProductContext.Provider value={products}>
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
        <Route  path='/Detail/:id' element={
              <>
              <Detail/>
              </>
            }>
        </Route>
        <Route path='/Checkout' element={
          <>
          <Checkout/>
          <RelatedProducts/>
          </>
        }/>
        <Route path='/Promotions' element={
          <>
          <Promotions/>
          </>
        }/>
        <Route path='/Purchase' element={
          <>
          <Purchase/>
          </>
        }/>
      </Routes>
      <Footer/>
    </ProductContext.Provider>
  )
}

export default App
