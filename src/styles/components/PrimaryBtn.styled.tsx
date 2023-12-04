import { styled } from 'styled-components';

export const PrimaryBtn = styled.button`
  height: 30px;
  width: 86px;
  font-family: Inter;
  border: none;
  border-radius: 5px;
  background: #4e71fe;
  padding: 4px 20px 6px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  margin-right: 12px;

  &:not(:last-child) {
    margin-left: 10px;
  }
`;
export const CopyOfPrimaryBtn = styled(PrimaryBtn)`
  color: #4e71fe;
  border: 2px solid #4e71fe;
  background-color: #ffffff;
  line-height: 0;
`;
