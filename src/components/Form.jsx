import { uid } from "uid";
import styled from "styled-components";

export default function ActivityForm({ onAddActivity }) {
  const Form = styled.form`
    background-color: #3d2682;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 3px;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    border: 3px #261d899e outset;
    opacity: 0.9;
    box-shadow: 0 10px 10px 2px #0b0c0d;
    color: #f4eded;
    font-family: "Roboto", sans-serif;
  `;

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.elements.input;
    const isForGoodWeather = form.elements.goodWeather.checked;
    const data = {
      id: uid(),
      name: input.value,
      isForGoodWeather: isForGoodWeather,
    };
    onAddActivity(data);
    event.target.reset();
    event.target.elements.input.focus();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Activities</h1>
      <label htmlFor="input">Activity: </label>
      <input id="input" type="text" />
      <br />
      <div>
        <label htmlFor="goodWeather">Good Weather Activity: </label>
        <input id="goodWeather" type="checkbox" />
      </div>
      <button type="submit">Add</button>
    </Form>
  );
}
