import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Car from './Car'
import { MDBContainer } from 'mdbreact'
import {Card, CardActionArea, CardContent, CardMedia, Typography, Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
const myFirstElement = <div><h1>Hello React!2</h1><br></br>


const styles = theme => ({
  root: {
    maxWidth: 345, justify: 'center',
    alignItems: 'center',
  },
  media: {
    height: 140,
    justify: 'center',
    alignItems: 'center',
  },
   paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    justify: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
});
class Garage extends Component {
  render(){
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    }
    const carname = "Ford"
    const {classes} = this.props 
    return (
      <Grid container spacing={3} direction="row" 
      >
        <Grid item xs  className={classes.paper}>
        
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              
        </Grid>
        <Grid item xs >
          <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={process.env.PUBLIC_URL+"/logo.png"}
                title="Contemplative Reptile"
              />
              
            </Card>
          </Grid>
           
        </Grid>
  

      
    )
  }
}

const Test = withStyles(styles)(Garage)

ReactDOM.render(
  <Test/>,
  document.getElementById('root')
);
