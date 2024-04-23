import React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { MockDataDonations } from "../Data/MockData.jsx";
import Header from "../components/Header.jsx";

function Donations() {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "donations",
      headerName: "No. of Donations",
      flex: 1,
      renderCell: (params) => (
        <Typography className="text-[#4cceac] ">{params.row.donations}</Typography>
      ),
    },
    {
      field: "date",
      headerName: "Last Donated",
      flex: 1,
    },
  ];

  return (
    <Box className="mx-8 my-4 rounded-lg cursor-pointer">
      <Header title="DONATIONS" subtitle="List of donations per month" />
      <Box
        className="mt-9 m-0 h-[71vh] rounded-xl "
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#94e2cd ",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#3e4396",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#1F2A40",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#3e4396",
          },
          "& .MuiCheckbox-root": {
            color: "#b7ebde !important",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "#b7ebde !important",
            fontWeight: "semibold",
          },
          "& .MuiButton-root": {
            color: "#ffffff",
            backgroundColor: "#3e4396",
            "&:hover": {
              backgroundColor: "#1F2A40",
            },
          },
          "& .MuiDataGrid-cellContent": {
            color: "#e0e0e0",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `#e0e0e0 !important`,
          },
          "& .MuiButtonBase-root": {
            backgroundColor: `transparent !important`,
            margin: "2px",
          },
          "& .MuiCheckbox-root": {
            color: `#b7ebde !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={MockDataDonations}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}

export default Donations;
