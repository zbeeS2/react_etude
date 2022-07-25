import styled from "styled-components";

interface ContainerProps {
    bgColor: string,
    borderColor: string,
}
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border: 3px solid ${props => props.borderColor};
    border-radius: 100px;
`;

interface CircleProps {
    bgColor: string,
    borderColor?: string,
    text?: string,
}

// ??는 optional한 속성이 undefined일 경우 대체해줄 값을 의미함. ||랑 뭐가 다르지?
// 뭐가 다르냐면, ||은 0, NaN, false도 우측의 값으로 대체되지만, ??은 null과 undefined인 경우에만 오른쪽 값으로 대체됨.
// https://medium.com/nerd-for-tech/the-difference-between-and-operators-in-javascript-nodejs-3696b0ce02ff
// text = "default text" 형식으로 주면, optional props에 값이 주어지지 않았을 경우 기본값을 지정할 수 있음.
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? "transparent"}>
            {text}
        </Container>
    );
}

export default Circle;

interface PlayerShape {
    name: string,
    age: number,
}
const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({ name: "kim", age: 10 });
sayHello({ name: "hi", age: 12 });