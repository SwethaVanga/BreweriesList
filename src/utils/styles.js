import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  table {
    margin: 50px;
    border: 1px solid black;
    border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 5px;
  }
  th {
    text-align: left;
  }
  }
`

export const Button = styled.button`
    border: none;
`