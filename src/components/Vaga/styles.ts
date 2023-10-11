import styled from 'styled-components'
import { Cores } from '../../styles'

export const Vaga = styled.li`
  border: 1px solid ${Cores.principal};
  background-color: ${Cores.secundaria};
  color: ${Cores.principal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${Cores.principal};
    color: ${Cores.secundaria};
  }
`
export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${Cores.secundaria};
  background-color: ${Cores.principal};
  color: ${Cores.secundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  :hover {
    border-color: ${Cores.principal};
    background-color: ${Cores.secundaria};
    color: ${Cores.principal};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
