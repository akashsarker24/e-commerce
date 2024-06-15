import React from 'react'
import Banner from '../../components/banner/Banner'
import LinksContainer from '../../components/link/Link'
import Newproducts from '../../components/newproducts/newproducts'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Demo from '../demo/demo';

export default function Home() {
  return (
    <div>
 <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

    <Banner></Banner>
  <LinksContainer></LinksContainer>
  <Newproducts></Newproducts>
  {/* <Demo/> */}
    </div>
  )
}
