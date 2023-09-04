import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import PushPin from '@mui/icons-material/PushPin';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Divider } from '@mui/material';
import { ArrayData } from '../layout/DataArr';

function CenterCard() {
    const [dataArr, setdataArr] = useState([...ArrayData])
    const [allfilter, setallfilter] = useState(false)
    const [old, setold] = useState(false)

    const HandleFilter = (e, filter) => {
        console.log(e.target.checked);
        let data = undefined;

        if (filter === 'all') {
            data = e.target.checked ? dataArr.filter(item => item.stauts === 'LIVE') : ArrayData;
            setdataArr([...data])
            setallfilter(e.target.checked)
        } else {
            data = e.target.checked ? dataArr.filter(item => item.old) : ArrayData;
            setdataArr([...data])
            setold(e.target.checked)
        }

        console.log("data", data);


    }
    return (
        <div>
            <div className='p-2 mb-2 d-flex justify-content-between'>
                <span>ALL <Switch checked={allfilter} onChange={(e) => HandleFilter(e, 'all')} /> <span className='text-danger'>LIVE ({dataArr.filter(item => item.stauts === 'LIVE').length})</span></span>
                <span>Show odds<Switch checked={old} onChange={(e) => HandleFilter(e, 'old')} /></span>
            </div>


            <div className='center_card_main_content'>
                <div className='p-2 main_heading'>Pinned Leagues</div>
                {dataArr.map((d, index) => {
                    return <div key={index} className='hover_handle'>
                        <div className='p-2 mb-2 d-flex justify-content-between' >
                            <span className='d-flex'>
                                <div><img src='https://api.sofascore.app/api/v1/unique-tournament/441/image' width='24' height='24' alt='' /></div>
                                <div className='content_side'>
                                    <div className='data_head'>International</div>
                                    <div className='right_card_data'>FIBA World Cup, 2nd round, Group I</div>
                                </div>
                            </span>
                            <span className='d-flex'>
                                <div>Box Score | </div>
                                <div><PushPin /></div>
                            </span>
                        </div>

                        <div className='p-2 mb-2 d-flex justify-content-between link_color'>
                            <span className='d-flex'>
                                <div className='p-3 text-center'>
                                    <div className='data_head'>{new Date().getHours() + ':' + new Date().getMinutes()}  </div>
                                    <div className='data_head'>FT  </div>
                                </div>
                                <div className='content_side p-2'>
                                    <div className='d-flex'><img src='https://api.sofascore.app/api/v1/team/6140/image' width='18' height='18' alt='' /> <span className='data_head p-1'>Australia</span></div>
                                    <div className='d-flex'><img src='https://api.sofascore.app/api/v1/team/6140/image' width='18' height='18' alt='' /> <span className='data_head p-1'>Australia</span></div>
                                </div>
                            </span>
                            <span className='d-flex p-3'>
                                <div className='data_title'>
                                    <div> 32 65 43 </div>
                                    <div> 08 88 77  </div>
                                </div>
                                <div className='border_left'><NotificationsActiveIcon /></div>
                            </span>
                        </div>

                        <div className='d-flex justify-content-between link_color'>
                            <span className='d-flex'>
                                <div className='p-3 text-center'>
                                    <div className='data_head'>{new Date().getHours() + ':' + new Date().getMinutes()}  </div>
                                    <div className='data_head'>FT  </div>
                                </div>
                                <div className='content_side p-2'>
                                    <div className='d-flex'><img src='https://api.sofascore.app/api/v1/team/6140/image' width='18' height='18' alt='' /> <span className='data_head p-1'>Australia</span></div>
                                    <div className='d-flex'><img src='https://api.sofascore.app/api/v1/team/6140/image' width='18' height='18' alt='' /> <span className='data_head p-1'>Australia</span></div>
                                </div>
                            </span>
                            <span className='d-flex p-3'>
                                <div className='data_title'>
                                    <div> 32 65 43 </div>
                                    <div> 08 88 77  </div>
                                </div>
                                <div className='border_left'><NotificationsActiveIcon /></div>
                            </span>
                        </div>

                        <Divider />
                    </div>
                })}
            </div>

        </div>
    )
}

export default CenterCard