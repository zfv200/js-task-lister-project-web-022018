class Task {
  constructor(description, priority) {
    if (!description) throw new Error("Form description should not be empty");
    this.description = description;
    this.priority = priority || "low";
  }

  render() {
    return (
      `<li>
        Task: ${this.description}
        <br>
        Priority: ${this.priority}
      </li>`
    );
  }
}
