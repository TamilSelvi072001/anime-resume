import React from 'react';
import { Paper, Button } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

const LandingPage=()=>{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

    return (
        <Carousel  navButtonsAlwaysVisible={true} autoPlay={false}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
export default LandingPage;
