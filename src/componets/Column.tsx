import React from "react";
import styled from "@emotion/styled/macro";
import { Droppable } from "react-beautiful-dnd";

import Task, { TaskI } from "./Task";
import { AddTodoForm } from "./AddTodoForm";

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
  padding: 10px;
`;

const Title = styled.h3``;

const TaskList = styled.div<TaskListProps>`
  display: grid;
  row-gap: 8px;
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
              <Task
                columnId={column.id}
                key={task.id}
                task={task}
                index={index}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      <AddTodoForm columnId={column.id} />
    </Container>
  );
};

export default Column;
