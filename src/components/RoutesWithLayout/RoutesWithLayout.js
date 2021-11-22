import React from 'react';
import { Route } from 'react-router-dom';
const RoutesWithLayout = ({ layout: Layout, component: Component }) => {
    return (
        <Route
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )
            }
        />
    );
}

export default RoutesWithLayout;