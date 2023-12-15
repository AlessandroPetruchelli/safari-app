import { styled } from "styled-components";

type DescrPropsType = {
  color?: string
  fontSize?: string
}

export const Descr = styled.p<DescrPropsType>`
  max-width: 260px;
  color: ${props => props.color || '#ABB3BA'};
  font-size: ${props => props.fontSize || '12px'};
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 19px;
` 