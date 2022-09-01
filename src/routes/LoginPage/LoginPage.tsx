import * as React from "react";

import "./LoginPage.css";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import ContentContainer from "../../shared/layout/ContentContainer";
import { useState } from "react";
import { useDispatch } from "../../hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/actions";

import { inputs } from "../../constants/constants";

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

  const handleSubmit = (e: any) => {
    //Form submit function
    e.preventDefault();
    if (e.target.checkValidity()) {
      //check if form is valid
      dispatch(login(values.email, values.password))
        .then(() => {
          navigate("/friends/1");
          //update page to load friends
        })
        .catch((e: any) => {
          alert("Something is wrong" + e);
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
          <h2 className="text-xl font-medium mb-4">
            Try <strong>eve.holt@reqres.in</strong> and <strong>pistol</strong>
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Login</h1>
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
