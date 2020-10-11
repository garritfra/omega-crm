import React, { useState, useEffect } from "react";
import { List, Card } from "antd";
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
        bordered
        grid
        header={<h2>Clients</h2>}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              title={item.name}
              actions={[
                <a href={"/clients/" + item.id} key="list-loadmore-edit">
                  edit
                </a>,
              ]}
            >
              Card content
            </Card>
          </List.Item>
        )}
      ></List>
    </div>
  );
}
