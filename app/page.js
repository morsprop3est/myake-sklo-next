import Image from "next/image";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Calculator from '@/components/Calculator/Calculator';
import Main from '@/components/Main/Main';
import WhyUs from '@/components/WhyUs/WhyUs';
import WhatWeOffer from '@/components/WhatWeOffer/WhatWeOffer';
import FastBuy from '@/components/FastBuy/FastBuy';
import ContactUs from '@/components/ContactUs/ContactUs';


import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
        <Header/>
        <Main/>
        <WhyUs/>
        <WhatWeOffer/>
        <FastBuy/>
        <ContactUs/>
    </div>
  );
}
