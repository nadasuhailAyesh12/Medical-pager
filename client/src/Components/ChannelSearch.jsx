import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

import { SearchIcon } from "../Assets";

function ChannelSearch() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  function onSearch(event) {
    event.preventDefault();
    setLoading(true);
    setQuery(event.target.value);
    getChannels();
  }

  async function getChannels(text) {
    try {
      //Todo:fetch channels
    } catch (error) {
      setQuery("");
    }
  }

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-serach__input__icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          ClassName="channel-search__input__text"
          onChange={onSearch}
          value={query}
          placeholder="search"
        />
      </div>
    </div>
  );
}

export default ChannelSearch;