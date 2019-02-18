import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { actions } from './stores/actions/index';

export default connect(
    state => ({ state: state.index }),
    actions,
)(class App extends Component {
    render() {
        const { count } = this.props.state;
        const { add, minus, asyncAdd, asyncMinus } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        count = {count}
                    </p>
                    <button onClick={e => add(1)}>加一</button>
                    <button onClick={e => minus(1)}>减一</button>
                    <button onClick={e => asyncAdd(1)}>异步加一</button>
                    <button onClick={e => asyncMinus(1)}>异步减一</button>
                </header>
            </div>
        );
    }
});


