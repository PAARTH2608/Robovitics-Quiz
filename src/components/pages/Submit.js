import { useRef, useState } from "react";
import styled from "styled-components";
import { MainDiv, Tx5 } from "./Start";
import { Img, LogoDiv } from "./Rules";
import Logo from "../../assets/RoboVITics-Logo.svg";
import ImgLogo from "../../assets/Group.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uploadDoc } from "../../redux/actions/upload.action";

const Tx1 = styled.h1`
  color: white;
  font-size: 3rem;
`;
const Tx2 = styled.h2`
  color: #5be4ff;
  font-size: 2rem;
`;
const Tx3 = styled.input``;
const Tx4 = styled.h2`
  color: white;
`;
const HelperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const Help = styled.div`
  padding-top: 5vh;
  text-align: center;
`;
const ImgDiv = styled.img`
  cursor: pointer;
`;
const Help1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Tx6 = styled.h2`
  color: #5be4ff;
  padding-top: 4vh;
`;
const Tx7 = styled.h2`
color:white;
font-size:1rem;
`;
const Submit = () => {
  const fileInputRef = useRef();
  const id = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();

  const [isLarge, setIsLarge] = useState(false);

  const fileUploadHandler = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    if(e.target.files[0]){
      // formData.append("file", e.target.files[0]);
      const file = e.target.files[0];
      console.log(file.size);
      if(file.size > 5000000){
        setIsLarge(true);
        return;
      }
      else{
        setIsLarge(false);
      }
      dispatch(uploadDoc({file, id}));
    }
  }

  return (
    <MainDiv col={"column"}>
      <Help>
        <Tx1>CORE COMMITTEE SELECTIONS</Tx1>
        <Tx2>RECRUITMENTS ROUNT 1</Tx2>
      </Help>
      <Tx3
        onChange={fileUploadHandler}
        multiple={false}
        ref={fileInputRef}
        type={"file"}
        hidden
      />
      <Help1>
        <ImgDiv src={ImgLogo} onClick={() => fileInputRef.current.click()} />
        <Tx6>FILE UPLOAD</Tx6>
        {isLarge && <Tx7>*File size is too large</Tx7>}
      </Help1>
      <Tx4>ARE YOU SURE YOU WANT TO SUBMIT QUIZ ?</Tx4>
      <HelperDiv>
        <Tx5 pad1={"1%"} pad2={"3%"}>
          <Link to={'/domains'} style={{ textDecoration: 'none', color: 'black' }}>GO BACK</Link>
        </Tx5>
        <Tx5 pad1={"1%"} pad2={"3%"}>
          <Link to={'/finish'} style={{ textDecoration: 'none', color: 'black' }} >SUBMIT QUIZ</Link>
        </Tx5>
      </HelperDiv>
      <LogoDiv src={Logo} alt="logo">
        <Img src={Logo} alt="logo" />
      </LogoDiv>
    </MainDiv>
  );
};

export default Submit;
