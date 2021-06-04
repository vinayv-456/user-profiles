import React from 'react'
import './Profile.css'
import Map from '../../assets/pictures/map.png'
import { useEffect } from 'react'
import { useState } from 'react'

const Profile = ({user}) => {

    return <div style={{display:'flex'}}>
        {console.log(user)}
        <div style={{display:'flex', flexDirection:'column', paddingTop:'30px', minWidth:'35%'}}>
            <div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <img className="profile-pic" src={user.profilepicture}></img>
                </div>
                <div className="name">
                    {user.name}
                </div>
                {/* <div style={{display:'flex'}}>
                    <div className="flex details-headings">
                        <div>Username : </div>
                        <div>e-mail : </div>
                        <div>Phone : </div>
                        <div>Website : </div>
                    </div>
                    <div className="details-values">
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                        <div>{user.website}</div>
                    </div>
                </div>*/}
                
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{display:'flex'}}>
                        <div className="flex details-headings">Username : </div>
                        <div className="details-values">{user.username}</div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="flex details-headings">e-mail : </div>
                        <div className="details-values">{user.email}</div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="flex details-headings">Phone : </div>
                        <div className="details-values">{user.phone}</div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="flex details-headings">Website : </div>
                        <div className="details-values">{user.website}</div>
                    </div>
                </div>
                <div className="line"></div> 
            </div>
            <div>
            <div style={{color:'#aeb8b4', textAlign:'center'}}>
                Company
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex'}}>
                    <div className="flex details-headings">Name : </div>
                    <div className="details-values">{user.company.name}</div>
                </div>
                <div style={{display:'flex'}}>
                    <div className="flex details-headings">catchphrase : </div>
                    <div className="details-values">{user.company.catchPhrase}</div>
                </div>
                <div style={{display:'flex'}}>
                    <div className="flex details-headings">bs : </div>
                    <div className="details-values">{user.company.bs}</div>
                </div>
            </div>
            {/* <div style={{display:'flex'}}>
                <div className="flex details-headings">
                    <div>Name : </div>
                    <div>catchphrase : </div>
                    <div>bs : </div>
                </div>
                <div className="details-values">
                    <div>{user.company.name}</div>
                    <div>{user.company.catchPhrase}</div>
                    <div>{user.company.bs}</div>
                </div>
            </div> */}
            </div>
        </div>
        <div className="line-vertical"></div>
        <div style={{ paddingTop: '30px' }}>
            <div style={{ color: '#aeb8b4' }}>
                Address
            </div>
            <div style={{ display: 'flex' }}>
            <div style={{display:'flex', flexDirection:'column', flex:'1'}}>
                    <div style={{display:'flex'}}>
                        <div className="flex details-headings">Street : </div>
                        <div className="details-values">{user.address.street}</div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="flex details-headings">Suite : </div>
                        <div className="details-values">{user.address.suite}</div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="flex details-headings">City : </div>
                        <div className="details-values">{user.address.city}</div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="flex details-headings">Zipcode : </div>
                        <div className="details-values">{user.address.zipcode}</div>
                    </div>
            </div>
            <div style={{flex:'1'}}></div>
            </div>
            {/* <div style={{ display: 'flex' }}>
                <div className="flex details-headings">
                    <div>Street : </div>
                    <div>Suite : </div>
                    <div>City : </div>
                    <div>Zipcode : </div>
                </div>
                <div className="details-values">
                    <div>{user.address.street}</div>
                    <div>{user.address.suite}</div>
                    <div>{user.address.city}</div>
                    <div>{user.address.zipcode}</div>
                </div>
                <div style={{flex:'2'}}></div>
            </div> */}
            <div style={{width:'100%', position:'relative'}}>
                <img src={Map} style={{borderRadius:'20px', marginLeft:'50px', marginTop: '20px', width:'90%', height: "45vh", objectFit: 'cover'}} ></img>
                <div style={{display:'flex', justifyContent:'flex-end', fontSize:'10px', position:'absolute', bottom:'-30px', right:'0px'}}>
                    <div style={{marginRight:'20px'}}>
                        <div style={{color: "#aeb8b4"}}>
                            Lat: 
                        </div>
                        {user.address.geo.lat}
                    </div>
                    <div>
                        <div style={{color: "#aeb8b4"}}>
                            Long: 
                        </div>
                        {user.address.geo.lng}
                    </div>
                </div>
            </div>
            
        </div>
    </div> 
} 

export default Profile;