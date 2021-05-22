import styled from "styled-components";
// export const Tabs = styled.div`
//   overflow: hidden;
//   background: #fff;
//   font-family: Open Sans;
//   height: 3em;
// `;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  margin-right: 0.1em;
  font-size: 1em;
  color: ${props => (props.active ? "#fff" : "rgb(145, 158, 171);")};
  
  
  rgb(145, 158, 171);
  padding: 0 30px;
  background: none;
  border-color: none;
  border: ${props => (props.active ? "1px solid none" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "none" : "none")};
  height: ${props => (props.active ? "2.6em" : "2.6em;")};
  

  :hover {
    background-color: none;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
