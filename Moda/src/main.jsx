import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import {ShopYourStyle,WomenItems,GirlsItems,SaleItems,Cart,Wishlist,About,AccountInformation,AddressBook,MyOrders} from './Components'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<Layout/>}>
         <Route path='' element={<ShopYourStyle />} />
         <Route path='/women' element={<WomenItems/>} />
         <Route path='/girls' element={<GirlsItems/>} />
         <Route path='/sale' element={<SaleItems/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/mycart' element={<Cart/>} />
         <Route path='/mywishlist' element={<Wishlist/>} />
         <Route path='/accountinfo' element={<AccountInformation/>} />
         <Route path='/addressbook' element={<AddressBook/>} />
         <Route path='/myorders' element={<MyOrders/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
