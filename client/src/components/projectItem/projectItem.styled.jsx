import styled from "styled-components";

export const ProjectItemContainer = styled.div`

  display: flex;
  justify-content: center;
  margin-left: 40px;
  width: 90%;
  height: 400px;
  @media screen and (max-width: 400px) {
    flex-direction: column;
    height: 640px;
    margin-top: -160px;
    justify-content: center;
    align-items: center;
  }

  .description {
    width: 30%;
    margin-right: 40px;
    .link {
      font-family: calibri;
    }
    @media screen and (max-width: 400px) {
      width: 90%;
    }
  }
  .images-container {
    position: relative;
    width: 70%;
    padding: 20px;

    img {
      width: 65%;
      box-shadow: 0 15px 40px rgba(19, 18, 18, 0.4);
      border-radius: 2px;
      z-index: 10;
      transition: all 0.05s;
      outline-offset: 13px;
      @media screen and (max-width: 400px) {
        margin-top: 40px;
      }
    }

    .one {
      position: absolute;
      top: 0px;
      left: 0px;

      &:hover {
        outline: 13px solid rgb(118, 211, 12);
        transform: scale(1.02);
        box-shadow: 0 25px 40px rgba(19, 18, 18, 0.6);
        z-index: 20;
      }
    }
    .two {
      position: absolute;
      top: 40px;
      right: 0px;

      &:hover {
        outline: 13px solid rgb(118, 211, 12);
        transform: scale(1.02);
        box-shadow: 0 25px 40px rgba(19, 18, 18, 0.6);
        z-index: 20;
      }
    }
    .three {
      position: absolute;
      top: 95px;
      left: 10%;

      &:hover {
        outline: 13px solid rgb(118, 211, 12);
        transform: scale(1.02);
        box-shadow: 0 25px 40px rgba(19, 18, 18, 0.6);
        z-index: 20;
      }
    }
    @media screen and (max-width: 400px) {
      width: 90%;
    }
  }
  .images-container:hover img:not(:hover) {
    transform: scale(0.85);
  }

`;

// .project-item-container {
//   display: flex;
//   justify-content: center;
//   margin-left: 40px;
//   width: 90%;
//   height: 400px;
//   @media screen and (max-width: 400px) {
//     flex-direction: column;
//     height: 640px;
//     margin-top: -160px;
//     justify-content: center;
//     align-items: center;
//   }

//   .description {
//     width: 30%;
//     margin-right: 40px;
//     .link {
//       font-family: calibri;
//     }
//     @media screen and (max-width: 400px) {
//       width: 90%;
//     }
//   }
//   .images-container {
//     position: relative;
//     width: 70%;
//     padding: 20px;

//     img {
//       width: 65%;
//       box-shadow: 0 15px 40px rgba(19, 18, 18, 0.4);
//       border-radius: 2px;
//       z-index: 10;
//       transition: all 0.05s;
//       outline-offset: 13px;
//       @media screen and (max-width: 400px) {
//         margin-top: 40px;
//       }
//     }

//     .one {
//       position: absolute;
//       top: 0px;
//       left: 0px;

//       &:hover {
//         outline: 13px solid rgb(118, 211, 12);
//         transform: scale(1.02);
//         box-shadow: 0 25px 40px rgba(19, 18, 18, 0.6);
//         z-index: 20;
//       }
//     }
//     .two {
//       position: absolute;
//       top: 40px;
//       right: 0px;

//       &:hover {
//         outline: 13px solid rgb(118, 211, 12);
//         transform: scale(1.02);
//         box-shadow: 0 25px 40px rgba(19, 18, 18, 0.6);
//         z-index: 20;
//       }
//     }
//     .three {
//       position: absolute;
//       top: 95px;
//       left: 10%;

//       &:hover {
//         outline: 13px solid rgb(118, 211, 12);
//         transform: scale(1.02);
//         box-shadow: 0 25px 40px rgba(19, 18, 18, 0.6);
//         z-index: 20;
//       }
//     }
//     @media screen and (max-width: 400px) {
//       width: 90%;
//     }
//   }
//   .images-container:hover img:not(:hover) {
//     transform: scale(0.85);
//   }
// }
