import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

import { TaskI } from "./Task";

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

const initialData: BoardData = {
  tasks: [
    { id: "task-11", content: "Take out the garbage" },
    { id: "task-12", content: "Walk out the dog" },
    { id: "task-13", content: "Do the shopping list" },
    { id: "task-14", content: "Cook a breakfast" },
    { id: "task-21", content: "Watch my favorite show" },
    { id: "task-22", content: "Charge my phone" },
    { id: "task-23", content: "Cook dinner" },
    { id: "task-24", content: "Play some video games" },
  ],
  columns: [
    {
      id: "column-1",
      title: "To do",
      taskIds: ["task-11", "task-12", "task-13", "task-14"],
    },
    {
      id: "column-2",
      title: "In progress",
      taskIds: ["task-21", "task-22", "task-23", "task-24"],
    },
  ],
  columnOrder: ["column-1", "column-2"],
};

export const Board = () => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result: any): void => {
    console.log(result);
    // TODO: reorder our column
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns.find((column) => columnId === column.id);
        const tasks = state.tasks.filter((task) =>
          column?.taskIds.includes(task.id)
        );

        if (!column) return null;

        return <Column key={column.id} tasks={tasks} column={column} />;
      })}
    </DragDropContext>
  );
};
