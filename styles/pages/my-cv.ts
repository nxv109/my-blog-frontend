import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 794px !important;
  margin: 0 auto;

  ul {
    margin-left: 25px;

    li {
      list-style-type: circle;
    }
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 25px;
`;
export const Name = styled.h1``;
export const Address = styled.div``;
export const Label = styled.div``;
export const Text = styled.div``;
export const Experience = styled.div`
  &:not(:last-child) {
    margin-bottom: 25px;
  }

  @media print {
    page-break-inside: avoid;
  }
`;

export const Section = styled.div`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Title = styled.h3`
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;

export const OrganizationWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Left = styled.div`
  text-align: left;
`;
export const Right = styled.div`
  text-align: right;
`;
export const OrganizationName = styled.div`
  font-weight: 600;
`;
export const PositionName = styled.div`
  font-weight: 600;
`;
export const CompanyAddress = styled.div``;
export const CompletionTime = styled.div``;

export const BackHome = styled.div`
  text-align: center;

  @media print {
    display: none;
  }
`;
