import React from 'react'
import '../topbar/topbar.css'
import { BsPlusLg } from 'react-icons/bs';
import { RiBookReadLine } from 'react-icons/ri';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { IoCopyOutline } from 'react-icons/io5';

import { BsSearch } from 'react-icons/bs';



const topbar = () => {
    return (
        <>
            <div className='nav d-flex justify-content-between '>
                <div className='left-icons mr-auto'>
                    <div className='red'>
                        <div className='circle'></div>
                    </div>
                    <div className='orange'>
                        <div className='circle'></div>

                    </div>
                    <div className='green'>
                        <div className='circle'></div>

                    </div>
                    <div className='screen'>
                        <div className='bookRead'>
                            <RiBookReadLine />
                        </div>
                    </div>
                    <div className='arrow'>
                        <div className='left-arrow'>
                            <MdOutlineArrowBackIos />
                        </div>
                        <div className='right-arrow'>
                            <MdOutlineArrowForwardIos />
                        </div>
                    </div>
                </div>
                <div className='center-icons '>
                    <div className=''>
                        <div className='search'>
                            <BsSearch />
                        </div>
                        <input type="text" placeholder='Search or enter website name' className='form-control input-field-top' value="Search or enter website name" />
                    </div>
                </div>
                {/* <div className=''> */}
                <div className='right-icons ml-auto'>
                    <div className='plus'>
                    <BsPlusLg />
                    </div>
                    <div className='copy'>
                    <IoCopyOutline />
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default topbar