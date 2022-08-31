import styled from 'styled-components';

export const AppContainer = styled.div`
  align-item: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  pading: 20px;
  width: 100%;
`

export const ColumnContainer = styled.div`
  background-color: #abecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-glow: 0;
`

export ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`

export CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0ox;
`