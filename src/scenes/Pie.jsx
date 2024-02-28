import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import useTheme from "../Theme";
import { MockDataContacts } from "../Data/MockData";

function Form() {
  const { themeMode } = useTheme();
  const [disable, setDisable] = useState("true")
  const dynoClass = themeMode === "dark" ? "bg-slate-100" : "bg-slate-400 ";
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    setValue
  } = useForm();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const userData = MockDataContacts[0]; //* Assuming there is only one user in MockDataContacts

  //! Populate form fields with user data
  React.useEffect(() => {
    setValue("name", userData.name);
    setValue("email", userData.email);
    setValue("age", userData.age);
    setValue("phone", userData.phone);
    setValue("address", userData.address);
    setValue("city", userData.city);
    setValue("zipCode", userData.zipCode);
    setValue("registrarId", userData.registrarId);
  }, [setValue, userData]);

  const onSubmit = (data) => {
    setDisable(!disable);
    console.log(data);
  };

  return (
    <Box className="mx-5 my-8">
      <Header title="EDIT USER" subtitle="Edit User Profile" />
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
            disabled={disable}
            variant="filled"
            type="text"
            label="Name"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name && "required"}
            className={
              isNonMobile
                ? `col-span-2 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
          />
          <TextField
            fullWidth
            disabled={disable}
            variant="filled"
            type="email"
            label="Email"
            {...register("email", { required: true })}
            error={!!errors.email}
            helperText={errors.email && "required"}
            className={
              isNonMobile
                ? `col-span-2 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
          />
          <TextField
            fullWidth
            disabled={disable}
            variant="filled"
            type="number"
            label="Age"
            {...register("age", { required: true })}
            error={!!errors.age}
            helperText={errors.age && "required"}
            className={
              isNonMobile
                ? `col-span-1 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
          />
          <TextField
            fullWidth
            disabled={disable}
            variant="filled"
            type="tel"
            label="Phone"
            {...register("phone", { required: true })}
            error={!!errors.phone}
            helperText={errors.phone && "required"}
            className={
              isNonMobile
                ? `col-span-3 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
          />
          <TextField
            fullWidth
            disabled={disable}
            variant="filled"
            type="text"
            label="Address"
            {...register("address", { required: true })}
            error={!!errors.address}
            helperText={errors.address && "required"}
            className={
              isNonMobile
                ? `col-span-4 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
          />
          <TextField
            fullWidth
            disabled={disable}
            variant="filled"
            type="text"
            label="City"
            {...register("city", { required: true })}
            error={!!errors.city}
            helperText={errors.city && "required"}
            className={
              isNonMobile
                ? `col-span-2 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
          />
          <TextField
            fullWidth
            disabled={disable}
            variant="filled"
            type="text"
            label="Zip Code"
            {...register("zipCode", { required: true })}
            error={!!errors.zipCode}
            helperText={errors.zipCode && "required"}
            className={
              isNonMobile
                ? `col-span-1 bg-slate-100 ${dynoClass} rounded-sm`
                : "bg-slate-200 rounded-sm"
            }
          />
          <TextField
            fullWidth
            disabled={disable}
            variant="filled"
            type="number"
            label="Registrar ID"
            {...register("registrarId", { required: true })}
            error={!!errors.registrarId}
            helperText={errors.registrarId && "required"}
            className={
              isNonMobile
                ? `col-span-1 bg-slate-100 ${dynoClass} rounded-sm`
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
            {disable?"Edit Content": "Update User"}
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Form;
