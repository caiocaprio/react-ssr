import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h1>{this.props.title}</h1>
                </div>
            </Fragment>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired
};

export default App;
