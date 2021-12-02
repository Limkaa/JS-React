import React from "react"
import { Link } from 'react-router-dom';


export default function Friends({ friends }) {

    return (
        <div className="friends">
            { friends.map((friend) => {
                return (
                    <Link to={friend.name}>{friend.name}</Link>
                )})
            }
        </div>
    )
  }