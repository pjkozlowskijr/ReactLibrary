import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ReadingList from '../components/ReadingList/ReadingList'
import { Navigate } from 'react-router-dom'
import { toTitleCase } from '../helpers'
import Box from '@mui/material/Box'

export default function ListPage() {
    const {readingList, user, setAlert} = useContext(AppContext)

    if (user.token){
        if (readingList.length < 1){
            return(
                <Box sx={{position:'absolute', top:'45%', left:0, right:0}}>
                    <Typography variant='h2' sx={{textAlign:'center'}}>Your reading list is currently empty.</Typography>
                </Box>
            )
        }else{
            return(
                <>
                    <Typography variant='h2' sx={{textAlign:'center', mb:3}}>{toTitleCase(user.first_name)}'s Reading List:</Typography>
                    <ReadingList/>
                </>
            )
        }
    }else{
        setAlert({msg:'Please log in to view your reading list.', cat:'error'})
        return(
            <Navigate to={'/login'}/>
        )
    }
}
