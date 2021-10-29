function AddComponent() {
  const toDolist = [
    {
      id: 1,
      itemName: "Gim",
    },
    {
      id: 2,
      itemName: "Running",
    },
  ];
  const lists = () => {
    toDolist.map((item) => (
      <div>
        <li>{item.itemName}</li>
      </div>
    ));
  };
  return <div>{toDolist.map((item)=>(
      <div>{item.itemName}</div>
  ))}</div>;
}

export default AddComponent