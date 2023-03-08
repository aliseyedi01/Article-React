import styled from "./textarea.module.css";

function Textarea(props) {
  return (
    <div className={styled.textareaWrapper}>
      <label>TextArea</label>
      <textarea onChange={props.handleChange}></textarea>
    </div>
  );
}

export default Textarea;
