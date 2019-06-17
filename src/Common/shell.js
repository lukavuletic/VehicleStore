import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';

import VehicleModelList from '../vehicle-model/pages/VehicleModelList';
import VehicleModelCreate from '../vehicle-model/pages/VehicleModelCreate';
import VehicleModelEdit from '../vehicle-model/pages/VehicleModelEdit';
import VehicleMakeList from '../vehicle-make/pages/VehicleMakeList';
import VehicleMakeCreate from '../vehicle-make/pages/VehicleMakeCreate';
import VehicleMakeEdit from '../vehicle-make/pages/VehicleMakeEdit';
import { HomePage } from '../home-page/Pages/HomePage';
import { NotFoundPage } from './NotFoundPage';

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