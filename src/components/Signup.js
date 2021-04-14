import React from "react";
import { useForm } from "react-hook-form";

//Using hook form
export default function Signup() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData))
  };

  return (
    <div>
      <h2> Signup </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label>FirstName: </label>
          <input type="text" name="firstName" {...register("firstName", { required: true })} />
          {errors.firstName && <span style={{ color: "red" }}> First Name is required.</span>}
        </p>

        <p>
          <label>Last Name: </label>
          <input type="text" name="lastName" {...register("lastName", { required: true })} />
          {errors.lastName && <span style={{ color: "red" }}> Last Name is required.</span>}
        </p>

        <p>
          <label>Date Of Birth: </label>
          <input type="date" name="dob" {...register("dob", { required: true })} />
          {errors.dob && <span style={{ color: "red" }}> Date Of Birth is required.</span>}
        </p>

        <p>
          <label>Gender: </label>
          <select name="gender"   {...register("gender")}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </p>

        <p>
          <label>Email: </label>
          <input type="email" name="email" {...register("email", { required: true })} />
          {errors.email && <span style={{ color: "red" }}> Email is required.</span>}
        </p>

        <p>
          <label>Confirm Email: </label>
          <input type="email" name="confirmEmail" {...register("confirmEmail", { required: true })} />
          {errors.confirmEmail && <span style={{ color: "red" }}> Confirm Email is required.</span>}
        </p>

        <p>
          <label>Phone Number: </label>
          <input type="text" name="phoneNumber" {...register("phoneNumber", { required: true })} />
          {errors.phoneNumber && <span style={{ color: "red" }}> Phone Number is required.</span>}
        </p>

        <p>
          <button type="submit">Signup</button>
        </p>
      </form>
    </div>
  );
}