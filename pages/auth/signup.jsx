import { IoIosArrowBack } from "react-icons/io";
import { SignUpStyles } from "../../public/components/authStyles";
import { CustomInput } from "../../public/components/authStyles";
import { CustomButton } from "../../public/components/authStyles";
import { useRouter } from "next/router";
import AuthLayout from "../../public/components/authLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import SearchState from "../../public/components/Select/SelectState";
import SearchCountry from "../../public/components/Select/SelectCountry";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../public/redux/store";
import { signUp } from "../../public/redux/reducers/auth/thunkAction";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Enter password"),
  username: Yup.string().required("Username is required"),
  country: Yup.string(),
  state: Yup.string(),
  firstName: Yup.string().required("Enter first name"),
  lastName: Yup.string().required("Enter last name"),
});

const SignUp = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(1);
  const [selectedState, setSelectedState] = useState("");
  const dispatch = useDispatch();

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
      username: "",
      country: "Nigeria",
      state: "Lagos",
      firstName: "",
      lastName: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await dispatch(
        signUp({ ...values, country: "Nigeria", state: "Lagos" })
      ).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          console.log(values);
          router.push("/auth/login");
        }
      });
      console.log(values);
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

          <h1>Create a new account</h1>
          <p className="proceed">Kindly enter your details and proceed</p>
          <div className="input_container">
            <CustomInput>
              <p>First name</p>
              <input
                placeholder="Enter your first name"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!errors.firstName && touched.firstName ? (
                <span>{errors.firstName}</span>
              ) : null}
            </CustomInput>
            <CustomInput>
              <p>Last name</p>
              <input
                placeholder="Enter your lastname"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!errors.lastName && touched.lastName ? (
                <span>{errors.lastName}</span>
              ) : null}
            </CustomInput>
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
              <p>Username</p>
              <input
                placeholder="Enter username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!errors.username && touched.username ? (
                <span>{errors.username}</span>
              ) : null}
            </CustomInput>

            <p>Select country</p>
            <SearchCountry setSelectedCountry={setSelectedCountry} />

            <p>Select state</p>
            <SearchState
              selectedCountry={selectedCountry}
              setSelectedState={setSelectedState}
            />

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
              {
                loading === 'pending' ? <Spin /> : 'Next'
              }
            </CustomButton>
            <div className="account">
              Already a user?{" "}
              <span
                onClick={() => router.push("/auth/login")}
                style={{ color: "#DE8E0E", cursor: "pointer" }}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </SignUpStyles>
    </AuthLayout>
  );
};

export default SignUp;
