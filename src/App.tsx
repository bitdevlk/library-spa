import React from 'react';
import './App.scss';
import Books from './components/Book/Books';
import Authors from './components/Author/Authors';
import { Col, Container, Row } from "react-bootstrap";

function App() {
    return (
        <Row>
            <div className='col-12 text-center mt-3 mt-2'>
                <h1 className='hero-title display'> My Library </h1>
            </div>
            <div className='col-12 border-0 px-0 my-2'>
                <img src="library.webp" alt="library" className='img-fluid border-0' />
            </div>
            <div className='col-12 mt-2 text-end'>
                <p>
                    <span className='credit-text mx-0 mx-md-5'> Photo by
                        <a target="_blank" rel="noreferrer"
                            href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Anna Hunko </a>
                        on
                        <a target="_blank" rel="noreferrer"
                            href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Unsplash </a>
                    </span>
                </p>
            </div>
            <Container>
                <Row>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                        <Books />
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
                        <Authors />
                    </Col>
                </Row>
            </Container>
        </Row>
    );
}

export default App;
