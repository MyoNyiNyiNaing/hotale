import React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AiFillCaretDown } from "react-icons/ai";

const CustomOpenPickerIcon = () => {
    return <AiFillCaretDown style={{ fontSize: 10, color: "black" }} />;
  };

const DatePickerHome = () => {
  const [value, setValue] = React.useState(dayjs(Date().toString()));

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slots={{
            openPickerIcon: CustomOpenPickerIcon,
          }}
          format="MMM DD, YYYY"
          sx={{
            backgroundColor: "#ffffff",
            "& .MuiInputBase-input ": {
              padding: "5px",
              width: "100%",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              outline: "none",
              border: "none",
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePickerHome;
