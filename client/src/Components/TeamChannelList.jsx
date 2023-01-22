import React from "react";
import { AddChannel } from "../Assets";

function TeamChannelList({ children, error = false, loading, type }) {
  if (error)
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list_message">
          Connection error ,pleasewait a moment and try again{" "}
        </p>
      </div>
    ) : null;

  if (loading)
    return (
      <div className="team-channel-list">
        <p className="team-channel-list_message loading">
          {type === "team" ? "channels" : "Messages"} loading...{" "}
        </p>
      </div>
    );

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === "team" ? "channels" : " Direct Messages"}
        </p>
        //todo add add channel button
      </div>
      {children}
    </div>
  );
}

export default TeamChannelList;
