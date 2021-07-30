import React from "react";
import styled from "@emotion/styled/macro";
import { DragDropContext } from "react-beautiful-dnd";

import { useProjectsContext } from "context/projectsContext";
import Column from "./Column";
import { TaskI } from "./Task";

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Board = () => {
  const { projects, setProjects } = useProjectsContext();

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

    const newColumns = [...projects.columns];

    const startCol = newColumns.find(
      (column) => column.id === source.droppableId
    );

    const endCol = newColumns.find(
      (column) => column.id === destination.droppableId
    );

    startCol?.taskIds.splice(source.index, 1);
    endCol?.taskIds.splice(destination.index, 0, draggableId);

    setProjects((prevState) => ({
      ...prevState,
      columns: newColumns,
    }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {projects.columnOrder.map((columnId) => {
          const column = projects.columns.find(
            (column) => columnId === column.id
          );
          const tasks = column?.taskIds.map((taskId) => {
            return projects.tasks.find((task) => task.id === taskId);
          }) as TaskI[];

          if (!column || !tasks) return null;

          return <Column key={column.id} tasks={tasks} column={column} />;
        })}
      </Container>
    </DragDropContext>
  );
};
