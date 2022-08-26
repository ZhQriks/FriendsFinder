import * as React from "react";

import "./LoginPage.css";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import ContentContainer from "../../shared/layout/ContentContainer";
import { useState } from "react";
import { useDispatch } from "../../hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/actions";

interface ILoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const inputs = [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      dispatch(login(values.email, values.password))
        .then(() => {
          navigate("/friends/1");
          //update page
        })
        .catch((e: any) => {
          alert("Something is wrong");
        });
    } else {
      alert("Form is not valid");
    }
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <ContentContainer>
      <div className="bg-[#F7F8FA] mt-20 pt-20 pb-10 flex flex-col">
        <form
          className="md:max-w-[500px] mx-auto max-w-[280px] mb-20"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <p>Email</p>
          <Input
            className="mb-4"
            {...inputs[0]}
            onChange={onChange}
            value={values.email}
          />
          <p>Password</p>
          <Input
            className="mb-4"
            {...inputs[1]}
            onChange={onChange}
            value={values.password}
          />

          <Button className="float-right" label="Login" outline />
        </form>
      </div>
    </ContentContainer>
  );
}
