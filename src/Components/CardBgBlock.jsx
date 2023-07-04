 import React from 'react'
 import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
 
 const CardBgBlock = ({clientData}) => {
   return (
    <Card
    shadow={true}
    className="relative grid items-end rounded-none h-44 w-72 md:w-60 lg:w-96 justify-center overflow-hidden text-center"
  >
    <CardHeader
      floated={false}
      shadow={true}
      color="transparent"
      className="absolute inset-0 m-0 h-full w-full rounded-none bg-green-300 bg-cover bg-center"
    >
      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/60 via-black/30" />
    </CardHeader>
    <CardBody className="relative px-6 md:px-12">
     
      <Avatar
        size="xl"
        variant="circular"
        alt={clientData?.firstName}
        className="border-2 border-white"
        src={clientData?.image}
      />
       <Typography variant="h5" className="mb-4 text-[#fafafa]">
        @{clientData?.username}
      </Typography>
      <p variant="h5" className="mb-4 text-[#fafafa]">
        {clientData?.type}
      </p>
    </CardBody>
  </Card>
   )
 }
 
 export default CardBgBlock
 