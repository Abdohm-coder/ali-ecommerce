import {
  NumberInput,
  Radio,
  TextInput,
  ActionIcon,
  Button,
  Group,
  Paper,
  Checkbox,
  Divider,
} from "@mantine/core";
import { useState } from "react";

function ProductForm({ setOpened }) {
  const [firstOffer, setFirstOffer] = useState(false);
  const [secondOffer, setSecondOffer] = useState(false);
  const [thirdOffer, setThirdOffer] = useState(false);

  console.log(firstOffer);

  const Offer = () => {
    const [discountType, setDiscountType] = useState("");
    return (
      <div className="w-full">
        <NumberInput
          radius={6}
          label="الكمية"
          placeholder="أكتب الكمية في هذا التخفيض"
          min={0}
          mb="sm"
          className="w-full"
        />
        <Radio.Group
          label="إختر نوع التخفيض :"
          value={discountType}
          onChange={setDiscountType}>
          <Radio label="النسبة المئوية" value="percentage" />
          <Radio label="السعر بعد التخفيض" value="price" />
          <Radio label="دون تخفيض" value="" />
        </Radio.Group>

        {discountType === "price" && (
          <NumberInput
            radius={6}
            label="السعر بعد التخفيض"
            placeholder="أكتب السعر بعد التخفيض"
            min={0}
            className="w-full"
          />
        )}
        {discountType === "percentage" && (
          <NumberInput
            radius={6}
            label="النسبة المئوية للتخفيض"
            placeholder="أكتب النسبة المئوية للتخفيض"
            min={0}
            max={100}
            className="w-full"
          />
        )}
      </div>
    );
  };

  return (
    <form className="flex flex-wrap gap-4">
      <TextInput
        radius={6}
        label="إسم المنتج"
        placeholder="أكتب إسم المنتج"
        className="w-full"
        withAsterisk
      />
      <TextInput
        radius={6}
        label="سعر المنتج"
        placeholder="أكتب سعر المنتج قبل التخفيض"
        className="w-full"
        withAsterisk
      />
      <Divider
        my="sm"
        className="w-full"
        variant="solid"
        label="العروض"
        labelPosition="center"
      />
      <Paper shadow="xs" className="w-full p-2">
        <Checkbox
          label="تفعيل العرض"
          mb="sm"
          checked={firstOffer}
          onChange={(event) => setFirstOffer(event.currentTarget.checked)}
        />
        {firstOffer && <Offer />}
      </Paper>

      <Paper shadow="xs" className="w-full p-2">
        <Checkbox
          label="تفعيل العرض"
          mb="sm"
          checked={secondOffer}
          onChange={(event) => setSecondOffer(event.currentTarget.checked)}
        />
        {secondOffer && <Offer />}
      </Paper>

      <Paper shadow="xs" className="w-full p-2">
        <Checkbox
          label="تفعيل العرض"
          mb="sm"
          checked={thirdOffer}
          onChange={(event) => setThirdOffer(event.currentTarget.checked)}
        />
        {thirdOffer && <Offer />}
      </Paper>
      <Divider my="sm" className="w-full" />
      <Group className="w-full">
        <Button
          variant="filled"
          className="hover:bg-btn-dark bg-btn-dark/90 flex-1">
          تأكيد
        </Button>
        <Button
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-50 "
          onClick={() => setOpened(false)}>
          إلغاء
        </Button>
      </Group>
    </form>
  );
}

export default ProductForm;
