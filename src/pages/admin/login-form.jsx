import { upperFirst } from "@mantine/hooks";
import {
  TextInput,
  PasswordInput,
  Text,
  Group,
  Button,
  Stack,
  Container,
} from "@mantine/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("الرجاء ادخال ايميل صحيح")
    .required("الايميل مطلوب"),
  password: yup.string().required("كلمة المرور ضرورية"),
});

export default function AuthenticationForm({ logIn }) {
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (values) => {
    try {
      await logIn(values.email, values.password);
      setError(false);
      // navigate(ROUTES.HOME);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Container
      size={400}
      px="xs"
      className="h-screen flex flex-col justify-center">
      <Text size="lg" weight={500}>
        مرحبا بك في لوحة التحكم، الرجـاء تسجيل الدخول
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <TextInput
            required
            label="الايميل الالكتروني"
            placeholder="أدخل الايميل الالكتروني"
            {...register("email")}
            error={errors?.email?.message}
          />

          <PasswordInput
            required
            label="كلمة المرور"
            placeholder="أدخل كلمة المرور"
            {...register("password")}
            error={errors?.password?.message}
          />
        </Stack>

        <Group position="apart" mt="xl">
          <Button
            type="submit"
            className="hover:bg-btn-dark bg-btn-dark/90 flex-1">
            تسجيل الدخول
          </Button>
        </Group>
        {error && (
          <span className="text-center w-full text-red-600 mt-2">
            كلمة المرور أو الايميل خاطىء
          </span>
        )}
      </form>
    </Container>
  );
}
