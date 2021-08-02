import React from "react";
import styled from "@emotion/styled/macro";
import { Draggable } from "react-beautiful-dnd";
import { FiEdit3 } from "react-icons/fi";

import Modal from "@material-ui/core/Modal";
import { colors } from "styles/colors";
import { VisuallyHidden } from "./VisuallyHidden";
import { useProjectsContext } from "context/projectsContext";

export interface TaskI {
  id: string;
  content: string;
}

interface Props {
  task: TaskI;
  index: number;
  columnId: string;
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

const DeleteTaskButton = styled.div`
  background-color: orangered;
  display: inline-block;
  padding: 12px 25px;
  font-weight: 600;
  color: ${colors.white};
  cursor: pointer;
`;

const Task = ({ task, index, columnId }: Props) => {
  const [open, setOpen] = React.useState(false);
  const { projects, setProjects } = useProjectsContext();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProjectDelete = () => {
    const tasks = projects.tasks.filter((t) => t.id !== task.id);

    const columns = [...projects.columns];
    const currentColumn = columns.find((column) => column.id === columnId);

    if (!currentColumn) {
      return;
    }

    const filteredTasks = currentColumn.taskIds.filter((t) => t !== task.id);
    currentColumn.taskIds = filteredTasks;

    setProjects({
      ...projects,
      columns,
      tasks,
    });
    handleClose();
  };

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
              <ModalWrapper>
                <h2 id="simple-modal-title">#{task.id}</h2>
                <p id="simple-modal-description">{task.content}</p>
                <DeleteTaskButton onClick={handleProjectDelete}>
                  Delete Project
                </DeleteTaskButton>
              </ModalWrapper>
            </Modal>
          </Wrapper>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
