import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../config';


export default class SearchScreen extends React.Component {
    state = {
        songs: []
    }

    componentDidMount() {
        axios.get(`${config.API_URL}/search?query=${new URLSearchParams(this.props.location.search).get('query').replace(/ /gi,"+")}`)
            .then(res => {
                var songs = res.data;
                document.title = `${new URLSearchParams(this.props.location.search).get('query')} - Search | Musicder`
                this.setState({ songs });
            })
    }
    
    render() {
        if (this.state.songs.result === "false") {
            return (
                <div className="errres">
                    <div className="mainerr">
                        <p className="errtxt">
                            Sorry Nothing Found Please Search Again
                       </p>
                        <Link to={'../'}>
                            <p className="activityb errsc">Search</p>
                        </Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    { this.state.songs.map((songs) => (
                        <div key={songs.id} className={songs.position === 1 ? 'backwhite' : songs.position === 3 ? "backwhite" : songs.position === 5 ? "backwhite" : 'backblack'}>
                            <img src={songs.image} alt={songs.title} className="songimage" width="200" height="200"></img>

                            <h1 className="headingtwo center">
                                {songs.title}
                            </h1><br />
                            <p className="parag center">
                                {songs.more_info.singers}<br /><br />Album : {songs.album}
                            </p>
                            <p className="center">
                                <Link to={`../download/${songs.id}`}>
                                    <span className="activityb">Download</span>
                                </Link>
                                <span>&nbsp;&nbsp;</span>
                                <Link to={`../play/${songs.id}`}>
                                    <span className="activityb">Play</span>
                                </Link>
                            </p>
                        </div>
                    ))}

                    <div className="footerdiv">
                        <img alt="Musicder" className="center" src="./img/logo.png" width="230" height="92" />
                        <a className="atextdec" href={`https://github.com/cachecleanerjeet`}>
                            <p className="paragone" >An Open Source Project by Tuhin</p>
                        </a><br />
                        <a href={`https://github.com/cachecleanerjeet/Musicder`}>
                            <img alt="Github" className="center" src="./img/github-white.svg" width="30" height="30" /><br />
                        </a>
                    </div>
                </div>
            )
        }
    }
}