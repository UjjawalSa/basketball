import { Card, Grid } from '@mui/material'
import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CenterCard from './CenterCard';
import RightCard from './RightCard';
import TopLeague from './TopLeague';
import TopPlayers from './TopPlayers';

function Dashboard() {

    return (
        <div className='container'>
            <Grid container spacing={2}>

                <Grid xs={12} md={12} lg={3} >
                    <div className='p-2'>
                        <Card className='Card_border p-2'>
                            <Calendar />
                        </Card>
                    </div>

                    <div className='p-2'>
                        <Card className='Card_border p-5'>
                           Space for Add
                        </Card>
                    </div>

                    <div className='p-2'>
                        <Card className='Card_border p-5'>
                           <TopLeague/>
                        </Card>
                    </div>
                </Grid>
                <Grid xs={12} md={12} lg={5}>
                    <div className='p-2'>
                        <Card className='Card_border p-2'>
                           <CenterCard/>
                        </Card>
                    </div>
                </Grid>
                <Grid xs={12} md={12} lg={4}>
                    <div className='p-2'>
                        <Card className='Card_border p-2'>
                            <div className='p-2 main_heading'>Featured Match</div>
                            <div><RightCard/></div>

                        </Card>
                    </div>

                    <div className='p-2'>
                        <Card className='Card_border p-5'>
                           Space for Add
                        </Card>
                    </div>

                    <div className='p-2'>
                        <Card className='Card_border p-5'>
                          <TopPlayers/>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard