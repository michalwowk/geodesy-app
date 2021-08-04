import React from "react";
import styled from "@emotion/styled/macro";
import { DragDropContext } from "react-beautiful-dnd";

import { useBoardContext } from "context/boardContext";
import BoardColumn from "./BoardColumn";

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Board = () => {
  const { boardData, setBoardData } = useBoardContext();

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

    const newColumns = [...boardData];

    const startCol = newColumns.find(
      (column) => column.id === source.droppableId
    );

    const endCol = newColumns.find(
      (column) => column.id === destination.droppableId
    );

    if (!startCol || !endCol) {
      return;
    }

    const droppedProject = startCol.projects.find((p) => p.id === draggableId);

    if (!droppedProject) {
      return;
    }

    startCol.projects.splice(source.index, 1);

    endCol.projects.splice(destination.index, 0, droppedProject);

    setBoardData(newColumns);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {boardData.map((column) => {
          return <BoardColumn key={column.id} column={column} />;
        })}
      </Container>
    </DragDropContext>
  );
};
