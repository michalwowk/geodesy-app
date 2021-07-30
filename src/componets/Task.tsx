import React from "react";
import styled from "@emotion/styled/macro";
import { Draggable } from "react-beautiful-dnd";
import { colors } from "styles/colors";

export interface TaskI {
  id: string;
  content: string;
}

interface Props {
  task: TaskI;
  index: number;
}

interface ContainerProps {
  isDragging: boolean;
}

const Container = styled.div<ContainerProps>`
  border: 1px solid ${colors.accent};
  border-radius: 2px;
  padding: 8px;
  background-color: ${(props) => {
    return props.isDragging ? colors.accent : colors.navy;
  }};
  color: ${(props) => {
    return props.isDragging ? colors.navy : colors.white;
  }};
`;

const Task = ({ task, index }: Props) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
