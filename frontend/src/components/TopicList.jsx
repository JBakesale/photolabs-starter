import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, topicClick }) => {
  const topicList = topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        slug={topic.slug}
        title={topic.title}
        id={topic.id}
        topicClick={topicClick}
      />
    );
  });

  return <div className="top-nav-bar__topic-list">{topicList}</div>;
};

export default TopicList;
