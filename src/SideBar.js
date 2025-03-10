import React,{useEffect,useState} from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

import "./SideBar.css";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function SideBar() {
  const[{user},dispatch]=useStateValue();
  const [rooms,setRooms]=useState([]);

  useEffect(() => {
    const unsubscribe= db.collection('rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc=>
        ({
         id: doc.id,
         data: doc.data(), 
        })
        ))
    ));
    return ()=>{
      unsubscribe();
    }
  }, [])
   
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL}></Avatar>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon></DonutLargeIcon>
          </IconButton>
          <IconButton>
            <ChatIcon></ChatIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="div sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text"></input>
        </div>
      </div>
      <div className="sidebar__chats">
          <SidebarChat addNewChat></SidebarChat>
          {rooms.map(room=>(
            <SidebarChat key={room.id} id={room.id} name={room.data.name}></SidebarChat>
          ))}
      </div>
    </div>
  );
}

export default SideBar;
