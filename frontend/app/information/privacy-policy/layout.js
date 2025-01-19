import React from 'react';

const PrivacyPolicyLayout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Privacy Policy</h1>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default PrivacyPolicyLayout;