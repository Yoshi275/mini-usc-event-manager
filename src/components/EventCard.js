import React, { Component } from 'react';
import { Button, Box, Card, CardContent, Typography, CardActions } from '@material-ui/core'

class EventCard extends Component {
    render() {
        return (
            <Card className="eventCard" variant="outlined" style={{ height: 280 }}>
                <CardContent>
                    <Typography className="eventTitle" variant="h5" component="h2">
                        Event Title
                    </Typography>
                    <Typography className="location" component="h4">
                        Location
                    </Typography>
                    <Typography variant="eventDetails" component="p">
                        Details of fake event
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box alignItems="center" display="flex">
                        <Button color="primary" variant="contained" size="small">Learn More</Button>
                    </Box>
                </CardActions>
            </Card>
        )
    }
}

export default EventCard;