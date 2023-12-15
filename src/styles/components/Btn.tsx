import { styled } from 'styled-components';

export const Btn = styled.button`
  border: none;
  height: 30px;
  width: 86px;
  border-radius: 5px;
  padding: 4px 20px 6px;
  font-family: Inter, sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  margin-right: 12px;
  margin-bottom: 9px;
`;

type PrimaryBtnPropsType = {
  colorBgc?: string
  color?: string
}

export const PrimaryBtn = styled(Btn)<PrimaryBtnPropsType>`
  color: ${props => props.color || '#ffffff'};
  background-color: ${props => props.colorBgc || '#4e71fe'};
  line-height: 0;
`;


export const SecondaryBtn = styled(Btn)<PrimaryBtnPropsType>`
  color: #4e71fe;
  border: 2px solid ${props => props.colorBgc || '#4e71fe'};
  background-color: #ffffff;
  line-height: 0;
`;
