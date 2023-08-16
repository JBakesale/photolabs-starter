import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, title, topicClick } = props;

  return (
    <div className="topic-list__item" onClick={() => topicClick(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
