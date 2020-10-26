import React from "react";
import { Timeline, Tag } from "antd";
import statusTagMap from "../util/statusTagMap.json";

export default function StatusTimeline({ events }) {
  console.log(events);
  const eventItems = events.map((event) => {
    switch (event.eventType) {
      case "status_changed":
        return (
          <Timeline.Item label="04.10.2020">
            Status changed:
            <Tag color={statusTagMap[event.value].color}>{event.value}</Tag>
          </Timeline.Item>
        );
      case "created":
        return <Timeline.Item label="01.01.1970">Created</Timeline.Item>;
      default:
        break;
    }
  });

  return <Timeline mode="left">{eventItems}</Timeline>;
}
