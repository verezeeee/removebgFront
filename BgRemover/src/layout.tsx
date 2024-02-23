import styled from "styled-components";

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 20px);
  padding: 0.2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 12px;
  border: none;
  background-color: #ffffff;
  color: #000;
  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;

export const Header = styled.h1`
  font-size: 2rem;
  margin: 0.5rem;
  color: #383838;
`;

export const Dropzone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 12px;
  border: 2px dashed #424242;
  background-color: #f0f0f0;
  color: #000;
  height: 280px;
  width: 340px;
  box-shadow: 0px 0px 56px rgba(69, 69, 69, 0.2);
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem;
  font-weight: bold;
  color: #646464;
`;

export const UploadButton = styled.button`
  padding: 10px 32px;
  font-size: 24px;
  margin: 0.5rem;
  border-radius: 9999px;
  border: none;
  background-color: #0f70e6;
  color: #f0f0f0;
  font-weight: bold;
  height: 58px;
  width: 210px;
  &:hover {
    background-color: #1b70d8;
    cursor: pointer;
  }
`;

export default Layout;
