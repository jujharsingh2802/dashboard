import React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Header from "../components/Header.jsx";
import toast, { Toaster } from 'react-hot-toast';


function Donations() {
  const notify = () => toast('Post Deleted successfully!!!');

  const [MockDataDonations, setMockDataDonations] = useState([]);

  useEffect(() => {
    fetch('https://dashboard-server-p8gp.onrender.com/api/').then((res)=>{
      res.json().then((data)=>{
        setMockDataDonations(data)
      })
    })
  }, [])

  const addDeletedId = (id)=>{
    fetch(`https://dashboard-server-p8gp.onrender.com/api/delete/${id}`,{
      method: 'DELETE',
    }).then(()=>{
      fetch('https://dashboard-server-p8gp.onrender.com/api/').then((res)=>{
      res.json().then((data)=>{
        setMockDataDonations(data)
        notify()
      })
    })
    
    })
  }

  const columns = [
    {
      field: "userName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "title",
      headerName: "Title of Post",
      flex: 1,
    },
    {
      field: "userEmail",
      headerName: "Email",
      flex: 1,
    },
    
    {
      field: "desc",
      headerName: "Description",
      flex: 1,
      renderCell: (params) => (
        <Typography className="text-[#4cceac] ">{params.row.desc}</Typography>
      ),
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      headerName: "Delete",
      flex: 1,
      renderCell: ({ row: { id, deleted } }) => {
        // console.log(id);
        return (
          <Box 
            onClick={() => { addDeletedId(id)}}
            className="my-0 w-4/5  p-1 flex rounded-md justify-center"
            backgroundColor="rgb(239,68,68)"
          >
            <div className="flex px-4 rounded-lg ">

            <Typography className="text-[#e0e0e0] ml-1">
            <button className="pr-2">Delete </button><Toaster/>
            </Typography>
            <DeleteOutlineIcon />

            </div>
          </Box>
        );
      },
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
