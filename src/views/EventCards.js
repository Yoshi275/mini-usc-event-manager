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
        var classes = {
            root: {
                minWidth: 275,
            },
            bullet: {
                display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)',
            },
            title: {
                fontSize: 14,
            },
            pos: {
                marginBottom: 12,
            },
        }

        return (
            <Container component="main" maxWidth="lg">
                <Button color="primary" variant="contained">
                    Add Event
                </Button>
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