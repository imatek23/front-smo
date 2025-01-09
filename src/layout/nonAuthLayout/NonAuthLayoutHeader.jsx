import React from 'react';
import logoImfeeder from '../../assets/images/logo-light.png';

const NonAuthLayoutHeader = () => {
    return (
        <header className="auth-page-wrapper pt-5 relative z-0">
        <div className="auth-one-bg-position auth-one-bg relative flex items-center justify-center h-96">
            <img
                src={logoImfeeder}
                alt="logo"
                className="absolute z-10 w-32 md:w-40 lg:w-48"
            />
            <div className="bg-overlay absolute inset-0"></div>
            <div className="shape absolute bottom-0 w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 1440 120"
                >
                    <path
                        d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"
                        fill="#1a1d21"
                    ></path>
                </svg>
            </div>
        </div>
    </header>
    
    );
};

export default NonAuthLayoutHeader;
