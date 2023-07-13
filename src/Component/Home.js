import React, { useContext, useEffect, useState } from "react";
import { MeetupContext } from "../Context/Meetupcontext";
import dateFormat from "dateformat";
import {Link} from "react-router-dom"

export const Home = () => {
  const { meetsUpData,setMeetUpDetail } = useContext(MeetupContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdown, setDropdown] = useState("");
  let filterMeetUp = meetsUpData;

  const onChangeFilter = (value) => {
    setDropdown(value);
  };

  const onChangeSearchHandle = (value) => {
    setSearchQuery(value);
  };

  filterMeetUp =
    meetsUpData &&
    meetsUpData.filter((meetupItem) => {
      const isDropDownMatch =
        dropdown === "" || dropdown === meetupItem.eventType;
      const isSearchedMatched =
        searchQuery === "" ||
        meetupItem.title.toLowerCase().includes(searchQuery.toLowerCase());

      return isDropDownMatch && isSearchedMatched;
    });

    const onClickCardHandle = (cardDetail)=>{
        setMeetUpDetail(cardDetail)
    }
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
      <div className="eventtypedropdown">
        <select onChange={(event) => onChangeFilter(event.target.value)}>
          <option value="">Select Event Type</option>
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
          <option value="">Both</option>
        </select>
      </div>
      <div className="card-container">
        {filterMeetUp &&
          filterMeetUp.map((meetupItem) => {
            const { id, title, eventStartTime, eventType, eventThumbnail } =
              meetupItem;
            let parts = eventStartTime.split("T");
            let date = dateFormat(parts[0], "dddd, mmmm dS, yyyy");
            let time = parts[1].split(":");
            return (
              <div className="meetup-card" key={id}>
                <Link to="/meetupdetail" className="link" onClick={()=>onClickCardHandle(meetupItem)}>
                <div>
                  <img src={eventThumbnail} alt={title} />
                </div>
                <div>
                  <p className="date-time">
                    <span>{date}</span>
                    <span>•</span>
                    <span>
                      {parts[1]}
                      {time[0] < 12 ? "AM" : "PM"}
                    </span>
                  </p>
                  <h4>{title}</h4>
                </div>
                <p className="eventType">{eventType} Event</p>
                </Link>
              
              </div>
            );
          })}
      </div>
    </div>
  );
};
