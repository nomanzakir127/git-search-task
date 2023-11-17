"use client"
import { Grid, Skeleton } from '@mui/material';
import React, { useState } from 'react';
import {getData} from '../../services/apiCalls'
import DropDown from '../components/dropdown';
import InputField from '../components/inputfield';
import ItemsList from '../components/itemsList';

export default function Index() {

   const [queryType, setQueryType] = useState('')
   const [searchString, setSearchString] = useState('Q')
   const [url] = useState('https://api.github.com/search/')
   const [items, setItems] = useState<any[]>([])
   const [page, setPage] = useState<number>(1)
   const [loading, setLoading] = useState(false)

   const handleQueryType = (qType: string) =>{
      setPage(1)
      setQueryType(qType)
      fetchData(true, url, qType, searchString, 1)
   }

   const handleSearchString = (sString: string) =>{
      setPage(1)
      setSearchString(sString)
      fetchData(true, url, queryType, sString, 1)
   }

   const handleNext = (page: number) =>{
      setPage(page)
      fetchData(false, url, queryType, searchString, page)
   }


   const fetchData = async (changeType: boolean, url:string, queryType: string, searchString:string, page:number) =>{
      
      changeType && setLoading(true)
      const result = url && await getData(queryType ? `${url}${queryType}?q=${searchString}&page=${page}&per_page=50` : '' , 'get')
      if(result){
          
          if(result.items && result.items?.length){

            changeType ? setItems([...result?.items]) : setItems([...items, ...result?.items])
          }
          
      }
      
      changeType && setLoading(false)
   }
   
   
    return (
      <div className="container">
         <Grid container item xs={8}>
            <Grid container item spacing={2}>
               <Grid item xs={12} sm={12} md={6} lg={4}>
                  <DropDown queryType={queryType} handleQueryType={handleQueryType}/>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={4}>
                  <InputField searchString={searchString} handleSearchString={handleSearchString} />
               </Grid>
            </Grid>
            <Grid item xs={12}>
              {
                  loading &&  (
                     <Skeleton variant="rectangular" width={'100%'}></Skeleton>
                  )
               }
               {
                  !loading && items?.length > 0 && (
                     <ItemsList queryType = {queryType} items={items} handleNext={handleNext} page={page} />
                  )
               }
               
            </Grid>
         </Grid>
      </div>
     )
  }
  