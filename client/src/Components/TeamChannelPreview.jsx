import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";
function TeamChannelPreview({ channel, type }) {
  const { channel: activeChannel, client } = useChatContext();

  function ChannelPreview() {
    return (
      <p className="channel-preview__item">
        {channel?.data?.name || channel?.data?.id}
      </p>
    );
  }

  function DirectPreview() {
    const members = Object.values(channel.state.members)
      .filter(({ user }) => user.id !== client.userID);
    return (
      <div className="channel-preview__item single">
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullName}
          size={24}
        />
        <p> {members[0]?.user?.fullName}</p>
      </div>
    );
  }

  return (
    <div
      className={
        channel.id === activeChannel.id
          ? "channel-preview__ wrapper__selected"
          : "channel-preview__ wrapper"
      }
      onClick={() => {
        console.log(channel);
      }}
    >
      {(type = "team" ? <ChannelPreview /> : <DirectPreview />)}
    </div>
  );
}

export default TeamChannelPreview;
