import styled from "styled-components";

export const ContainerTask = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const FormTaskContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50rem;
  gap: 0.75rem;
`;

export const TextAreaTask = styled.textarea`
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  width: 50rem;

  :focus {
    outline: none;
    border: none;
  }
`;

export const ButtonTaskForm = styled.button`
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 8px;
  /* width: 10rem; */
`;
