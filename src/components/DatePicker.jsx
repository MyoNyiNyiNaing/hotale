import React from 'react'
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AiFillCaretDown } from "react-icons/ai";
import { MobileDatePicker } from '@mui/x-date-pickers';

const DatePickerReservation = () => {
  const [value, setValue] = React.useState(dayjs(Date().toString()));

  return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
                slots={{
                  openPickerIcon: AiFillCaretDown,
                }}
              
                format="MMMM DD,YYYY"
                sx={{
                  backgroundColor:"#f5f5f5",
                  "& .MuiInputBase-input ": {
                    padding: "25px",
                    width:"100%"
                  },
                  "& .MuiOutlinedInput-notchedOutline":{
                    outline:"none",
                    border:"none",
                  },
                }}
              />
            </LocalizationProvider>
    </div>
  )
}

export default DatePickerReservation