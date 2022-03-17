import styled from "styled-components";

export const FormContainer = styled.div`
  width: 500px;
  background-color: white;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 500px;
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

  > form > div {
    margin-bottom: 30px;
  }

  > form > div > b {
    line-height: 30px;
  }

  > form > div > label {
    line-height: 25px;
  }
`;

export const ButtonStyle = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #2f3676;
  margin: 0 5px;
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
