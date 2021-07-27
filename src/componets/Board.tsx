import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { initialData } from "utils/initialData";
import Column from "./Column";
import { TaskI } from "./Task";

export const Board = () => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result: any): void => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newColumns = [...state.columns];

    const startCol = newColumns.find(
      (column) => column.id === source.droppableId
    );

    const endCol = newColumns.find(
      (column) => column.id === destination.droppableId
    );

    startCol?.taskIds.splice(source.index, 1);
    endCol?.taskIds.splice(destination.index, 0, draggableId);

    setState((prevState) => ({
      ...prevState,
      columns: newColumns,
    }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns.find((column) => columnId === column.id);
        const tasks = column?.taskIds.map((taskId) => {
          return state.tasks.find((task) => task.id === taskId);
        }) as TaskI[];

        if (!column || !tasks) return null;

        return <Column key={column.id} tasks={tasks} column={column} />;
      })}
    </DragDropContext>
  );
};
