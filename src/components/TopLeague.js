import React from 'react'

function TopLeague() {
    const contentData = ['NBA', 'Euroleague', 'AdmiralBet ABA League', 'Liga ACB', 'NBA', 'Euroleague', 'AdmiralBet ABA League', 'Liga ACB']
    return (
        <div>
            <div className='p-2 main_heading'>Top Leagues</div>
            {contentData.map((item, i) => {
               return <div className='d-flex' key={i}>
                    <span><img src='https://api.sofascore.app/api/v1/team/6140/image' alt='' width='48' height='48' /></span>
                    <span className='right_card_data p-3'>{item}</span>
                </div>
            })}

        </div>

    )
}

export default TopLeague