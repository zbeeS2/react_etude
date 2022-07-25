import { useState } from "react";
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

function Circle2({ bgColor, borderColor, text = "default text" }: CircleProps) {
    // useState()은 기본적으로 입력받는 인자를 기반으로 타입을 추론해내지만, 만약 여러 타입을 받아서 사용할 수 있도록 해주고 싶다면 아래처럼 쓰면 됨.
    // 자주 있는 일은 아님! 일반적으로 state는 결정되는 순간 타입이 변경되는 일은 드뭄.
    const [value, setValue] = useState<string|number>(0);
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? "transparent"}>
            {text}
        </Container>
    );
}

export default Circle2;

interface PlayerShape {
    name: string,
    age: number,
}
const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({ name: "kim", age: 10 });
sayHello({ name: "hi", age: 12 });