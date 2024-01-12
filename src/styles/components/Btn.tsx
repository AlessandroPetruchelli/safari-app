import { css } from 'styled-components';
import { styled } from 'styled-components';

type BtnPropsType = {
  colorBgc?: string
  color?: string
  fontSize?: string
  primery?: boolean
  outlined?: boolean
}

export const Btn = styled.button<BtnPropsType>`
  border: none;
  height: 30px;
  width: 86px;
  border-radius: 5px;
  padding: 4px 20px 6px;
  font-family: Inter, sans-serif;
  font-size: ${props => props.fontSize || '10px'};
  font-weight: 700;
  line-height: 20px;
  margin-right: 12px;
  margin-bottom: 9px;

  &:hover{
    background-color: #ca7acd;
    color: #ffffff;
  }

  ${props => props.primery && css<BtnPropsType>`
  color: ${props => props.color || '#ffffff'};
  background-color: ${props => props.colorBgc || '#4e71fe'};
  line-height: 0;
`}

${props => props.outlined && css<BtnPropsType>`
  color: #4e71fe;
  border: 2px solid ${props => props.colorBgc || '#4e71fe'};
  background-color: #ffffff;
  line-height: 0;
`}
`
