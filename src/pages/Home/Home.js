import React from 'react';
import PageContent from '../../components/PageContent';
import { homePage } from './Data';
import { useEffect } from 'react';
import TextField from '../../components/Text/TextField';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PageContent {...homePage} />
            <TextField />
        </>
    );
}

export default Home;
