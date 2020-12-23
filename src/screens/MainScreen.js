import React from 'react'
import { Link } from 'react-router-dom';

export default class MainScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchQuery: '' };
    }

    myChangeHandler = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    componentDidMount() {
        document.title = "Musicder | Listen or Download Music For Free"
    }

    render() {
        return (
            <div>
                <h1 className="heading">Hello There 👋</h1>
                <h2 className="headingbelow">Type what do you want to Listen & Press Search</h2>
                <div className="formdivt">
                    <form onSubmit={this.mySubmitHandler}>
                        <div className="inner-form">
                            <div className="input-field first-wrap">
                                <div className="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search for Songs, Albums" onChange={this.myChangeHandler} />
                            </div>
                            <div className="input-field second-wrap">
                                <Link to={`search?query=${this.state.searchQuery}`}>
                                    <button className="btn-search" type="button">SEARCH</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
