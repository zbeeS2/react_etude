import styled, { keyframes } from "styled-components";

const Father = styled.div`
  background-color: ${(props) => props.theme.backgroundColor };
  display: flex;
`;

// 1. styled.개체`` 로 스타일을 줄 수 있음! 적용은 App() 처럼 하면 됨
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// 2. styled(Box) : Box의 모든 속성을 들고오고, 더 추가할 수 있음!
const Circle = styled(Box)`
  border-radius: 50px;
`;

// 3. 이런 식으로 되어있는 스타일을 버튼이 아니라 다른 객체로 활용하고 싶다면
// <Btn as="a" /> 이렇게 하면 a 태그로 됨. div하면 div 되겠지? 
const Btn = styled.button`
  color: white;
  background-color: tomoato;
  border: 0;
  border-radius: 15px;
`;

// 4. .attrs({})를 이용하면 style이 아니라 attribute를 줄 수도 있음(자주 쓰진 않는 방법)
const Input = styled.input.attrs({required: true})`
  background-color: tomato;
`;

// 5. 애니메이션도 줄 수 있음
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;    
  }
`;

const BoxAnime = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 1s linear infinite;
`;

// 6. pseudo selector를 이용해 내부의 element를 타겟할 수 있음
const BoxAnime2 = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display:flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s linear infinite;
  span {
    font-size: 36px;
    // 외부에 span:hover 해주는 대신 내부에 &:hover 해주면 span:hover과 같은 역할을 할 수 있음.
    &:hover {
      font-size: 98px;
    }
  }
`;
/*
  <BoxAnime2>
    <span>☺️</span>
  </BoxAnime2>
*/

// 7. styled component를 pseudo selector로 지정해주면 하위 타겟의 개체 타입에 의존하지 않는 모형을 설계할 수 있음!
const Wrapper = styled(Father)`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const BoxAnime3 = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display:flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;
/*
  <Wrapper>
    <BoxAnime3>
      <Emoji as="p">☺️</Emoji> <!--이렇게 해줘도 잘 작동하는 것임! 이전에는 span {}을 지정해줬기 때문에 span이 아닌 순간 스타일이 적용되지 않음-->
    </BoxAnime3>
  </Wrapper>
*/

// 8. props.<ThemeProvider에서 정의해준 테마 이름>.속성명 으로 테마의 설정값을 적용할 수 있음!
const Title = styled.h1`
  color: ${ (props) => props.theme.textColor };
`;

function App() {
  return (
    <Wrapper>
      <BoxAnime3>
        <Emoji as="p">☺️</Emoji>
      </BoxAnime3>
    </Wrapper>
  );
}

export default App;
