import styled from "./input.module.css";

function Input(props) {
  return (
    <div className={styled.inputWrapper}>
      <label>{props.data}</label>
      <input name={props.data} type="text" onChange={props.handleChange} />
    </div>
  );
}

export default Input;
