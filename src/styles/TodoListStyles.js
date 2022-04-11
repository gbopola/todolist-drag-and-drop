import styled from 'styled-components';

const TodoListWrapper = styled.div`
  margin: 0% 31%;
  text-align: center;
  position: relative;
  top: -8rem;

  .todolist-items {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  @media (max-width: 1200px) {
    margin: 0% 12%;
  }

  @media (max-width: 600px) {
    margin: 0 5%;
  }
`;

export { TodoListWrapper };
