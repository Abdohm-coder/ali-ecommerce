import { Select } from "@mantine/core";
import { Controller } from "react-hook-form";

export default function SelectInput({
  control,
  name,
  label,
  placeholder,
  data,
  error,
  ...rest
}) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Select
              {...field}
              required
              label={label}
              placeholder={placeholder}
              searchable
              nothingFound="No options"
              data={data}
              {...rest}
            />
          );
        }}
      />
      <p className="my-2 text-sm font-medium text-discount-percent">{error}</p>
    </div>
  );
}
