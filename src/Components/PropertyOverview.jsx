import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TfiMarkerAlt, TfiTrash } from "react-icons/tfi";

function createData(
  name,
  orderID,
  photo,
  property,
  type,
  date,
  status,
  edit,
  trash
) {
  return { name, orderID, photo, property, type, date, status, edit, trash };
}

const rows = [
  createData(
    "Steave Jobs",
    "#85457898",
    "https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884_1280.jpg",
    "Apartment",
    "Sold",
    "10-7-2017",
    "paid",
    <TfiMarkerAlt />,
    <TfiTrash />
  ),
  createData(
    "Varun Dhavan",
    "#95457898	",
    "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368_1280.jpg",
    "River view house",
    "On Rent",
    "09-7-2017",
    "pending",
    <TfiMarkerAlt />,
    <TfiTrash />
  ),
  createData(
    "Ritesh Desh",
    "#68457898	",
    "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086_1280.jpg",
    "Luxury Villa",
    "Sold",
    "08-7-2017",
    "paid",
    <TfiMarkerAlt />,
    <TfiTrash />
  ),
  createData(
    "Hrithik",
    "#45457898",
    "https://cdn.pixabay.com/photo/2017/07/07/13/55/giethoorn-2481483_1280.jpg",
    "Cottage",
    "Sold",
    "03-7-2017",
    "on hold",
    <TfiMarkerAlt />,
    <TfiTrash />
  ),
];

const PropertyOverview = () => {
  return (
    <TableContainer
      component={Paper}
      style={{ borderRadius: 0, paddingLeft: 5, paddingRight: 5 }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Order ID</TableCell>
            <TableCell>Photo</TableCell>
            <TableCell>Property</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center" colSpan={2}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {row.name}
              </TableCell>
              <TableCell>{row.orderID}</TableCell>
              <TableCell>
                <img src={row.photo} alt="" className="w-[80px] h-[70px] object-cover aspect-auto" />
              </TableCell>
              <TableCell>{row.property}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <span
                  className={`py-[3px] px-[10px] rounded text-white text-[14px] capitalize ${
                    row.status === "paid" ? "bg-[#00c292]" : ""
                  } ${row.status === "pending" ? "bg-[#fec107]" : ""} ${
                    row.status === "on hold" ? "bg-[#e46a76]" : ""
                  } `}
                >
                  {row.status}
                </span>
              </TableCell>
              <TableCell align="center" colSpan={2}>
                <span className=" cursor-pointer inline-block me-3">
                  {row.edit}
                </span>
                <span className=" cursor-pointer inline-block">
                  {row.trash}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PropertyOverview;
