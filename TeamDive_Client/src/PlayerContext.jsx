import React, { createContext, useState } from "react";

export const PlayerContext=createContext();

export function PlayerProvider({children}){
    const [addPlaylist,setAddPlaylist]=useState();

    return(
        <PlayerContext.Provider value={{addPlaylist,setAddPlaylist}} >
            {children}
        </PlayerContext.Provider>
    );

}