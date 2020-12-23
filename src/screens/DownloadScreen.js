import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../config';

export default class PlayScreen extends React.Component {
    
    state = {
        song: [],
        onesixzero: [],
        qOne: [],
        qTwo: []
    }

    oszHandler = this.oszHandler.bind(this)

    oszHandler() {
        this.setState({
            onesixzero: <div className="errres">
                <div className="mainerr">
                    <p className="errtxt">
                        Please wait while adding metadata into your song
                    </p>
                </div>
            </div>
        })
        axios.get(`${config.TAGWRITER_URL}/id3?name=${this.state.song.song}&cover_url=${this.state.song.image}&song_url=${this.state.song.other_qualities[1].url}&album=${this.state.song.album}&year=${this.state.song.year}&artist=${this.state.song.singers}&quality=medium`)
            .then(res => {
                var url = res.data.url;
                this.setState({
                    onesixzero: <div className="errres">
                        <div className="mainerr">
                            <p className="errtxt">
                                Your song is Ready
                        </p>
                            <a href={url} className="activityb errsc">Download</a>
                        </div>
                    </div>
                })
            })
            .catch(err => {
                this.setState({
                    onesixzero: <div className="errres">
                        <div className="mainerr">
                            <p className="errtxt">
                                Sorry there was a problem to write metadata into your song. Try again later!
                            </p>
                        </div>
                    </div>
                })
            })
    }

    componentDidMount() {
        axios.get(`${config.API_URL}/song?id=${this.props.match.params.id}`)
            .then(res => {
                var song = res.data;

                if (song.result === "false") {
                    document.title = `Error | Musicder`
                    this.setState({ song })
                } else {
                    document.title = `Download ${song.song} | Musicder`
                    this.setState({
                        song,
                        qOne: song.other_qualities[0].url,
                        qTwo: song.other_qualities[2].url
                    })
                }
            })
    }

    render() {
        if (this.state.song.result === "false") {
            return (
                <div className="errres">
                    <div className="mainerr">
                        <p className="errtxt">
                            Sorry Nothing Found Please Search
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
                    <h1 className="dldheading">
                        Download {this.state.song.song}
                    </h1>
                    <p className="dldquality">
                        Please select your preferred quality
                </p>
                    <div className="center">

                        <a href={this.state.qOne} className="dldactivityb">96 Kbps</a><br />
                        <a href={this.state.song.media_url} className="dldactivityb">128 Kbps</a><br />
                        <a href={this.state.qTwo} className="dldactivityb">320 Kbps</a><br />
                        <p onClick={this.oszHandler} className="dldactivityb">Download with<br />Metadata</p><br />

                    </div>

                    {this.state.onesixzero}

                    <div className="dldfooter">
                        <h1 className="playlogo">MUSICDER</h1>
                        <a className="atextdec" href={`https://github.com/cachecleanerjeet`}>
                            <p className="playparagone" >An Open Source Project by Tuhin</p>
                        </a>
                        <a href={`https://github.com/cachecleanerjeet/Musicder`}>
                            <img alt="Github" className="center" src="../img/github-black.svg" width="30" height="30" />
                        </a>
                    </div>
                </div>
            )
        }
    }
}