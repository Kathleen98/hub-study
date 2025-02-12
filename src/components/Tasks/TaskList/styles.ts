import styled from "styled-components";

export const TaskListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ListTasks = styled.li`
  list-style: none;
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;
