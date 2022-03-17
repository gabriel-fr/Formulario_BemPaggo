import styled from "styled-components";

export const FormContainer = styled.div`
  width: 500px;
  background-color: white;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 700px;
  border-radius: 10px;
  margin-top: 50px;
`;

export const FormHeader = styled.div`
  display: flex;
  padding: 30px;
  line-height: 25px;
  font-size: 18px;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 60%;
  height: 100px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: #2e3676;
  color: white;
`;

export const BoxImage = styled.img`
  height: 110px;
  width: 130px;
  margin-left: 80%;
`;

export const FormBody = styled.div`
  padding: 25px;

  > div {
    margin-bottom: 30px;
  }

  > div > b {
    line-height: 30px;
  }

  > div > label {
    line-height: 25px;
  }
`;

export const ButtonStyle = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #2f3676;
  margin: 0 5px;
  cursor: pointer;
`;

export const ImageLessButton = styled.img`
  border: none;
  height: 5px;
  padding: 10px 0;
  width: 20px;
`;

export const ImagePlusButton = styled.img`
  height: 20px;
  width: 20px;
  padding: 2px;
`;

export const InputStyle = styled.input`
  width: 50px;
  padding-top: 10px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #2f3676;
  outline: 0;
  font-size: 15px;
`;

export const TextAreaStyle = styled.textarea`
  resize: none;
  width: 95%;
  height: 100px;
  border-radius: 10px;
  border: 1px solid #2f3676;
  outline: 0;
  padding: 10px;
  background-color: #dde3e9;
`;

export const FormFooter = styled.div`
  padding: 0;
  height: 80px;
  background-color: #dde3e9;
  width: 100%;
  border-radius: 0px 0px 10px 10px;
`;

export const SendButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #2f3676;
  margin: 0 5px;
  padding: 10px 20px;
  color: white;
  float: right;
  margin-top: 5%;
  margin-right: 5%;
  cursor: pointer;
`;

export const SuccessContainer = styled.div`
  margin: 0;
  position: absolute;
  top: 45%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  color: green;
  font-weight: bold;
  font-size: 23px;
`;

export const ReSendButton = styled.div`
  position: absolute;
  left: 44%;
  top: 60%;
  width: 170px;
`;
