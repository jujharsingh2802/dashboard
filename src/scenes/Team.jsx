import React, {useState} from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { MockDataTeam } from "../Data/MockData";
import { Typography, Box } from "@mui/material";
import Header from "../components/Header.jsx";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import toast, { Toaster } from 'react-hot-toast';

function Team() {
  const [teamData, setTeamData] = useState(MockDataTeam);
  const notify = () => toast('User Deleted successfully!!!');

  const deleteRow = (id) => {
    const updatedTeamData = teamData.filter(item => item.id !== id);
    setTeamData(updatedTeamData);
  }
  const columns = [
    { field: "id", headerName: "ID", },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            className="my-0 mx-auto w-3/5 p-1 flex rounded-md justify-center"
            backgroundColor={
              access === "admin"
                ? "#3da58a"
                : access === "manager"
                ? "#2e7c67"
                : "#2e7c67"
            }
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography className="text-[#e0e0e0] ml-1">{access}</Typography>
          </Box>
        );
      },
    },
    {
      headerName: "Delete",
      flex: 1,
      renderCell: ({ row: { id, deleted } }) => {
        // console.log(id);
        return (
          <Box 
            onClick={() => { deleteRow(id)}}
            className="my-0 w-4/5  p-1 flex rounded-md justify-center"
            backgroundColor="rgb(239,68,68)"
          >
            <div className="flex px-4 rounded-lg ">

            <Typography className="text-[#e0e0e0] ml-1">
            <button className="pr-2">Delete </button>
            </Typography>
            <DeleteOutlineIcon />

            </div>
          </Box>
        );
      },
    },
  ];

  return (
    <Box className="ml-8 my-4 rounded-lg cursor-pointer">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        className="mt-9 border-0  m-0 h-[71vh] w-[95%] rounded-xl "
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
            color: "#e0e0e0 !important" ,
          },
          "& .MuiButtonBase-root": {
            backgroundColor: `transparent !important`,
            margin: "2px",
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={teamData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          
        />
      </Box>
    </Box>
  );
}

export default Team;
