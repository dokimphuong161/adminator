import React from 'react';
import { Suspense } from 'react';
import Loader from '../Loader';
const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<Loader />}>
            <Component />
        </Suspense>
    );

export default Loadable;
