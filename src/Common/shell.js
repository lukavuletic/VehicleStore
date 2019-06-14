import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';

import VehicleModelList from '../VehicleModel/Pages/VehicleModelList';
import VehicleModelCreate from '../VehicleModel/Pages/VehicleModelCreate';
import VehicleModelEdit from '../VehicleModel/Pages/VehicleModelEdit';
import VehicleMakeList from '../VehicleMake/Pages/VehicleMakeList';
import VehicleMakeCreate from '../VehicleMake/Pages/VehicleMakeCreate';
import VehicleMakeEdit from '../VehicleMake/Pages/VehicleMakeEdit';
import { HomePage } from '../HomePage/Pages/HomePage';
import { NotFoundPage } from './notFoundPage';

// define components that will be loaded by accessing specific routes
const viewMap = {
    models: <VehicleModelList />,
    modelsCreate: <VehicleModelCreate />,
    modelsID: <VehicleModelEdit />,

    makes: <VehicleMakeList />,
    makesCreate: <VehicleMakeCreate />,
    makesID: <VehicleMakeEdit />,

    home: <HomePage />,
    
    notFound: <NotFoundPage />
};

export const Shell = inject('rootStore')(
    class extends React.Component {
        render() {
            // passed methods and variables from RootStore (need this to get params from routing)
            const { rootStore } = this.props;
            const { routerStore } = rootStore;

            //  pass defines routing data into RouterView
            return <RouterView routerStore={routerStore} viewMap={viewMap} />;
        }
    }
);