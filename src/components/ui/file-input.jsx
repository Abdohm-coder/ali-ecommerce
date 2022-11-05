import { useDropzone } from "react-dropzone";
import { Controller } from "react-hook-form";

export default function FileInput({
  control,
  name,
  multiple = false,
  ...rest
}) {
  return (
    <Controller
      render={({ onChange }) => (
        <Dropzone
          multiple={multiple}
          onChange={(e) =>
            onChange(multiple ? e.target.files : e.target.files[0])
          }
          {...rest}
        />
      )}
      name={name}
      control={control}
      defaultValue=""
    />
  );
}

const Dropzone = ({ multiple, onChange, label, text, ...rest }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple,
    ...rest,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps({ onChange })} />
      {isDragActive ? <p>{label}</p> : <p>{text}</p>}
    </div>
  );
};
