import styled, { css } from 'styled-components';
import { rgba } from 'polished';

export const Wrapper = styled.section`
  padding: 3rem;
  width: 100%;
  height: 100%;
`;

export const TableWrapper = styled.div`
  & > table {
    min-width: 880px;
  }
`;

export const AddNewWrapper = styled.div`
  width: 100%;

  button {
    &:first-of-type {
      margin-right: 1rem;
    }
  }
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

export const TagWrapper = styled.div`
  position: relative;
`;

export const Tags = styled.div`
  position: absolute;
  left: 0;
  top: 48%;
  transform: translateY(-50%);
`;

export const Message = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: 1rem;
`;

export const DeleteTagBtn = styled.div`
  position: absolute;
  top: -13px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 25px;
  color: ${({ theme }) => rgba(theme.colors.red, 0.8)};
  text-align: center;
  display: none;
  cursor: pointer;
  line-height: 19px;
`;

export const Tag = styled.span`
  position: relative;
  background: ${({ theme }) => theme.colors.gray4};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: 5px;
  padding: 3px 10px;

  &:hover ${DeleteTagBtn} {
    display: block;
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
`;
