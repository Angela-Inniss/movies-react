import React from "react";
import styled from "styled-components";

export default class CheckBox extends React.Component {
  // Create a custom checkbox component

  render() {
    return (
      <CheckboxCont>
        <input type="checkbox" />
      </CheckboxCont>
    );
  }
}

const CheckboxCont = styled.div`
  position: relative;
  margin-right: 5px;
`;
