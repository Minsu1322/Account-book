import styled from "styled-components";

export const CalenderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
  border: solid 3px aqua;
`;

export const MonthButton = styled.button`
  background-color: ${(props) => (props.$isSelected ? "#3498db" : "white")};
  color: ${(props) => (props.$isSelected ? "white" : "black")};
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px 20px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex: 15%;
  max-width: calc(100% / 7);
  border-radius: 20px;
  border: solid 1px orange;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;
