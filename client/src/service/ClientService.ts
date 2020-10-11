export interface Client {
  id: string;
  name: string;
  createdBy: any;
}

export default {
  getClients(): Promise<Client[]> {
    return Promise.resolve([
      { name: "Foo", createdBy: "me", id: "123" },
      { name: "Bar Corp.", createdBy: "me", id: "qwe123" },
    ]);
  },
};
