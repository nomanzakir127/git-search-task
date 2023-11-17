"use client"
import React, {Key} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useSelector } from "react-redux";
import { RootState } from '@/store/Store';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

 const Forks = () =>{

  const forks = useSelector((state:RootState)=>{
      return state.forks
  })
  return (
    <div className="container">
      
      <Card sx={{ minWidth: 275 }}>
        <Typography variant="h5" className="container" color="text.primary"  gutterBottom>
          Last 3 forks
        </Typography>
        <CardContent>
          <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }} >
            {
              forks?.map((item:any, index:Key | null | undefined) => {
                return (
                  <div key={index}>
                    <ListItem alignItems="flex-start" key={index}>
                      <ListItemAvatar>
                        <Avatar alt="Avatar" src={item?.avatarUrl} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                            { `Link: `}
                            <Link href={item?.url} target="_blank">{item?.url}</Link>
                            </Typography>
                            <br/>
                            <br/>
                            {item?.description}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    {index != forks.length && <Divider variant="inset" component="li" />}
                  </div>
                )
              })
            } 
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
export default Forks;