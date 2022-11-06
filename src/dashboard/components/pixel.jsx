import { Paper } from "@mantine/core";

export default function Pixel() {
  return (
    <Paper
      shadow="xs"
      radius={6}
      className="flex flex-col flex-1 h-32 p-2 border-[1px] border-light">
      <h3 className="text-dark">"فايسبوك بيكسل</h3>
      <div className="grid place-items-center h-full flex-1 ">
        <p className="text-4xl"></p>
      </div>
    </Paper>
  );
}
