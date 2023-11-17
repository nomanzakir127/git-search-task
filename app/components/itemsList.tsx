import  React, { Key, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ForkProps, ListProps } from '../../types/types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button, Skeleton } from '@mui/material';
import Link from 'next/link';
import { getData } from '@/services/apiCalls';
import { useAppDispatch } from '@/store/Store';
import { setForks } from '@/reducers/ForksSlice';
import { useRouter } from 'next/navigation'

const ItemsList:  React.FC<ListProps> = ({page, queryType, items, handleNext}) =>{

  const router = useRouter()

  const dispatch = useAppDispatch()

  const handleForks = async (url:string) => {
     const result = await getData(`${url}?&sort=newest&page=1&per_page=3`, 'get')
     const forks:ForkProps[] = []
     if(result.length){
       
       result?.forEach((r:any) => {
        const obj:ForkProps = {
          name : '',
          description : '',
          avatarUrl : '',
          url : ''
       }

         obj.name = r.full_name
         obj.description = r.description
         obj.avatarUrl = r.owner?.avatar_url 
         obj.url = r.html_url
         forks.push(obj)
       });

       dispatch(setForks(forks))
       router.push('/forks')
     }
  }

  return (
    <>
      
      <Typography variant="h5"  color="text.primary" sx={{ marginLeft: '1.3rem', marginTop:'2.4rem' }} gutterBottom>
        {queryType === 'repositories' ? 'Repositories' : 'Users'}
      </Typography>
      <InfiniteScroll
        dataLength={items?.length}
        next={()=> handleNext( page + 1)}
        hasMore={true}
        loader={<Skeleton variant="rectangular" width={'100%'}></Skeleton>}
      >
        <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }} >
          {
            items?.map((item:any, index:Key | null | undefined) => {
              return (
                <div key={index}>
                  <ListItem alignItems="flex-start">
                    {
                      queryType === 'users' && (
                        <ListItemAvatar>
                          <Avatar alt="Avatar" src={item?.avatar_url} />
                        </ListItemAvatar>
                      )
                    }
                    <ListItemText
                      primary={queryType === 'repositories' ? `Repo Name: ${item?.name}` : item?.login}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                           { `Link: `}
                           <Link href={item?.html_url} target="_blank">{item?.html_url}</Link>
                          </Typography>
                          <br/>
                          {queryType === 'repositories' && `Description: ${item?.description}`}
                          <br/>
                          {queryType === 'repositories' && <Button onClick={()=>handleForks(item?.forks_url)}>Forks</Button>}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  {index != items.length && <Divider variant="inset" component="li" />}
                </div>
              )
            })
          }
        </List>
      </InfiniteScroll>
    </>
  );
}

export default ItemsList;