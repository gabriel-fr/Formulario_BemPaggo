import {
  FormContainer,
  FormHeader,
  BoxImage,
  FormBody,
  ImageLessButton,
  ImagePlusButton,
  ButtonStyle,
  InputStyle,
  TextAreaStyle,
  FormFooter,
  SendButton,
  SuccessContainer,
  ReSendButton,
} from "./styles";
import { useState } from "react";

const FormEtiquetas = () => {
  const [number, setNumber] = useState(0);
  const [params, setParams] = useState(null);
  const [isSend, setIsSend] = useState(false);

  const countNumbers = (action) => {
    if (number === 0 && action === "less") {
      alert("O número não pode ser menor que zero!");
      return;
    }
    action === "plus" ? setNumber(number + 1) : setNumber(number - 1);
  };

  const onSendButton = () => {
    params && number
      ? setIsSend(true)
      : alert("Preencha ao menos quais adesivos e quantos para prosseguir");
  };

  const reSendRequest = () => {
    setIsSend(false);
    setParams(null);
    setNumber(0);
  };

  return (
    <>
      {isSend ? (
        <FormContainer>
          <FormHeader>
            <div>
              <BoxImage src="./box.png" alt="Box" />
            </div>
          </FormHeader>
          <div>
            <SuccessContainer>
              Pedido realizado com sucesso!
              <p style={{ textAlign: "center" }}>Protocolo: #{(Math.random() * 1000).toFixed(0)}</p>
            </SuccessContainer>
          </div>
          <ReSendButton>
            <SendButton onClick={() => reSendRequest()}>Gerar novo pedido</SendButton>
          </ReSendButton>
        </FormContainer>
      ) : (
        <FormContainer>
          <FormHeader>
            <div style={{ fontFamily: "system-ui" }}>
              Formulário <br />
              para compra de <br />
              <b>Pacote de adesivos</b>
            </div>
            <div>
              <BoxImage src="./box.png" alt="Box" />
            </div>
          </FormHeader>
          <FormBody>
            <div>
              <b>Quais adesivos:</b>
              <br />
              <label>
                <input
                  type="checkbox"
                  onChange={(value) => setParams({ ...params, react: value.target.checked })}
                />
                React
              </label>
              <br />

              <label>
                <input
                  type="checkbox"
                  onChange={(value) => setParams({ ...params, vue: value.target.checked })}
                />
                Vue
              </label>
              <br />

              <label>
                <input
                  type="checkbox"
                  onChange={(value) => setParams({ ...params, angular: value.target.checked })}
                />
                Angular
              </label>
            </div>
            <div>
              <b>Quantos adesivos de cada?</b>
              <br />
              <div>
                <ButtonStyle onClick={() => countNumbers("less")}>
                  <ImageLessButton src="./menos.png" />
                </ButtonStyle>
                <InputStyle readOnly min={0} type="number" value={number} />
                <ButtonStyle onClick={() => countNumbers("plus")}>
                  <ImagePlusButton src="./mais.png" />
                </ButtonStyle>
              </div>
            </div>
            <div>
              <b>Observações</b>
              <br />
              <TextAreaStyle placeholder="Alguma dúvida? Recado?" />
            </div>
          </FormBody>
          <FormFooter>
            <div>
              <SendButton onClick={() => onSendButton()}>Enviar</SendButton>
            </div>
          </FormFooter>
        </FormContainer>
      )}
    </>
  );
};

export default FormEtiquetas;
