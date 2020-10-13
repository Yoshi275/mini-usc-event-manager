import React, { Component } from 'react';
import { Button, Grid, Container, TextField, InputLabel, NativeSelect, Typography } from '@material-ui/core'
import firebase from '../firebase'

class CreateEvent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            eventTitle: '',
            eventDetails: '',
            location: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.addEventToFirestore = this.addEventToFirestore.bind(this)
    }

    handleChange(event) {
        // const location = event.target.name;
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    addEventToFirestore() {
        const db = firebase.firestore()
        db
            .collection('events')
            .add({
                eventTitle: this.state.eventTitle,
                eventDetails: this.state.eventDetails,
                location: this.state.location
            })
            .then((docRef) => {
                console.log("Event " + this.state.eventTitle, " created!")
                this.setState({
                    eventTitle: '',
                    eventDetails: '',
                    location: ''
                })
            })
            .catch((error) => {
                console.error("Error adding " + this.state.eventTitle + " event.")
            })
    }

    render() {
        return (
            <Container>
                <Grid container spacing={3} justify="center" style={{ minHeight: '100vh' }}>
                    <Grid item xs={12}>
                        <form noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="eventTitle"
                                label="Event Title"
                                name="eventTitle"
                                autoComplete="eventTitle"
                                autoFocus
                                onChange={this.handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="eventDetails"
                                label="Event Details"
                                type="eventDetails"
                                id="eventDetails"
                                autoComplete="eventDetails"
                                onChange={this.handleChange}
                            />
                            <InputLabel htmlFor="location-native-helper">
                                Location
                            </InputLabel>
                            <NativeSelect
                                name="location"
                                value={this.state.location}
                                onChange={this.handleChange}
                                fullWidth
                                inputProps={{
                                    name: 'location'
                                }}
                                m="2rem"
                            >
                                <option aria-label="None" value="" />
                                <option value='Theme Room Red'>Theme Room Red</option>
                                <option value='Theme Room Blue'>Theme Room Blue</option>
                                <option value='Chatterbox'>Chatterbox</option>
                            </NativeSelect>
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.addEventToFirestore}
                                mt={10}
                            >
                                Add Event
                            </Button>
                        </form>
                    </Grid>
                    <Typography variant="h5" component="h2">{this.state.eventTitle}</Typography>
                    <Typography variant="h5" component="h2">{this.state.eventDetails}</Typography>
                    <Typography variant="h5" component="h2">{this.state.location}</Typography>
                </Grid>
            </Container>
        )
    }
}

export default CreateEvent;