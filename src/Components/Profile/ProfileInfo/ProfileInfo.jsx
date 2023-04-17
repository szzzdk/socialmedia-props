import React from 'react'
import s from './ProfileInfo.module.css';
import landscape from '../../../img/landscape.jpg'
import profile from "../../../img/profile.jpg";


const ProfileInfo = (props) => {
    return (
        <div>
            <img src={landscape} alt="" style={{width: '100%', height: '350px'}}/>
            <div className={s.profile}>
                <img src={profile} alt="" style={{width: '10rem', height: '10rem'}}/>
                <div className={s.descriptionBlock}>
                    <span>Dmitry K.</span>
                    <span>Date of Birth: 2 january</span>
                    <span>City: Minsk</span>
                    <span>Education: BSU'11</span>
                    <span>Web Site: https://it-kamasutra.com</span>
                </div>
            </div>
        </div>


    );
}

export default ProfileInfo;