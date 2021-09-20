import React from 'react';
import { Image } from 'react-bootstrap';
import spinner from '../../../src/img/spinner.svg';

const LoadingSpinner = () => {
    return (
        <section className="d-flex justify-content-center align-items-center">
            <Image src={spinner} />
        </section>
    );
};

export default LoadingSpinner;