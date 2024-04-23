import { Box, Button, IconButton, Typography } from "@mui/material";
import { MockTransactions } from "../../Data/MockData.jsx";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header.jsx";
import StatBox from "../../components/StatBox.jsx";
import ProgressCircle from "../../components/ProgressCircle.jsx";

function Dashboard() {
  return (
    <div className='m-5 cursor-default'>
      <div className='flex justify-between items-center'>
      <Header title="DASHBOARD" subtitle="Welcome to your DaskBoard"/>
      <Box>
          <Button
            sx={{
              backgroundColor: "#a4a9fc",
              color: "#e0e0e0",
              fontSize: "12px",
              fontWeight: "bold",
              padding: "8px 15px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </div>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="#1F2A40"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: "#3da58a", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#1F2A40"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="43,331"
            subtitle="Donations completed"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: "#3da58a", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#1F2A40"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: "#3da58a", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#1F2A40"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: "#3da58a", fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor="#1F2A40"
        >
          <Box
            mt="25px"
            p="0 15px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color="#e0e0e0"
              >
                Exchanges completed
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color="#4cceac"
              >
                59,342+
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: "#4cceac" }}
                />
              </IconButton>
            </Box>
          </Box>
          
        </Box>
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor="#1F2A40"
          p="30px"
        >
          <Typography variant="h5" color="white" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color="#4cceac"
              sx={{ mt: "15px" }}
            >
              48,352 number of clients
            </Typography>
            <Typography>Includes all the clients</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 5"
          gridRow="span 3"
          backgroundColor="#1F2A40"
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid "#141b2d"`}
            colors="#e0e0e0"
            p="15px"
          >
            <Typography color="#e0e0e0" variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {MockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${"#141b2d"}`}
              p="15px"
            >
              <Box>
                <Typography
                  color="#4cceac"
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color="#e0e0e0">
                  {transaction.user}
                </Typography>
              </Box>
              <Box color="#e0e0e0">{transaction.date}</Box>
              
              <Box
                backgroundColor="#4cceac"
                p="5px 10px"
                borderRadius="4px"
              >
                Posts:{transaction.posts}
              </Box>
            </Box>
          ))}
        </Box>

        
        
        
      </Box>
    </div>
  )
}

export default Dashboard

