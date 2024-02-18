import { signIn } from "@/actions";
import { useForm } from "react-hook-form";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => signIn.bind(null))}
      action={signIn.bind(null)}
    >
      <input {...register("firstName")} placeholder="fname" />
      <input {...register("lastName", { required: true })} placeholder="last" />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register("age", { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" style={{ border: "2px solid red" }} />
    </form>
  );
}
