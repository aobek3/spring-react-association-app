import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListInformationsComponent from './components/ListInformationsComponent';
import CreateInformationComponent from './components/CreateInformationComponent';
import ViewInformationComponent from './components/ViewInformationComponent';
import ListNotiesComponent from './components/ListNotiesComponent';
import CreateNotiesComponenets from './components/CreateNotiesComponenets';
import ListHomeNewsComponent from './components/ListHomeNewsComponent';
import ListHomeNotiesComponenets from './components/ListHomeNotiesComponenets';
import LoginPanel from './components/LoginPanel';


function App() {
  return (
    <div>
    <Router>
    <HeaderComponent />
      <div className="container">
          <Switch> 
                  <Route path = "/" exact component = {ListHomeNewsComponent}></Route>
                  <Route path = "/noties" component = {ListHomeNotiesComponenets}></Route>
                  <Route path = "/news" component = {ListHomeNewsComponent}></Route>
                  <Route path = "/admin-news" component = {ListInformationsComponent}></Route>
                  <Route path = "/admin" component = {LoginPanel}></Route>
                  <Route path = "/admin-noties" component = {ListNotiesComponent}></Route>
                  <Route path = "/add-information/:id" component = {CreateInformationComponent}></Route>
                  <Route path = "/add-noties/:id" component = {CreateNotiesComponenets}></Route>
                   <Route path = "/view-information/:id" component = {ViewInformationComponent}></Route>

                  {/*<Route path = "/update-information/:id" component = {UpdateInformationComponent}></Route> */}
          </Switch>
      </div>
    <FooterComponent />
</Router>
</div>

  );
}

export default App;
