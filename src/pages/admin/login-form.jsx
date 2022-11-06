import { useToggle, upperFirst } from "@mantine/hooks";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
} from "@mantine/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("الرجاء ادخال ايميل صحيح")
    .required("الايميل مطلوب"),
  password: yup.string().required("كلمة المرور ضرورية"),
});

export default function AuthenticationForm(props) {
  const [type, toggle] = useToggle(["login", "register"]);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = () => {};

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
      </form>
    </Container>
  );
}
