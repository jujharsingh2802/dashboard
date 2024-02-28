import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import useTheme from "../Theme";

function Form() {
  const {themeMode} = useTheme()
  const dynoClass = themeMode==="dark"?"bg-slate-100":"bg-slate-600 "
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box className="mx-5 my-8">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          className="grid gap-5"
          style={{
            gridTemplateColumns: isNonMobile
              ? "repeat(4, minmax(0, 1fr))"
              : "1fr",
          }}
          sx={{
            "& .MuiFormHelperText-root": {
              background: "transparent !important",
            },
          }}
        >
          <TextField
            sx={{
              "& .MuiFormHelperText-root": {
                backgroundColor: "transparent !important",
              },
            }}
            fullWidth
            variant="filled"
            type="text"
            label="First Name"
            {...register("firstName", { required: true })}
            error={!!errors.firstName}
            helperText={errors.firstName && "required"}
            className={
              isNonMobile
                ? `col-span-2 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
          />
          <TextField
            sx={{
              "& .MuiFormHelperText-root": {
                backgroundColor: "transparent !important",
              },
            }}
            fullWidth
            variant="filled"
            type="text"
            label="Last Name"
            {...register("lastName", { required: true })}
            error={!!errors.lastName}
            helperText={errors.lastName && "required"}
            className={
              isNonMobile
                ? `col-span-2 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
          />
          <TextField
            sx={{
              "& .MuiFormHelperText-root": {
                backgroundColor: "transparent !important",
              },
            }}
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            error={!!errors.email}
            helperText={errors.email && "invalid email"}
            className={
              isNonMobile
                ? `col-span-4 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
          />
          <TextField
            sx={{
              "& .MuiFormHelperText-root": {
                backgroundColor: "transparent !important",
              },
            }}
            fullWidth
            variant="filled"
            type="text"
            label="Contact Number"
            {...register("contact", {
              required: true,
              pattern:
                /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
            })}
            error={!!errors.contact}
            helperText={errors.contact && "Phone number is not valid"}
            className={
              isNonMobile
                ? `col-span-4 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
          />
          <TextField
            
            fullWidth
            variant="filled"
            type="text"
            label="Address 1"
            {...register("address1", { required: true })}
            error={!!errors.address1}
            helperText={errors.address1 && "required"}
            className={
              isNonMobile
                ? `col-span-4 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
            sx={{
              "& .MuiFormHelperText-root": {
                backgroundColor: "transparent !important",
              },
            }}
          />
          <TextField
            sx={{
              "& .MuiFormHelperText-root": {
                backgroundColor: "transparent !important",
              },
            }}
            fullWidth
            variant="filled"
            type="text"
            label="Address 2"
            {...register("address2", { required: true })}
            error={!!errors.address2}
            helperText={errors.address2 && "required"}
            className={
              isNonMobile
                ? `col-span-4 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
          />
        </Box>
        <Box className="flex justify-end mt-5">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            disabled={!isDirty}
          >
            Create New User
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Form;
