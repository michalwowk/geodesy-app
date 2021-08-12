import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "@material-ui/core";
import styled from "@emotion/styled/macro";

import { VisuallyHidden } from "componets/VisuallyHidden";
import { colors } from "styles/colors";

interface Props {}

const Textarea = styled.textarea`
  background-color: transparent;
  color: ${colors.white};
  resize: none;
  border: none;
`;

export const Project = (props: Props) => {
  let { id } = useParams<{ id: string }>();
  return (
    <Container maxWidth="xl">
      <VisuallyHidden>
        <h1>{id}</h1>
      </VisuallyHidden>
      <div>
        <Textarea name="title" id="title">
          {id}
        </Textarea>
      </div>
    </Container>
  );
};
