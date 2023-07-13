import { createContext ,useState} from "react";
import {meetsup} from "../JsonData"

export const MeetupContext = createContext();


export const MeetupProvider = ({children})=>{
    const [meetsUpData,setmeetsUpData] = useState(meetsup)
    const [meetUpdetail,setMeetUpDetail]= useState();
    const [searchQuery, setSearchQuery] = useState("");

    return <MeetupContext.Provider value ={{meetsUpData,meetUpdetail,setMeetUpDetail,searchQuery, setSearchQuery}}>
        {children}
    </MeetupContext.Provider>
}