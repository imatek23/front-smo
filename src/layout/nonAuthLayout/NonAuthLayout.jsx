import React from "react";
import NonAuthLayoutHeader from "./NonAuthLayoutHeader";
import NonAuthLayoutFooter from "./NonAuthLayoutFooter";

const NonAuthLayout = ({ children }) => {
    return (
        <div className="bg-bg-color-auth">
            {/* Header */}
            <NonAuthLayoutHeader />

            {/* Main */}
            <main>
                <div>{children}</div>
            </main>

            {/* Footer */}
            <NonAuthLayoutFooter />
        </div>
    );
};

export default NonAuthLayout;
