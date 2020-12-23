import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import MainScreen from './screens/MainScreen';
import SearchScreen from './screens/SearchScreen';
import PlayScreen from './screens/PlayScreen';
import DownloadScreen from './screens/DownloadScreen';
import DldQryRedirector from './screens/DldQryRedirector';
import PlayQryRedirector from './screens/PlayQryRedirector';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={MainScreen} exact></Route>
      <Route path="/search" component={SearchScreen} exact></Route>
      <Route path="/play/:id" component={PlayScreen}></Route>
      <Route path="/download/:id" component={DownloadScreen}></Route>
      <Route path="/download" component={DldQryRedirector} exact></Route>
      <Route path="/play" component={PlayQryRedirector} exact></Route>
    </BrowserRouter>
  );
}

export default App;
