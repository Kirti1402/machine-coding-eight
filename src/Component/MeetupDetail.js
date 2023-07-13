
import React, { useContext, useEffect, useState } from "react";
import { MeetupContext } from "../Context/Meetupcontext";
import { useNavigate,Link } from "react-router-dom";
import dateFormat from "dateformat";

export default function MeetupDetail() {
const navigate = useNavigate();
    const { meetUpdetail ,searchQuery, setSearchQuery} = useContext(MeetupContext);
    const {id, title,eventStartTime,eventEndTime,location,address,eventThumbnail,eventDescription,hostedBy,eventType,isPaid,eventTags,speakers,price,additionalInformation}= meetUpdetail;
    let evenstartAt = eventStartTime.split("T");
    let date = dateFormat(evenstartAt[0], "dddd, mmmm dS, yyyy");
    let startTime = evenstartAt[1].split(":");

    let eventEnd = eventEndTime.split("T");
    let endTime = eventEnd[1].split(":");

    const onChangeSearchHandle = (value) => {
        navigate("/")
        setSearchQuery(value);

      };
  return (
    <div className="home">
        <header className="header">
            <Link to="/" className="link"><p>Meetup</p></Link>
    
    <input
      onChange={(event) => onChangeSearchHandle(event.target.value)}
      type="text"
      placeholder="Search by title"
    />
    </header>
    <hr />
    
        <div className="detail-container" key={id}>
            <div className="card-description" >
                <h2>{title}</h2>
                <div className="hosted">
                <p>Hosted By:</p>
                <h4>{hostedBy}</h4>
                </div>
                <img  className="detail-img"src={eventThumbnail} alt={title} />
                <div className="eventdescription">
                <h3>Detail</h3>
                <p className="description">{eventDescription}</p>
                </div>
                <div className="addtionalInformation">
                <h3>Additional Information</h3>
                <p style={{fontSize:'15px'}}><span style={{fontWeight:'600'}}>Dress Code: </span><span>{additionalInformation.dressCode}</span></p>
                <p  style={{fontSize:'15px'}}><span style={{fontWeight:'600'}}>Age Restriction: </span><span>{additionalInformation.ageRestrictions}</span></p>
                </div>
                <div>
                    <h3>Event Tag</h3>
                    <p className="event-tag">{eventTags.map((tags) => <p>{tags}</p>)}</p>
                </div>
            </div>
            <div >
                <div className="card-detail">
                <div className="time-detail">
                    <div>
                    <i class='far fa-clock'></i>
                    </div>
                    <div>
                    <p>{date} at {startTime[0]}:{startTime[1]} {startTime[0] < 12 ? "AM" : "PM"} to</p>
                    <p>{date} at {endTime[0]}:{endTime[1]} {endTime[0]  < 12 ? "AM" : "PM"} </p>
                    </div>

                    
                </div>
                    <div className="address">
                    <p><i className="fas fa-map-marker-alt"></i><span>{address}</span></p>
                    </div>
                    <div className="currency">
                    <p><span>&#8377;</span>{price}</p>

                    </div>

                </div>
                
                <div className="speaker-container">
                    <h4>Speakers: ({speakers.length})</h4>
                    <div className="speaker-card">
                        {speakers.map(speakersItem =><div className="speaker-detail">
                            <div>
                            <img src={speakersItem.image} alt={speakersItem.name}></img>
                            </div>
                            
                            <div>
                            <h5>{speakersItem.name}</h5>
                            <p>{speakersItem.designation}</p>
                            </div>
                            
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}
