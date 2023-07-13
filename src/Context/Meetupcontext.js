import { createContext ,useState} from "react";
import {meetsup} from "../JsonData"

export const MeetupContext = createContext();


export const MeetupProvider = ({children})=>{
    const [meetsUpData,setmeetsUpData] = useState(meetsup)

    return <MeetupContext.Provider value ={{meetsUpData}}>
        {children}
    </MeetupContext.Provider>
}