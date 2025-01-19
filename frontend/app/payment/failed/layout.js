import React from 'react';
import styles from './page.module.scss';

const FailedLayout = ({ children }) => {
    return (
        <div className={styles.page}>
            <header>
            </header>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default FailedLayout;