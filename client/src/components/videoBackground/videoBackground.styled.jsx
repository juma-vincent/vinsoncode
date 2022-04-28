import styled from "styled-components";

export const VideoBackgroundContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.15;
  overflow: hidden;

  .video-content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

// .video-background {
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   height: 100%;
//   width: 100%;
//   z-index: -1;
//   opacity: 0.15;
//   overflow: hidden;
//   .video-content {
//     height: 100%;
//     width: 100%;
//     object-fit: cover;
//   }
// }
