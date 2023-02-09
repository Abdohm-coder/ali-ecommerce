import { Group, Image, SimpleGrid, Text } from "@mantine/core";
import { TbUpload, TbDownload, TbX } from "react-icons/tb";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { Controller } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function FileInput({
  control,
  name,
  setValue,
  label,
  text,
  multiple = false,
  onChange = null,
  getValues = () => {},
  simple = false,
  ...rest
}) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (getValues(name) && onChange && simple) onChange(getValues(name));
  }, []);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });

  const Images = () => {
    const type_file = typeof getValues(name);
    const image = getValues(name);
    return type_file === "string" ? (
      <Image src={image} />
    ) : (
      image.length > 0 && (
        <>
          {image.map((url, index) => (
            <Image key={`index: ${index}: ${url}`} src={url} />
          ))}
        </>
      )
    );
  };

  return (
    <div className="flex flex-col">
      {onChange !== null ? (
        <Dropzone
          {...rest}
          onDrop={(file) => {
            setFiles(file);
            onChange(multiple ? file.map((f) => f) : file[0]);
          }}
          onReject={() => {
            toast.warn("عذرا، لا يمكن قبول الملف");
          }}
          maxSize={3 * 1024 ** 2}
          multiple={multiple}
          accept={IMAGE_MIME_TYPE}>
          <Group
            position="center"
            spacing="xl"
            style={{
              minHeight: 160,
              pointerEvents: "none",
              maxWidth: 300,
            }}>
            <Dropzone.Accept>
              <TbUpload size={50} fill="currentColor" stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <TbX size={50} fill="currentColor" stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <TbDownload fill="currentColor" size={50} stroke={1.5} />
            </Dropzone.Idle>

            <div className="text-center">
              <Text size="xl" inline>
                {label}
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                {text}
              </Text>
            </div>
          </Group>
        </Dropzone>
      ) : (
        <Controller
          render={() => (
            <Dropzone
              {...rest}
              onDrop={(file) => {
                setFiles(file);
                setValue(
                  name,
                  multiple ? file.map((f) => f) : file[0]
                );
              }}
              onReject={() => {
                toast.warn("عذرا، لا يمكن قبول الملف");
              }}
              maxSize={3 * 1024 ** 2}
              multiple={multiple}
              accept={IMAGE_MIME_TYPE}>
              <Group
                position="center"
                spacing="xl"
                style={{
                  minHeight: 160,
                  pointerEvents: "none",
                  maxWidth: 300,
                }}>
                <Dropzone.Accept>
                  <TbUpload size={50} fill="currentColor" stroke={1.5} />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <TbX size={50} fill="currentColor" stroke={1.5} />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <TbDownload fill="currentColor" size={50} stroke={1.5} />
                </Dropzone.Idle>

                <div className="text-center">
                  <Text size="xl" inline>
                    {label}
                  </Text>
                  <Text size="sm" color="dimmed" inline mt={7}>
                    {text}
                  </Text>
                </div>
              </Group>
            </Dropzone>
          )}
          name={name}
          control={control}
          defaultValue={multiple ? [] : ""}
        />
      )}
      <SimpleGrid
        cols={
          files.length > 4 || getValues(name)?.length > 4
            ? 4
            : files.length || getValues(name)?.length
        }
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        mt={previews.length > 0 || getValues(name)?.length > 0 ? "xl" : 0}>
        {previews}
        {getValues(name) && previews.length < 1 && <Images />}
      </SimpleGrid>
    </div>
  );
}
