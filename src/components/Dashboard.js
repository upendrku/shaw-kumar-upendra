import React from 'react';
import Container from 'react-bootstrap/Container';
import Intro from './Intro';
import NavigationBar from './NavigationBar';

const App = () => {
    return (
        <>
            <NavigationBar />
            <Container className='pagePadding'>
                <div className='d-flex'>
                    <Intro />
                </div>
            </Container>
        </>
    );
};

export default App
