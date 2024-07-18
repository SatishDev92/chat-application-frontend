import { Animation } from "@mui/icons-material";
import { Skeleton } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import { Link as Linkcomp } from "react-router-dom";


 export const VisuallyHidden = styled("input")({
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0
  });

  export const StyledLink = styled(Linkcomp)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  &:hover {
    background:rgba(0, 0, 0, 0.1);
  }
`;
export const StyLink = styled(Linkcomp)`
  text-decoration: none;
  color: black;
  background-color: #ea7070;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ff8f8f;
    color: white;
  }
`;

export const InputBox = styled("input")`
  width:100%;
  height : 100%;
  border : none ;
  outline : none ;
  padding : 0 3rem;
  border-radius : 1.5rem;
  background-color :rgba(247, 247, 247,2);
`;

export const SearchField = styled("input")`
  padding : 1rem 2rem;
  width: 20vmax;
  border:none;
  outline :none;
  border-radius : 1.5rem;
  background-color : #f1f1f1;
  font-size : 1.1rem;
`
export const CurveButton  =styled("button")`
 border-radius : 1.5rem;
 padding : 1rem 2rem ;
 border : none;
 outline : none;
 cursor : pointer;
 background-color :black;
 color : white;
 font-size : 1.3rem;
 &:hover {
 background-color : rgba(0, 0, 0, 0.8);
 }
`
const bounceAnimation = keyframes`
0%{transform :scale(1);}
50%{transform :scale(1.5);}
100%{transform :scale(1);}

`

export const BouncingSkeleton = styled(Skeleton)(()=> ({animation : `${bounceAnimation} 1s infinite` }))