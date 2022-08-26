import * as React from "react";

import ContentContainer from "../../shared/layout/ContentContainer";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";

import { inputs } from "../../constants/constants";

import { useState } from "react";
import { useDispatch } from "../../hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/auth/actions";

interface IRegisterForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState<IRegisterForm>({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(values.email, values.password);
    if (values.passwordConfirm === values.password) {
      dispatch(register(values.email, values.password))
        .then(() => {
          navigate("/friends/1");
        })
        .catch((e: any) => {
          console.log(e);
        });
    } else {
      alert("Passwords do not match");
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
          <h2 className="text-xl font-medium mb-4">
            Pss... That's a fake API, use only mock data
          </h2>
          <h1 className="text-3xl font-bold mb-6">Register</h1>
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
          <p>Confirm Password</p>
          <Input
            className="mb-4"
            {...inputs[2]}
            onChange={onChange}
            value={values.passwordConfirm}
          />

          <Button className="float-right" label="Register" outline />
        </form>
      </div>
    </ContentContainer>
  );
}
