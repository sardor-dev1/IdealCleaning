import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { auth } from "../../service/index";
import { Notification } from "../../utils/index";
import { signInValidationSchema } from "../../utils/validation";
import { SignInModal } from "../../components/modal";
import LoginImg from "../../assets/LoginImg.svg";

const Index = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (values) => {
    try {
      const response = await auth.sign_in(values);
      if (response.status === 200) {
        navigate("/");
        localStorage.setItem("access_token", response.data.access_token);
        Notification({
          title: "Sign In Successfuly",
          type: "success",
        });
      }
    } catch (error) {
      console.error(error);
      Notification({
        title: "Sign In Failed",
        type: "error",
      });
    }
  };
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <SignInModal open={open} />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#F8F7EF] hidden md:flex justify-center">
          <img className="w-[370px] object-contain" src={LoginImg} alt="" />
        </div>
        <div className="h-screen flex-col flex items-center justify-center p-5">
          <h1 className="text-[35px] font-medium sm:text-[32px] md:text-[42px]">
            Kirish
          </h1>
          <div className="max-w-[400px]">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={signInValidationSchema}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    name="email"
                    type="email"
                    as={TextField}
                    label="kirish"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    as={TextField}
                    label="parol"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="password"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <p
                    className="mb-3 cursor-pointer hover:text-blue-500"
                    onClick={() => setOpen(true)}
                  >
                    Parolni unutdingizmi?
                  </p>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{
                      marginBottom: "8px",
                      background: "#BC8E5B",
                      "&:hover": {
                        background: "#A67D47",
                      },
                    }}
                  >
                    {isSubmitting ? "Signing" : "Sign In"}
                  </Button>
                  <span
                    onClick={() => navigate("/sign-up")}
                    className=" text-blue-300 cursor-pointer hover:text-blue-500"
                  >
                    Ro'yhatdan o'tish
                  </span>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
