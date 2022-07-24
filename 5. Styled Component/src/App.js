import styled from "styled-components";

const Fatehr = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Fatehr>
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Box bgColor="tomato"></Box>
    </Fatehr>
  );
}
export default App;
