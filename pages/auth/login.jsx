import { IoIosArrowBack } from "react-icons/io";
import { SignUpStyles } from "../../public/components/authStyles";
import { CustomInput } from "../../public/components/authStyles";
import { CustomButton } from "../../public/components/authStyles";
import { useRouter } from "next/router";
import AuthLayout from "../../public/components/authLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Spin } from "antd";
import { useToast } from "@chakra-ui/react";
import { login } from "../../public/redux/reducers/auth/thunkAction";
import { useAppDispatch, useAppSelector } from "../../public/redux/store";
import { useDispatch } from "react-redux";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Enter password"),
});

const Login = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const { loading } = useAppSelector(({ authReducer }) => authReducer);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await dispatch(login(values)).then((res) => {
        console.log(res);
        if (res.meta.requestStatus === "fulfilled") {
          
          toast({
            title: "Login success.",
            description: "Welcome back",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          router.push("/dashboard")
        } 
      });
    },
  });

  return (
    <AuthLayout>
      <SignUpStyles>
        <div className="container">
          <div className="arrow">
            <IoIosArrowBack fill="#DE8E0E" size="20px" />
            <h2>Back</h2>
          </div>

          <h1>Login to Test App</h1>
          <p className="proceed">Kindly enter your details and proceed</p>
          <div className="input_container">
            <CustomInput>
              <p>Email address</p>
              <input
                placeholder="Enter your email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!errors.email && touched.email ? (
                <span>{errors.email}</span>
              ) : null}
            </CustomInput>

            <CustomInput>
              <p>Password</p>
              <input
                placeholder="Enter your password"
                name="password"
                type={show ? "text" : "password"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!errors.password && touched.password ? (
                <span>{errors.password}</span>
              ) : null}
              <div onClick={() => setShow(!show)} className="eye">
                {show ? (
                  <AiOutlineEye size="20px" />
                ) : (
                  <AiOutlineEyeInvisible size="20px" />
                )}
              </div>
            </CustomInput>

            <CustomButton onClick={() => handleSubmit()}>
              {loading === "pending" ? <Spin /> : "Next"}
            </CustomButton>
            <div className="account">
              Not registered?{" "}
              <span
                onClick={() => router.push("/auth/signup")}
                style={{ color: "#DE8E0E", cursor: "pointer" }}
              >
                Create account
              </span>
            </div>
          </div>
        </div>
      </SignUpStyles>
    </AuthLayout>
  );
};

export default Login;
