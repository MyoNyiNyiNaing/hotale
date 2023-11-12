import React from "react";
import { BsDisplay, BsFan, BsWifi } from "react-icons/bs";
import {
  GiHotSurface,
  GiKnifeFork,
  GiRotaryPhone,
  GiStrongbox,
  GiWaves,
} from "react-icons/gi";
import { MdOutlineSpa, MdSmokeFree } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import {LuParkingCircle} from "react-icons/lu";
import {SiCodechef} from 'react-icons/si';
import {GrUserWorker} from 'react-icons/gr';
import {FaSwimmingPool} from 'react-icons/fa';
import {MdOutlineLocalLaundryService} from 'react-icons/md'

export const roomAmenities = [
  {
    id: 1,
    icon:<BsDisplay />,
    title: "TV",
  },
  {
    id: 2,
    icon: <BsWifi />,
    title: "Free Wifi",
  },
  {
    id: 3,
    icon: <GiStrongbox />,
    title: "Safe",
  },
  {
    id: 4,
    icon: <MdSmokeFree />,
    title: "None Smoking",
  },
  {
    id: 5,
    icon: <BsFan />,
    title: "Air Conditioning",
  },
  {
    id: 6,
    icon: <GiHotSurface />,
    title: "Heater",
  },
  {
    id: 7,
    icon: <GiRotaryPhone />,
    title: "Phone",
  },
  {
    id: 8,
    icon: <GiWaves />,
    title: "Hair Dryer",
  },
];

export const hotelAmenities = [
  
  {
    id: 1,
    icon: <CgGym />,
    title: "Gym",
  },
  {
    id: 2,
    icon: <LuParkingCircle />,
    title: "Parking",
  },
  {
    id: 3,
    icon: <MdOutlineSpa />,
    title: "Spa",
  },
  {
    id: 4,
    icon: <GiKnifeFork />,
    title: "Restaurant",
  },
  {
    id: 5,
    icon: <SiCodechef />,
    title: "Room Service",
  },
  {
    id: 6,
    icon: <FaSwimmingPool />,
    title: "Swimming Pool",
  },
  {
    id: 7,
    icon: <GrUserWorker />,
    title: "24 Hour Concierge",
  },
  {
    id: 8,
    icon: <MdOutlineLocalLaundryService />,
    title: "In-house Laundry",
  },
];
