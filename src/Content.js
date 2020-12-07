import React from 'react'
import CoffeeCard from './CoffeeCard'
import {Grid} from '@material-ui/core'
import CoffeList from './Constants'



const Content = ()  => {

    const getCoffeeCard = (coffeeObj) => {
        return (
            <Grid item xs = {12} sm = {6} md = {4}>
                <CoffeeCard {...coffeeObj}></CoffeeCard>
            </Grid>
        )
    }

    return (<div>
         <Grid container spacing = {4}>
           
         {CoffeList.map(coffeeObj => {
            return getCoffeeCard(coffeeObj);
         })}    
         
         </Grid>

    </div>
    )
}

export default Content