function handleNewList(event, title) {
  event.preventDefault();
  const newList = new List(title);
  event.target.reset();
}
