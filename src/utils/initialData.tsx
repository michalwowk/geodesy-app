import { TaskI } from "componets/Task";

interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

interface BoardData {
  tasks: TaskI[];
  columns: Column[];
  columnOrder: string[];
}

export const initialData: BoardData = {
  tasks: [
    { id: "11", content: "Take out the garbage" },
    { id: "12", content: "Walk out the dog" },
    { id: "13", content: "Do the shopping list" },
    { id: "14", content: "Cook a breakfast" },
    { id: "21", content: "Watch my favorite show" },
    { id: "22", content: "Charge my phone" },
    { id: "23", content: "Cook dinner" },
    { id: "24", content: "Play some video games" },
  ],
  columns: [
    {
      id: "column-1",
      title: "To do",
      taskIds: ["13", "12", "14", "11"],
    },
    {
      id: "column-2",
      title: "In progress",
      taskIds: ["21", "22", "23", "24"],
    },
  ],
  columnOrder: ["column-1", "column-2"],
};
