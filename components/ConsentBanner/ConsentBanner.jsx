'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from './ConsentBanner.module.scss';

const ConsentBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = Cookies.get('cookieConsent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set('cookieConsent', 'accepted', { expires: 365 });
        setShowBanner(false);
    };

    const handleDecline = () => {
        Cookies.set('cookieConsent', 'declined', { expires: 365 });
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className={styles.banner}>
            <p className={styles.bannerText}>
                Ми використовуємо cookies для покращення вашого досвіду на сайті.
            </p>
            <div className={styles.bannerButtons}>
                <button onClick={handleAccept}>Прийняти</button>
                <button onClick={handleDecline}>Відхилити</button>
            </div>
        </div>
    );
};

export default ConsentBanner;
