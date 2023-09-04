import { Divider, Grid } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <div className='footer '>
            <div className='container p-5'>
                <Grid container spacing={2}>

                    <Grid xs={12} md={12} lg={6} >
                        <div>
                            <div className='footer_head'>About</div>
                            <div className='footer_content mt-2'>Sofascore livescore provides you with NBA league live scores, results, tables, statistics, fixtures, standings and previous results by quarters, halftime or final result. With Sofascore livescore for basketball at Sofascore.com you can follow live results by quarters, tables, statistics, fixtures and many more in real time from more than 70 basket leagues like NCAA, ABA League, Baltic league, Euroleague, national basketball leagues. On Sofascore livescore you can also follow live scores, tables and fixtures of big international basket tournaments like FIBA Basketball World Cup, Euro Cup and EuroBasket. Live results for basketball on Sofascore.com livescore are updated automatically, so you don't have to refresh it to see all the results. With adding basket games you want to follow in favorites, you can follow them much easier and there is also an option for live stream. Don't miss live results from Italy, Greece, Turkey, Russia, or other European basketball leagues anymore.</div>
                        </div>
                    </Grid>
                    <Grid xs={12} md={12} lg={6}>
                        <div className='footer_head'>Top live scores and streaming</div>
                        <div className='footer_content mt-2'>Arsenal - Manchester United</div>
                        <div className='footer_content mt-2'>Arsenal - Manchester United</div>
                        <div className='footer_content mt-2'>Arsenal - Manchester United</div>
                        <div className='footer_content mt-2'>Arsenal - Manchester United</div>
                        <div className='footer_content mt-2'>Arsenal - Manchester United</div>
                        <div className='footer_content mt-2'>Arsenal - Manchester United</div>
                    </Grid>
                </Grid>
            </div>
            <Divider/>

            <div className='text-center p-3 text-white'>
                   @ {new Date().getFullYear()}
            </div>
        </div>
    )
}

export default Footer