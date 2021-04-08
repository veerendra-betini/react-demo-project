import React from "react";
import { useForm } from "react-hook-form";

export default function ForgotPassword() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData))
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label>Last Name: </label>
          <input type="text" name="lastName" {...register("lastName", { required: true })} />
          {errors.lastName && <span style={{ color: "red" }}> Last Name is required.</span>}
        </p>

        <p>
          <label>Email: </label>
          <input type="text" name="email" {...register("email", { required: true })} />
          {errors.email && <span style={{ color: "red" }}> Email is required.</span>}
        </p>

        <p>
          <button type="submit">Continue</button>
        </p>
      </form>
    </div>
  );
}