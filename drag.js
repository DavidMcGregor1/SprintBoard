const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".one-column");

console.log("WOrking");

draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});
