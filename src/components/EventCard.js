import React, { Component } from 'react';
import { Button, Box, Card, CardContent, Typography, CardActions } from '@material-ui/core';

class EventCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card className="eventCard" variant="outlined" style={{height: 280}}>
                <CardContent>
                    <Typography className="eventTitle" variant="h5" component="h2">
                        {this.props.eventTitle}
                    </Typography>
                    <Typography className="location" component="h4">
                        {this.props.location}
                    </Typography>
                    <Typography variant="eventDetails" component="p">
                        {this.props.eventDetails} 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box alignItems="center" display="flex">
                    <Button color="primary" variant="contained" size="small">Learn More</Button>
                    </Box>
                </CardActions>
            </Card>
        );
    }
}

export default EventCard;