import React, { useState, useEffect } from "react";
import { List, Skeleton } from "antd";
import ClientService from "../service/ClientService";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    ClientService.getClients().then(setClients);
  }, []);

  return (
    <div>
      <List
        dataSource={clients}
        itemLayout="horizontal"
        renderItem={(item) => (
          <List.Item actions={[<a key="list-loadmore-edit">edit</a>]}>
            <Skeleton loading={false} active>
              <List.Item.Meta
                title={<a href={"/clients/" + item.id}>{item.name}</a>}
                description={"A client"}
              ></List.Item.Meta>
            </Skeleton>
          </List.Item>
        )}
      ></List>
    </div>
  );
}
