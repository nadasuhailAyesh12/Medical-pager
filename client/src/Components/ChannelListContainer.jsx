import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

import HospitalIcon from "../Assets/hospital.png";
import LogoutIcon from "../Assets/logout.png";
import { List } from "stream-chat-react/dist/components/AutoCompleteTextarea/List";

function SideBar() {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div ClassName="icon1__inner">
          <img src={HospitalIcon} alt="hospital" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div ClassName="icon1__inner">
          <img src={LogoutIcon} alt="logout" width="30" />
        </div>
      </div>
    </div>
  );
}
function CompanyHeader() {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Pager</p>
    </div>
  );
}

function ChannelListContainer() {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />

        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
}

export default ChannelListContainer;
