import React from 'react';
import axios from 'axios';
import MediaSession from '@mebtte/react-media-session';
import { Link } from 'react-router-dom';
import config from '../config';


export default class PlayScreen extends React.Component {
    state = {
        song: [],
        lyrics: []
    }

    lyricsHandle = this.lyricsHandle.bind(this)

    lyricsHandle() {
        axios.get(`${config.API_URL}/lyrics?id=${this.props.match.params.id}`)
            .then(res => {
                var lyric = res.data.lyrics;
                this.setState({
                    lyrics: <div className="playlyricsdiv">
                        <p className="playlyricsheading">
                            Lyrics
                        </p>
                        <div className="playlyrics">{lyric.split('<br>').map((line) => (
                            <p className="playline">{line}</p>
                        ))}</div>
                    </div>
                })
            })
    }

    componentDidMount() {
        axios.get(`https://jiosaavn-api.vercel.app/song?id=${this.props.match.params.id}`)
            .then(res => {
                var song = res.data;
                this.setState({ song });
                if (song.result === "false") {
                    document.title = `Error | Musicder`
                } else {
                    document.title = `${song.song} by ${song.singers} | Musicder`
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
                    <div className="playhead">
                        <h1 className="playheadplay">Play</h1>
                        <Link to="../">
                            <img alt="Musicder" src="../img/t-logo.svg" className="playlogobtn" width="60" height="60" />
                        </Link>
                    </div>
                    <div className="playcontent"><br /><br />
                        <img src={this.state.song.image} alt={this.state.song.song} className="playimage" width="75%" />
                        <h1 className="playsongname">{this.state.song.song}</h1>
                        <p className="playsongby">{this.state.song.singers}</p>
                        <audio src={this.state.song.media_url} id="audiocontrols" className="playsong" controls />
                        {this.state.song.has_lyrics === "true" ? <div className="playlyricsinit">
                            <p onClick={this.lyricsHandle} className="playlyricsask">
                                Lyrics
                            </p>
                        </div> : <br />}
                        <br /><br />
                    </div>
                    <div>
                        {this.state.lyrics}
                    </div>
                    <div className="footer">
                        <h1 className="playlogo">MUSICDER</h1> <br />
                        <a className="atextdec" href={`https://github.com/cachecleanerjeet`}>
                            <p className="playparagone" >An Open Source Project by Tuhin</p>
                        </a><br />
                        <a href={`https://github.com/cachecleanerjeet/Musicder`}>
                            <img alt="Github" className="center" src="../img/github-black.svg" width="30" height="30" /><br />
                        </a>
                    </div>
                    <MediaSession
                        title={this.state.song.song}
                        artist={this.state.song.singers}
                        album={this.state.song.album}
                        artwork={[
                            {
                                src: `${this.state.song.image}`,
                                sizes: '500x500',
                                type: 'image/jpeg',
                            },
                        ]}>
                    </MediaSession>
                </div>
            )
        }
    }
}