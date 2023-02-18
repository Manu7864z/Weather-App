import styled from "styled-components";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <StyledH2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </StyledH2>
      <StyledList>
        {activities.map((activity) => (
          <StyledListItem key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>X</button>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StyledListItem = styled.li`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 5px;
  background-color: #3d2682;
  color: #fffcfc;
  font-family: "Roboto", sans-serif;
  text-align: center;
  height: 20px;
  width: 90%;
  border: 3px #261d899e outset;
  opacity: 0.9;
  box-shadow: 0 5px 5px 0px #0c0b18;

  cursor: progress;

  &:hover {
    background-color: #79797b;
  }
`;

const StyledH2 = styled.h2`
  text-align: center;
  font-family: "Roboto", sans-serif;
`;
