import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 90px;
  
  .logo {
    padding: 5px;
    height: 70px;
    // width: 200px;
    width: 17%;
    @media screen and (max-width: 800px) {
      margin-bottom: 20px;
      width: 27%;
    }
    @media screen and (max-width: 400px) {
      margin-top: 6.5px;
      width: 47%;
    }
  }
  .options-container {
    width: 80%;
    display: flex;
    justify-content: flex-end;
    
    .option {
      margin: 20px 10px;
      height: 40px;
      text-align: center;
      font-size: 17px;
      text-decoration: none;
      color: rgb(78, 73, 73);
      cursor: pointer;      
      border-radius: 9px;      
      padding: 7px 9px ;
      padding-bottom: 15px;
      font-weight: 500;
      border: 2px solid transparent;

      &:hover{
        border-color:  gray;
        background-color: whitesmoke ;
        
      }
      
    }
  }


`;

// .header-container {
//   display: flex;
//   height: 90px;
  
//   .logo {
//     padding: 5px;
//     height: 70px;
//     // width: 200px;
//     width: 17%;
//     @media screen and (max-width: 800px) {
//       margin-bottom: 20px;
//       width: 27%;
//     }
//     @media screen and (max-width: 400px) {
//       margin-top: 6.5px;
//       width: 47%;
//     }
//   }
//   .options-container {
//     width: 80%;
//     display: flex;
//     justify-content: flex-end;
    
//     .option {
//       margin: 20px 10px;
//       height: 40px;
//       text-align: center;
//       font-size: 17px;
//       text-decoration: none;
//       color: rgb(78, 73, 73);
//       cursor: pointer;      
//       border-radius: 9px;      
//       padding: 7px 9px ;
//       padding-bottom: 15px;
//       font-weight: 500;
//       border: 2px solid transparent;

//       &:hover{
//         border-color:  gray;
//         background-color: whitesmoke ;
        
//       }
      
//     }
//   }
// }
