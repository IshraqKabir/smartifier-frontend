import { useState } from "react";
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  Typography,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

interface IProps {
  value: any;
  handleChange: () => void;
  touched: boolean;
  error: string;
  id?: string;
  label?: string;
}

export default function PasswordField({
  value,
  handleChange,
  touched,
  error,
  id = "password",
  label = "Password",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl
      variant="outlined"
      fullWidth={true}
      style={{ margin: "0.5rem 0rem" }}
      error={touched && Boolean(error)}
    >
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id={id}
        name={id}
        label={label}
        fullWidth={true}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={handleChange}
        error={touched && Boolean(error)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((state) => !state)}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
      {touched && error && (
        <Typography variant="caption" color="error">
          {error}
        </Typography>
      )}
    </FormControl>
  );
}
