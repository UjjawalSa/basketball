import React from 'react'

function RightCard() {
    return (
        <div>
            <div className='d-flex justify-content-between p-4 card_data_back'>
                <div>
                    <div><img src='https://api.sofascore.app/api/v1/team/6140/image' alt='' width='48' height='48' /></div>
                    <div className='right_card_data'>Slovenia</div>
                </div>

                <div className='p-3 right_card_data'>
                    <div>{new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear()}</div>
                    <div className='mt-1'>{new Date().getHours() + ':' + new Date().getMinutes()}</div>
                </div>

                <div>
                    <div><img src='https://api.sofascore.app/api/v1/team/6125/image' alt='' width='48' height='48' /></div>
                    <div className='right_card_data'>Australia</div>
                </div>
            </div>

            <div className='d-flex justify-content-between p-4 card_data_back mt-2'>
                <div>
                    <div><img src='https://api.sofascore.app/api/v1/team/6140/image' alt='' width='48' height='48' /></div>
                    <div className='right_card_data'>Slovenia</div>
                </div>

                <div className='p-3 right_card_data'>{new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear()}</div>

                <div>
                    <div><img src='https://api.sofascore.app/api/v1/team/6125/image' alt='' width='48' height='48' /></div>
                    <div className='right_card_data'>Australia</div>
                </div>
            </div>
        </div>
    )
}

export default RightCard