import React from 'react';
import { inject } from 'mobx-react';

const styles = {
    root: {
        padding: 16
    }
};

export const HomePage = inject('rootStore')(
    class extends React.Component {
        render() {
            return (
                <div style={styles.root}>
                    <h1>Home</h1>
                    <button value={'models'} onClick={this.handleClick}>Go to models</button>
                    <button value={'makes'} onClick={this.handleClick}>Go to makes</button>
                </div>
            );
        }

        handleClick = (e) => {
            const { rootStore } = this.props;
            const value = e.target.value;
            rootStore.routerStore.goTo(value);
        };
    }
);