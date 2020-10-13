import React, { Component } from 'react';
import { Box, Button, Container, Card, CardContent, CardActions, Typography, Grid, GridList, GridListTile } from '@material-ui/core'
import EventCard from '../components/EventCard';
// import firebase from '../firebase';

class EventCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tileData: []
        }
    }

    render() {
        return (
            <Container component="main" maxWidth="lg">
                <Grid container spacing = {3}>
                    <Grid item xs={4}>
                        <EventCard />
                    </Grid>
                    <Grid item xs={4}>
                        <EventCard />
                    </Grid>
                    <Grid item xs={4}>
                        <EventCard />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default EventCards;