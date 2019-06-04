import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';

import VehicleModelList from '../VehicleModel/Pages/VehicleModelList';
import VehicleModelCreate from '../VehicleModel/Pages/VehicleModelCreate';
import VehicleMakeList from '../VehicleMake/Pages/VehicleMakeList';
import VehicleMakeCreate from '../VehicleMake/Pages/VehicleMakeCreate';
import { HomePage } from '../HomePage/Pages/HomePage';
import { NotFoundPage } from './notFoundPage';

const viewMap = {
    models: <VehicleModelList />,
    modelsCreate: <VehicleModelCreate />,
    makes: <VehicleMakeList />,
    makesCreate: <VehicleMakeCreate />,
    home: <HomePage />,
    notFound: <NotFoundPage />
};

export const Shell = inject('rootStore')(
    class extends React.Component {
        render() {
            const { rootStore } = this.props;
            const { routerStore } = rootStore;

            return <RouterView routerStore={routerStore} viewMap={viewMap} />;
        }
    }
);