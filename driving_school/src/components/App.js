import React from 'react'; 
import {BrowserRouter, Route, Router} from 'react-router-dom';
import About_Us from '../components/About Us';
import Announcement from '../components/Announcement';
import Appointment from '../components/Appointment';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Home from '../components/Home';
import Package from '../components/Packages';
import "../CSS Styles/Header.css";
import Footer from '../components/Footer';
import history from '../histoy';

const App = () => {

    return(
            <Router history={history}>
            <React.Fragment>
                <Header/>

                    <Route path="/" exact component={Home}/>
                    <Route path= "/book-apnt" component={Appointment}/>
                    <Route path= "/ancmt" component={Announcement}/>
                    <Route path= "/pkgs" component={Package}/>
                    <Route path= "/as" component={About_Us}/>
                    <Route path= "/cs"  component={Contact}/>

                <Footer />
            </React.Fragment>
            </Router>
    )
}

export default App;