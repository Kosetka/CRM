function ListGroup() {
  const items = ["Radom", "Warszawa", "Kielce", "Gdańsk", "Szczecin"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
