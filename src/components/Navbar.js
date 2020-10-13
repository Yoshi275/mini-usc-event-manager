import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core'
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        var allTabs = ['/events', '/create']

        return (
                <div>
                    <AppBar position="sticky">
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                    University Supper Club
                            </Typography>
                            <Tabs>
                                <Tab label="See Events" value="/events" component={Link} to={allTabs[0]} />
                                <Tab label="Create Events" value="/create" component={Link} to={allTabs[1]} />
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                </div>
        );
    }
}

export default NavBar;