import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

// theme props에 원하는 스타일을 줘서 ThemeProvider의 하위 컴포넌트들의 스타일을 일괄적으로 수정해줄 수 있음
const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
}

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke"
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
