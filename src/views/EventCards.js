import React, { Component } from 'react';
import { Box, Button, Container, Card, CardContent, CardActions, Typography, Grid, GridList, GridListTile } from '@material-ui/core'
import EventCard from '../components/EventCard';
import firebase from '../firebase';

class EventCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tileData: [
                {
                    eventTitle: 'Test Event',
                    eventDetails: 'Details of fake event. Details of fake event. Details of fake event. Details of fake event. Details of fake event.',
                    location: 'Chatterbox',
                },
                {
                    eventTitle: 'Test Event',
                    eventDetails: 'Details of fake event. Details of fake event. Details of fake event. Details of fake event. Details of fake event.',
                    location: 'Chatterbox',
                },
                {
                    eventTitle: 'Test Event',
                    eventDetails: 'Details of fake event. Details of fake event. Details of fake event. Details of fake event. Details of fake event.',
                    location: 'Chatterbox',
                }
            ]
        }
        this.getEventsFromFirestore();
    }

    getEventsFromFirestore() {
        const db = firebase.firestore()
        db
            .collection('events')
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => doc.data());
                var i;
                for (i = 0; i < data.length; i++) {
                    this.setState({
                        tileData: [...this.state.tileData, data[i]]
                    })
                }
            })
    }

    render() {
        return (
            <Container component="main" maxWidth="lg">
                <Grid container spacing={3}>
                    <GridList cellHeight={300} cols={3}>
                        {this.state.tileData.map((tile) => (
                            <GridListTile key={tile.eventTitle} cols={1}>
                                <EventCard
                                    eventTitle={tile.eventTitle}
                                    eventDetails={tile.eventDetails}
                                    location={tile.location}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
            </Container>
        );
    }
}

export default EventCards;