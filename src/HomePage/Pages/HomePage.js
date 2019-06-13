import React from 'react';
import { inject } from 'mobx-react';

export const HomePage = inject('rootStore')(
    class extends React.Component {
        handleClick = (e) => {
            const { rootStore } = this.props;
            const value = e.target.value;
            rootStore.routerStore.goTo(value);
        };

        render() {
            return (
                <React.Fragment>
                    <h1>Home</h1>
                    <button value={'models'} onClick={this.handleClick}>Go to models</button>
                    <button value={'makes'} onClick={this.handleClick}>Go to makes</button>
                </React.Fragment>
            );
        }        
    }
);