import React, {Component} from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Test from "./Test";
import NotFound from "./NotFound";
import {Container} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Sidebar from "./Sidebar";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <AppBar position="static" style={{backgroundColor: '#FFE9D2'}}>
                    <Toolbar>
                        <IconButton edge="start" color="primary" aria-label="menu">
                            <Sidebar/>
                        </IconButton>
                        <Typography variant="h6" color={"textPrimary"}>
                            Test
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="content">
                    <Container maxWidth={"xl"}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/test" component={Test}/>
                        <Route path="/404" component={NotFound}/>
                    </Container>
                </div>
            </HashRouter>
        );
    }
}

export default Main;