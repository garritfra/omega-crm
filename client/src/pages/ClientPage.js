import React, { useState, useEffect } from "react";
import ClientService from "../service/ClientService";

export default function ClientPage({ id }) {
  const [client, setClient] = useState({});
  useEffect(() => {
    ClientService.getClientById(id).then(setClient);
  }, []);

  return <div>{client.name}</div>;
}
