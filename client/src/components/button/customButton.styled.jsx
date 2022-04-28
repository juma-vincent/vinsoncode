import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  padding: 2px 5px;
  transition: all 0.2s;
  font-weight: 500;

  a {
    color: rgb(21, 161, 21);
    border-bottom: rgb(21, 161, 21) solid 1px;
    text-decoration: none;
  }
  &:hover {
    background-color: rgb(21, 161, 21);
    a {
      color: white;
    }
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;


// .button-container {
//   display: inline-block;
//   margin-bottom: 5px;
//   padding: 2px 5px;
//   transition: all 0.2s;
//   font-weight: 500;

//   a {
//     color: rgb(21, 161, 21);
//     border-bottom: rgb(21, 161, 21) solid 1px;
//     text-decoration: none;
//   }
//   &:hover {
//     background-color: rgb(21, 161, 21);
//     a {
//       color: white;
//     }
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
//     transform: translateY(-2px);
//   }
// }
