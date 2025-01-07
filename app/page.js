import ConsentBanner from '../components/ConsentBanner/ConsentBanner';
import Cart from '@/components/Cart/Cart';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Calculator from '@/components/Calculator/Calculator';
import Main from '@/components/Main/Main';
import WhyUs from '@/components/WhyUs/WhyUs';
import WhatWeOffer from '@/components/WhatWeOffer/WhatWeOffer';
import FastBuy from '@/components/FastBuy/FastBuy';
import ContactUs from '@/components/ContactUs/ContactUs';
import Reviews from '@/components/Reviews/Reviews';

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
        <ConsentBanner/>
        <Header/>
        <Main/>
        <WhyUs/>
        <Cart/>
        <WhatWeOffer/>
        <Calculator/>
        <FastBuy/>
        <ContactUs/>
        <Reviews/>
        <Footer/>
    </div>
  );
}
