
import React, { useContext, useEffect, useState } from "react";
import { MeetupContext } from "../Context/Meetupcontext";
import { useNavigate } from "react-router-dom";

export default function MeetupDetail() {
const navigate = useNavigate();
    const { meetUpdetail ,searchQuery, setSearchQuery} = useContext(MeetupContext);
    const {id, title,eventStartTimen,eventEndTime,location,address,eventThumbnail,eventDescription,hostedBy,eventType,isPaid,eventTags,speakers,price,additionalInformation}= meetUpdetail;

    const onChangeSearchHandle = (value) => {
        navigate("/")
        setSearchQuery(value);

      };
  return (
    <div className="home">
        <header className="header">
    <p>Meetup</p>
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
                <p>Hosted By:</p>
                <p>{hostedBy}</p>
                <img  className="detail-img"src={eventThumbnail} alt={title} />
                <p>Detail</p>
                <p>{eventDescription}</p>
                <p>Additional Information</p>
                <p><span>Dress Code</span><span>{additionalInformation.dressCode}</span></p>
                <p><span>Age Restriction</span><span>{additionalInformation.ageRestrictions}</span></p>
                <div>
                    <p>Event Tag</p>
                    <p>{eventTags.map((tags) => <span>{tags}</span>)}</p>
                </div>
            </div>
            <div>
                <div>
                    <p>{address}</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}
