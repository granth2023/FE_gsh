import React from 'react';

interface LandingPageProps { 
    data: any;
}

const LandingPage: React.FC<LandingPageProps> = ({ data }) => { 
    return (
        <div>
            <h1>{data.pageTitle}</h1>
            <p>{data.welcomeMessage}</p>
        </div>
    )
};

export default LandingPage;