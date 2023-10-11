import styled from 'styled-components'
import { Cores } from '../../styles'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${Cores.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BotaoPesquisar = styled.button`
  background-color: ${Cores.principal};
  border: 1px solid ${Cores.principal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${Cores.secundaria};
  margin-left: 8px;
  cursor: pointer;
`
export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${Cores.principal};
`
