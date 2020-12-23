import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default class PlayQryRedirector extends React.Component {
    state = {
        id: []
    }

    componentDidMount() {
        this.setState({id: new URLSearchParams(this.props.location.search).get('id')})
    }

    render() {
        return (
            <Route>
                {(this.state.id === null) ? <Redirect to="/" /> : <Redirect to={`/play/${this.state.id}`} />}
            </Route>
        )
    }
}