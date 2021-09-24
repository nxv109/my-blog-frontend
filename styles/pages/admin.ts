import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 3rem;
  width: 100%;
  height: 100%;
`;

export const TableWrapper = styled.div`
  & > table {
    min-width: 820px;
  }
`;

export const AddNewWrapper = styled.div`
  width: 100%;
`;

export const Post = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .add-new {
    position: absolute;
    bottom: 30px;
    right: 15px;
  }
`;

export const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const ActionBtn = styled.div`
  cursor: pointer;
  width: 20px;
  margin: auto;

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    text-align: center;

    img {
      width: 100%;
    }
  }

  ${({ $type }: { $type?: string }) => {
    const types: Record<string, any> = {
      edit: css`
        a:hover,
        &:hover {
          color: ${({ theme }) => theme.colors.yellow};
        }
      `,
      delete: css`
        a:hover,
        &:hover {
          color: ${({ theme }) => theme.colors.red};
        }
      `,
    };

    return $type && types[$type];
  }}
`;
