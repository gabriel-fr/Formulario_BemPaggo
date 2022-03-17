import {
  FormContainer,
  FormHeader,
  BoxImage,
  FormBody,
  ImageLessButton,
  ImagePlusButton,
  ButtonStyle,
} from "./styles";

const FormEtiquetas = () => {
  return (
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
        <form>
          <div>
            <b>Quais adesivos:</b>
            <br />

            <label>
              <input type="checkbox" />
              React
            </label>
            <br />

            <label>
              <input type="checkbox" />
              Vue
            </label>
            <br />

            <label>
              <input type="checkbox" />
              Angular
            </label>
          </div>
          <div>
            <b>Quantos adesivos de cada?</b>
            <br />
            <ButtonStyle>
              <ImageLessButton src="./menos.png" />
            </ButtonStyle>
            <ButtonStyle>
              <ImagePlusButton src="./mais.png" />
            </ButtonStyle>
          </div>
        </form>
      </FormBody>
    </FormContainer>
  );
};

export default FormEtiquetas;
