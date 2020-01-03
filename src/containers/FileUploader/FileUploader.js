import React, { useCallback } from 'react';

function FileUploader() {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles[0].name.split('.')[1].toLowerCase() === 'csv') {
    } else {
      alertify.error('Only CSV files are allowed');
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
