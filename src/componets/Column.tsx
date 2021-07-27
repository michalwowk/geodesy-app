import React from "react";
import styled from "@emotion/styled/macro";
import { Droppable } from "react-beautiful-dnd";

import Task, { TaskI } from "./Task";

interface TaskListProps {
  isDraggingOver: boolean;
}

interface Props {
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };
  tasks: TaskI[];
}

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div<TaskListProps>`
  padding: 8px;
  background-color: ${(props) =>
    props.isDraggingOver ? "lightblue" : "white"};
`;

const Column = ({ column, tasks }: Props) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
