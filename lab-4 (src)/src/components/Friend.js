import React from "react"

export default function Friend({ friend }) {
  return (
    <div>
      <div className="photo">{friend.name}</div>
      <div>{friend.name} {friend.surname}</div>
      <div>Age: {friend.age}</div>
      <div>Country: {friend.country}</div>
    </div>
  )
}