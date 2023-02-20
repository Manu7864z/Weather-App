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
            <StyledButton onClick={() => onDeleteActivity(activity.id)}>
              X
            </StyledButton>
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
  align-items: center;
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
  height: 40px;
  width: 90%;
  border: 3px #231a839e outset;
  opacity: 0.9;
  box-shadow: 0 5px 5px 0px #0c0b18;
  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  cursor: pointer;
`;

const StyledH2 = styled.h2`
  text-align: center;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin-top: 20px;
  margin-bottom: -10px;
`;

const StyledButton = styled.button`
  background-color: #3d2682;
  border-radius: 10px;
  border: 2px #fefefe outset;
  box-shadow: 0 10px 10px 2px #0b0c0d;
  color: #f4eded;
  font-family: "Roboto", sans-serif;
  position: relative;
  top: -10px;
  height: 30px;
  width: 30px;
`;
