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
import { ROUTES } from "../../utils/routes";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("الرجاء ادخال ايميل صحيح")
    .required("الايميل مطلوب"),
  password: yup.string().required("كلمة المرور ضرورية"),
});

export default function AuthenticationForm({ logIn }) {
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

  let navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await logIn(values.email, values.password);
      navigate(ROUTES.HOME);
    } catch (err) {
      alert(err.message);
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
      </form>
    </Container>
  );
}
