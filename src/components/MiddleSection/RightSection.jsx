import { Box, Divider, Grid, Stack, Typography, styled } from '@mui/material';
import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { AccountCircle, ShoppingBasket, ShoppingBasketOutlined, QueryBuilder, HourglassBottom } from '@mui/icons-material';


const SquareBullet = styled('span')(({ color }) => ({
    display: 'inline-block',
    width: '5px',
    height: '12px',
    backgroundColor: color,
    marginRight: '8px',
}));

function RightSection() {
    return (
        <div>
            {/* Content for the right component */}
            <Box sx={{ paddingY: '15px' }}>
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                    Trace Overview
                </Typography>
                <Typography variant="subtitle3" sx={{ fontWeight: 'light', fontSize: "13px", color: "rgb(101, 116, 139)" }}>
                    Jun 6th 2023, 20:15:59
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ paddingY: '12px' }}>
                <Stack direction={"row"} sx={{ display: "flex", justifyContent: 'space-between' }}  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: "12px", color: "rgb(101, 116, 139)" }}>3 SERVICES USED</Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'light', fontSize: "12px", color: "black" }}>Total: 30 spans</Typography>
                </Stack>
                <List>
                    <ListItem sx={{ py: 0, px: 0 }}>
                        <SquareBullet color="rgb(204, 118, 0)" />
                        <ListItemText primary="authentication-service" />
                    </ListItem>
                    <ListItem sx={{ py: 0, px: 0 }}>
                        <SquareBullet color="rgb(255, 149, 31)" />
                        <ListItemText primary="orders-service" />
                    </ListItem>
                    <ListItem sx={{ py: 0, px: 0 , pz:0 }}>
                        <SquareBullet color="rgb(206, 146, 216)" />
                        <ListItemText primary="stock-service" />
                    </ListItem>
                </List>
            </Box>
            <Divider />

            <Box sx={{ paddingY: '12px' }}>
                <Stack direction={"row"} sx={{ display: "flex", justifyContent: 'space-between' }}  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: "12px", color: "rgb(101, 116, 139)" }}>PERFORMANCE</Typography>
                </Stack>
                <Stack>
                    <List>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <HourglassBottom sx={{ color: 'black', fontSize: '16px' }} />
                            <ListItemText
                                primaryTypographyProps={{ variant: 'subtitle2', sx: { fontSize: '12px', marginTop: '2px', marginLeft: "5px" } }}
                                primary="authentication-service"
                            />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <QueryBuilder sx={{ color: 'black', fontSize: '16px' }} />
                            <ListItemText
                                primaryTypographyProps={{ variant: 'subtitle2', sx: { fontSize: '12px', marginTop: '2px', marginLeft: "5px" } }}
                                primary="orders-service"
                            />
                        </ListItem>
                    </List>
                </Stack>
            </Box>
        </div>
    )
}

export default RightSection