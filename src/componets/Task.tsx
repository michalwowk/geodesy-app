import React from "react";
import styled from "@emotion/styled/macro";
import { Draggable } from "react-beautiful-dnd";
import { FiEdit3 } from "react-icons/fi";

import Modal from "@material-ui/core/Modal";
import { colors } from "styles/colors";
import { VisuallyHidden } from "./VisuallyHidden";

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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditButton = styled.div`
  position: relative;
  z-index: 2;
  cursor: pointer;
  margin-left: 15px;
`;

const ModalWrapper = styled.div`
  width: 50%;
  max-width: 800px;
  background-color: ${colors.white};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  color: ${colors.black};
  padding: 50px;
`;

const Task = ({ task, index }: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <ModalWrapper>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </ModalWrapper>
  );

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Wrapper>
            <div>{task.content}</div>
            <EditButton onClick={handleOpen}>
              <FiEdit3 />
              <VisuallyHidden>Edit Project</VisuallyHidden>
            </EditButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {modalBody}
            </Modal>
          </Wrapper>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
