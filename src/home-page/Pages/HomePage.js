import React from 'react';
import { inject } from 'mobx-react';

export const HomePage = inject('rootStore')(
    class extends React.Component {
        render() {
            return (
                <React.Fragment>
                    <h1>Home</h1>
                    <button value={'models'} onClick={this.props.rootStore.goToRoute}>Go to models</button>
                    <button value={'makes'} onClick={this.props.rootStore.goToRoute}>Go to makes</button>
                </React.Fragment>
            );
        }        
    }
);