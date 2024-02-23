import { Header, LayoutContainer, Input, Dropzone, Paragraph, UploadButton } from "./layout";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { blob } from "stream/consumers";

function App() {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <LayoutContainer>
        <Header>Background Remover</Header>
        <Dropzone {...getRootProps()}>
          <Input {...getInputProps()} />
          <UploadButton>Faça Upload</UploadButton>
          <Paragraph>ou arraste uma imagem</Paragraph>
        </Dropzone>
      </LayoutContainer>
    </>
  );
}

export default App;
