import React, { useEffect, useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import {
  BsAt,
  BsBriefcase,
  BsBuildings,
  BsFillPatchCheckFill,
  BsPeople,
  BsPerson,
  BsPhone,
  BsStickies,
} from "react-icons/bs";
import { Button, Tooltip } from "@mui/material";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import { Group, TextInput, NumberInput, Loader } from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Footer from "../Components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditUserInfosMutation,
  useGetDetailUserInfosQuery,
} from "../redux/api/userInfosApi";
import { notifications } from "@mantine/notifications";
import { toast } from "react-toastify";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("female");
  const [dob, setDob] = useState("");
  const [photo, setPhoto] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { id } = useParams();
  const { data: admin, isLoading } = useGetDetailUserInfosQuery(id);

  const nav = useNavigate();

  const [editUserInfos] = useEditUserInfosMutation();

  const userinfo = sessionStorage.getItem("userinfo");
  const userInfos = JSON.parse(userinfo);

  useEffect(() => {
    // const date = new Date(admin?.dob);
    setName(admin?.name);
    setEmail(admin?.email);
    setPhone(admin?.phone);
    setGender(admin?.gender);
    setDob(admin?.dob);
    setPhoto(admin?.photo);
    setAddress(admin?.address);
    setCity(admin?.city);
    setDepartment(admin?.department);
    setUserName(admin?.username);
    setPassword(admin?.password);
  }, [admin]);

  const date = new Date(admin?.dob);
  console.log(date); //Sun Oct 18 1998 00:00:00 GMT+0630 (Myanmar Time)

  const aboutItem = [
    {
      icon: <BsPerson />,
      name: admin?.name,
    },
    {
      icon: <BsBriefcase />,
      name: admin?.department,
    },
    {
      icon: <BsBuildings />,
      name: admin?.city,
    },
  ];

  const contactItem = [
    {
      icon: <BsAt />,
      name: admin?.email,
    },
    {
      icon: <BsPhone />,
      name: admin?.phone,
    },
  ];

  const teamItem = [
    {
      icon: <BsPeople />,
      name: "Member of 7 teams",
    },
    {
      icon: <BsStickies />,
      name: "Working on 8 projects",
    },
  ];

  const editHandler = (e) => {
    e.preventDefault();
    const newData = {
      id,
      name,
      email,
      phone,
      gender,
      dob,
      photo,
      address,
      city,
      department,
      username,
      password
    };
    editUserInfos(newData);
    setTimeout(() => {
      const sessionStoragepassword = sessionStorage.getItem('password');
      if (sessionStoragepassword !== password ) {
      nav("/login");
    }else{
      toast.success("Edited Successfully.");
      nav(`/profile/${admin?.id}`);
    }
    }, "2000");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="custom-loader"></div>
      </div>
    );
  }

  // const form = useForm({
  //   initialValues: {
  //     name: `${userInfos.name}`,
  //     email: `${userInfos.email}`,
  //     phone: `${userInfos.phoneno}`,
  //     gender: `${userInfos.gender}`,
  //     dob: `${userInfos.dob}`,
  //     image: `${userInfos.image}`,
  //     address: `${userInfos.address.address}`,
  //     city: `${userInfos.address.city}`,
  //     department: `${userInfos.department}`
  //   },

  // validate: {
  //   name: hasLength({ min: 2, max: 10 }),
  //   job: isNotEmpty(),
  //   email: isEmail(),
  //   favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/),
  //   age: isInRange({ min: 18, max: 99 }),
  // },
  // });

  return (
    <Box sx={{ display: "flex" }}>
      <Dashboard />
      <Box
        component="main"
        className=" pt-[57px] sm:pt-[63px]"
        sx={{ flex: "auto" }}
      >
        {/* <div className="flex flex-wrap w-[30rem] justify-center mx-auto items-center mt-3">
       {swal ?  <Alert severity="success" className="animate__animated animate__bounceInDown">"Good job!", You Edited Successfully - check it out!</Alert> : " "} 
      </div> */}
        <div className="w-full px-3 md:px-6 py-7">
          {/* Start Write Here Profile */}
          <div className="grid grid-cols-1 gap-4 sm:px-10 mx-auto">
            <div className="h-[7.5rem] sm:h-[10rem] rounded-xl p-[1rem] bg-[#16a34a0d] "></div>{" "}
            {/* bg-[url('https://htmlstream.com/preview/front-dashboard-v2.1.1/assets/img/1920x400/img1.jpg')] w-auto object-cover*/}
            <div className="flex justify-center items-center -mt-[100px] sm:-mt-[125px] px-3">
              <div className="flex flex-col items-center gap-2">
                <div className=" bg-white rounded-full p-1">
                  <img
                    src={photo}
                    className=" rounded-full w-[5.875rem] h-[5.875rem] sm:w-[7.875rem] sm:h-[7.875rem] object-cover"
                    alt=""
                  />
                  {/* https://htmlstream.com/preview/front-dashboard-v2.1.1/assets/img/160x160/img6.jpg */}
                </div>
                <div className="flex justify-center items-center gap-1">
                  <p className=" text-lg sm:text-2xl text-[#1e2022] font-semibold">
                    {name}
                  </p>
                  <Tooltip title="Top endorsed" placement="top" arrow>
                    <Button
                      sx={{
                        minWidth: 0,
                        padding: 0,
                        ":hover": {
                          bgcolor: "white",
                        },
                      }}
                    >
                      <BsFillPatchCheckFill
                        size={22}
                        fill="#377dff"
                        className="cursor-pointer"
                      />
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card */}
        <div className="w-full px-3 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:px-10 mx-auto">
            <div className="md:col-span-12 lg:col-span-4 ">
              <div className="border border-1 border-[var(--border-color)] rounded-lg shadow-md overflow-hidden sticky top-[82px] bg-[#FFF]">
                {/* header */}
                <div className=" border-b border-b-[var(--border-color)]">
                  <h1 className=" p-5 text-[var(--text-color)] font-semibold text-lg">
                    Profile
                  </h1>
                </div>

                {/* bodyy */}
                <div className=" p-5">
                  {/* aboutItem */}
                  <h3 className=" text-[var(--card-text-color)] uppercase text-sm">
                    About
                  </h3>
                  <ul className="pt-1">
                    {aboutItem?.map((item, i) => {
                      return (
                        <li className="flex items-center gap-2 py-1 " key={i}>
                          <span className="text-[var(--card-text-color)] ">
                            {item.icon}
                          </span>
                          {/* <BsBuildings size={17} className="text-[var(--card-text-color)] "/> */}
                          <span className="mt-[2px]">{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* contactItem */}
                  <h3 className=" text-[var(--card-text-color)] uppercase text-sm pt-5">
                    Contacts
                  </h3>
                  <ul className="pt-1">
                    {contactItem?.map((item, i) => {
                      return (
                        <li className="flex items-center gap-2 py-1 " key={i}>
                          <span className="text-[var(--card-text-color)] ">
                            {item.icon}
                          </span>
                          {/* <BsBuildings size={17} className="text-[var(--card-text-color)] "/> */}
                          <span className="mt-[2px]">{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* teamItem */}
                  <h3 className=" text-[var(--card-text-color)] uppercase text-sm pt-5">
                    teams
                  </h3>
                  <ul className="pt-1">
                    {teamItem?.map((item, i) => {
                      return (
                        <li className="flex items-center gap-2 py-1 " key={i}>
                          <span className="text-[var(--card-text-color)] ">
                            {item.icon}
                          </span>
                          {/* <BsBuildings size={17} className="text-[var(--card-text-color)] "/> */}
                          <span className="mt-[2px]">{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-12 lg:col-span-8">
              {/************ Personal Information  *************/}
              <div className="border border-1 border-[var(--border-color)] rounded-lg shadow-md overflow-hidden">
                {/* shadow-[0 0.375rem 0.75rem rgba(140,152,164,.075)] */}
                {/* header */}
                <div className=" border-b border-b-[var(--border-color)]">
                  <h1 className=" p-5 text-[var(--text-color)] font-semibold text-lg">
                    Personal Information
                  </h1>
                </div>

                {/* body */}
                <div className="p-5">
                  <form
                    action=""
                    // component="form"
                    // maw={400}
                    // mx="auto"
                    // onSubmit={form.onSubmit(() => {})}
                    onSubmit={editHandler}
                  >
                    <div className=" grid grid-cols-12 py-3">
                      <label
                        htmlFor="name"
                        className=" col-span-12 md:col-span-3 my-auto text-[var(--text-color)]"
                      >
                        Full Name
                      </label>
                      <TextInput
                      required
                        className=" col-span-12 md:col-span-9"
                        placeholder="Your full name"
                        withAsterisk
                        // {...form.getInputProps("name")}
                        defaultValue={name}
                        // value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className=" grid grid-cols-12 py-3">
                      <label
                        htmlFor="email"
                        className=" col-span-12 md:col-span-3 my-auto text-[var(--text-color)]"
                      >
                        Email
                      </label>
                      <TextInput
                        readOnly
                        required
                        className=" col-span-12 md:col-span-9"
                        placeholder="Your email"
                        withAsterisk
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                        // {...form.getInputProps("email")}
                      />
                    </div>

                    <div className=" grid grid-cols-12 py-3">
                      <label
                        htmlFor="phone"
                        className=" col-span-12 md:col-span-3 my-auto text-[var(--text-color)]"
                      >
                        Phone{" "}
                        <span className="text-[var(--card-text-color)]">
                          (Optional)
                        </span>
                      </label>
                      <TextInput
                      required
                        className=" col-span-12 md:col-span-9"
                        placeholder="Your phoneno"
                        withAsterisk
                        defaultValue={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        // {...form.getInputProps("phone")}
                      />
                    </div>

                    <div className=" grid grid-cols-12 py-3">
                      <label
                        htmlFor="gender"
                        className=" col-span-12 md:col-span-3 my-auto text-[var(--text-color)]"
                      >
                        Gender
                      </label>
                      <RadioGroup
                      required
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        className=" col-span-12 md:col-span-9"
                      >
                        <FormControlLabel
                        color="green"
                          value="female"
                          control={<Radio color="success"/>}
                          label="Female"
                          checked={gender === 'female'}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <FormControlLabel
                        color="green"
                          value="male"
                          control={<Radio color="success"/>}
                          label="Male"
                          checked={gender === 'male'}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </RadioGroup>

                         {/*  <Radio
                              checked={gender === 'female'}
                              onChange={(e) => setGender(e.target.value)}
                              value="female"
                              label="Female"
                              name="radio-buttons"
                            />
                            <Radio
                              checked={gender === 'male'}
                              onChange={(e) => setGender(e.target.value)}
                              value="male"
                              label="Male"
                              name="radio-buttons"
                            /> */}
                    </div>

                    <div className=" grid grid-cols-12 py-3">
                      <label
                        htmlFor="dob"
                        className=" col-span-12 md:col-span-3 my-auto text-[var(--text-color)]"
                      >
                        Date of Birth
                      </label>
                      <DatePickerInput
                        readOnly
                        required
                        valueFormat="MMM DD, YYYY"
                        icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                        className=" col-span-12 md:col-span-9"
                        placeholder="Your dob"
                        // {...form.getInputProps("dob")}
                        defaultValue={date}
                        // onChange={(e) => setDob(e.target.value)}
                        // defaultValue={new Date()}
                      />
                    </div>

                    <div className=" grid grid-cols-12 py-3">
                      <label
                        htmlFor="image"
                        className=" col-span-12 md:col-span-3 my-auto text-[var(--text-color)]"
                      >
                        Photo
                      </label>
                      <TextInput
                      required
                        className=" col-span-12 md:col-span-9"
                        placeholder="Your photo link"
                        withAsterisk
                        defaultValue={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        // {...form.getInputProps("image")}
                      />
                    </div>

                    <div className=" grid grid-cols-12 gap-3 py-3">
                      <label
                        htmlFor="location"
                        className=" col-span-12 md:col-span-3 my-auto text-[var(--text-color)]"
                      >
                        Location
                      </label>
                      <TextInput
                      required
                        className=" col-span-12 md:col-span-5"
                        placeholder="Your address"
                        withAsterisk
                        defaultValue={address}
                        onChange={(e) => setAddress(e.target.value)}
                        // {...form.getInputProps("address")}
                      />
                      <TextInput
                      required
                        className=" col-span-12 md:col-span-4"
                        placeholder="Your city"
                        withAsterisk
                        defaultValue={city}
                        onChange={(e) => setCity(e.target.value)}
                        // {...form.getInputProps("city")}
                      />
                    </div>

                    <div className=" grid grid-cols-12 py-3">
                      <label
                        htmlFor="department"
                        className=" col-span-12 md:col-span-3 my-auto text-[var(--text-color)]"
                      >
                        Department
                      </label>
                      <TextInput
                      required
                        className=" col-span-12 md:col-span-9"
                        placeholder="Your department"
                        withAsterisk
                        defaultValue={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        // {...form.getInputProps("department")}
                      />
                    </div>

                    <Group position="right" mt="md">
                      <button
                        type="submit"
                        className=" px-3 py-2 bg-[#16803C] rounded text-white capitalize hover:bg-green-700 "
                      >
                        <span className="text-[15px] font-medium">
                          save changes
                        </span>
                      </button>
                    </Group>
                  </form>
                </div>
              </div>

              {/************ Email, Password *************/}
              <div className="border border-1 border-[var(--border-color)] rounded-lg shadow-md overflow-hidden my-7">
                {/* header */}
                <div className=" border-b border-b-[var(--border-color)]">
                  <h1 className=" p-5 text-[var(--text-color)] font-semibold text-lg">
                    Preferences
                  </h1>
                </div>

                {/* body */}
                <div className="p-5">
                  <form
                  action=""
                  onSubmit={editHandler}
                    // component="form"
                    // maw={400}
                    // mx="auto"
                    // onSubmit={form.onSubmit(() => {})}
                    // onSubmit={''}
                  >
                    <div className="grid grid-cols-12 ">
                      <p className=" col-span-12 pb-4 text-[#677788]">
                        Your current email address is <b>{email}</b>{" "}
                      </p>
                    </div>

                    <div className=" grid grid-cols-12 py-3">
                      <label
                        htmlFor=""
                        className=" col-span-12 md:col-span-3 my-auto text-[var(--text-color)]"
                      >
                        Enter new email address
                      </label>
                      <TextInput
                        className=" col-span-12 md:col-span-9"
                        placeholder="Enter new email address"
                        withAsterisk
                        defaultValue={''}
                        onChange={(e) => setEmail(e.target.value)}
                        // {...form.getInputProps("email")}
                      />
                    </div>

                    <div className=" grid grid-cols-12 py-3">
                      <label
                        htmlFor=""
                        className=" col-span-12 md:col-span-3 my-auto text-[var(--text-color)]"
                      >
                        Username
                      </label>
                      <TextInput
                        readOnly
                        className=" col-span-12 md:col-span-9"
                        placeholder="Your username"
                        withAsterisk
                        defaultValue={username}
                        onChange={(e) => setUserName(e.target.value)}
                        // {...form.getInputProps("username")}
                      />
                    </div>

                    <div className=" grid grid-cols-12 py-3">
                      <label
                        htmlFor=""
                        className=" col-span-12 md:col-span-3 my-auto text-[var(--text-color)]"
                      >
                        Enter new password
                      </label>
                      <TextInput
                      required
                      readOnly
                        className=" col-span-12 md:col-span-9"
                        placeholder="Your new password"
                        withAsterisk
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                        // {...form.getInputProps("password")}
                      />
                    </div>

                    <Group position="right" mt="md">
                      <button
                        type="submit"
                        className=" px-3 py-2 bg-[#16803C] rounded text-white capitalize hover:bg-green-700 "
                      >
                        <span className="text-[15px] font-medium">
                          save changes
                        </span>
                      </button>
                    </Group>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default Profile;
