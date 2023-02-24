import React from 'react';
import Container from 'react-bootstrap/Container';
import Intro from './Intro';
import NavigationBar from './NavigationBar';

const App = () => {
    return (
        <>
            <NavigationBar />
            <Container>
                <div className={'container'}>
                    <Intro text={'Hi! I am Upendra Kumar'} />
                </div>
            </Container>
        </>
    );
};

export default App
