import React from 'react'

function TopPlayers() {
    const contentData = [
        { name: 'Satou Sabally', wings: 'Fever vs. Wings', number: 45 },
        { name: 'Aliyah Boston', wings: 'Dominican Republic vs. Puerto Rico', number: 76 },
        { name: 'Satou Sabally', wings: 'Fever vs. Wings', number: 49 },
        { name: 'Aliyah Boston', wings: 'Dominican Republic vs. Puerto Rico', number: 19 },
        { name: 'Satou Sabally', wings: 'Fever vs. Wings', number: 45 },
        { name: 'Aliyah Boston', wings: 'Dominican Republic vs. Puerto Rico', number: 45 },
        { name: 'Satou Sabally', wings: 'Fever vs. Wings', number: 45 },
        { name: 'Aliyah Boston', wings: 'Dominican Republic vs. Puerto Rico', number: 45 },
        { name: 'Satou Sabally', wings: 'Fever vs. Wings', number: 45 },
        { name: 'Aliyah Boston', wings: 'Dominican Republic vs. Puerto Rico', number: 45 },
    ]
    return (
        <div>
            <div className='main_heading'>Top Players</div>
            <div className='data_head'>Players with the most points from the recent matches</div>
            <hr />
            {contentData.map((item, i) => {
                return <div className='d-flex justify-content-between mt-1' key={i}>
                    <div className='d-flex'>
                        <div><img src='https://api.sofascore.app/api/v1/player/1202906/image' alt='' width='48' height='48' style={{ border: '1px solid grey', borderRadius: '50%' }} /></div>
                        <div className='p-2'>
                            <div className='data_title'>{item.name}</div>
                            <div className='data_head'>{item.wings}</div>
                        </div>
                    </div>
                    <div>{item.number}</div>

                </div>
            })}
        </div>

    )
}

export default TopPlayers