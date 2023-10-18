 import React, { useState } from 'react';
import {  Box,  Dialog, DialogActions, DialogContent, DialogTitle, IconButton,  TextField  } from '@mui/material'
import {styled  } from '@mui/material/styles'
import PropTypes from 'prop-types'
import {  useMediaQuery } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useStateContext } from '../contexts/ContextProvider';


const DialogBox= styled(Dialog)(({theme})=> ({
  '&.MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding:theme.spacing(1),
  },
}))




function DialogTitleModal(props) {
  const {children, onClose, ...other} = props;

  return (
         <DialogTitle sx={{m:0,p:2}} {...other}>
      {children}
      {onClose ? (
        <IconButton aria-label='close' onClick={onClose} sx={{
          position:'absolute', right:8
, top:8, color: (theme)=> theme.palette.grey[500], }}>
        close
        </IconButton>
      ) : null}
    
    </DialogTitle>
   
  );
}
DialogTitleModal.proptoTypes={
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}


export default function OpenForm() {
  const [open,setOpen] =useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [agree,setAgree] = useState('');
  const {currentColor} =useStateContext();
  const [firstName,setFirstName]= useState('');
  const [surName,setSurName] = useState('');
  const [indexNumber,setIndexNumber] = useState('');
  const [year,setYear] = useState('');
  const [grade,setGrade]=useState('')
  const [school,setSchool]=useState('')
  const navigate= useNavigate();

  const saveForm=async(e)=> {
    e.preventDefault();
    
    try {
      await axios.post('https://fastfood-api-bz41.onrender.com/save-student',{
        firstName,surName,indexNumber,year,grade,school
      });
       navigate('/homepage')
      toast.success('saved successfully,select grade below to check school selected');
     
    } catch (error) {
      toast.error("invalid details,please fill the form again")
    }
  }


  const handleClickOpen=()=> {
    setOpen(true)
  }
  
  const handleClose=()=> {
    setOpen(false)
  }
  


  return (
    <div>
      
         <Box>
     
     <button onClick={handleClickOpen} style={{background:currentColor}} className='p-2 text-white rounded-lg hover:drop-shadow-xl'>
            Open form
          </button>
   
     
      </Box>
    
      <DialogBox 
      onClose={handleClose}  open={open}>
          
      <DialogTitleModal  id="customized-dialog-title" onClose={handleClose}>
         <h1 className='text-2xl text-black font-bold'>Fill Form</h1>
      </DialogTitleModal>
        <form onSubmit={saveForm}>
          
      <DialogContent dividers>
  
        <Box  display='grid' gap='40px' gridTemplateColumns="repeat(4,minmax(0,1fr))" sx={{
          "& > div" : {gridColumn: isNonMobile ? undefined : 'span 4'}
        }}>
            <TextField
          label="First Name"
          name='firstName'
          value={firstName}
          onChange={(e)=> setFirstName(e.target.value)}   
          sx={{gridColumn: 'span 2'}}
          required
         
          />

          <TextField
          label="Sur Name"
          name='surName'
          value={surName}
          onChange={(e)=> setSurName(e.target.value)}          
          sx={{gridColumn: 'span 2'}}
          required
         
          />

                 

             <TextField
           type='number'
          label="Index Number"
          name='indexNumber'
          value={indexNumber}
          onChange={(e)=> setIndexNumber(e.target.value)}        
          sx={{gridColumn: 'span 4'}}
         required
        
        />
          
    
          
    <div style={{gridColumn: 'span 4'}}  >
       <label>Year Of Exam</label>
   <TextField
           type='text'
          className='w-full'
          name='year'
          variant='filled'    
          sx={{gridColumn: 'span 4'}}
         value={year}
         onChange={(e)=> setYear(e.target.value)}
        required
        />
    </div>

          
    <div style={{gridColumn: 'span 4'}}  >
       <label>Secondary School</label>
   <TextField
           type='text'
          className='w-full'
          name='school'
          variant='filled'    
          sx={{gridColumn: 'span 4'}}
         value={school}
         onChange={(e)=> setSchool(e.target.value)}
        required
        />
    </div>

      <div style={{gridColumn:'span 4'}}>
        <label className='text-gray-400 font-semibold'>Select Your Grade:</label>
        <select required value={grade} onChange={(e)=> setGrade(e.target.value)}  className='border-2 w-full mt-4 p-4'>
         <option value="">-- Select Grade --</option>
          <option value="A">A</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="C-">C-</option>
          <option value="D+">D+</option>
          <option value="D">D</option>
          <option value="D-">D-</option>
          <option value="E">E</option>
        </select>
      </div>

      
      
        <div   style={{gridColumn: 'span 4',borderColor:currentColor}}  >
        <label>Passport</label>
           <TextField
           type='file'
          sx={{gridColumn:'span 4'}}
        
        className='w-full'
        />
           
        </div>
       
           
     

        </Box>
        <div className='flex items-center gap-3  mt-4 '>
             <input name='agree' value={agree} onChange={(e)=> setAgree(e.target.value)} type='checkbox' className='h-10 w-6' required/>
             <p className='text-sm italic'>I agree to all terms & conditions @2023</p>
        </div>
          
     
      </DialogContent>
 
      <DialogActions>
        <div style={{background:currentColor}} className=' p-2 rounded-lg text-white uppercase text-center text-xl w-full hover:drop-shadow-xl'>
         <button type='submit' autoFocus >
         submit
      </button>
        </div>
     
      </DialogActions>
      </form>
      </DialogBox>
    </div>
  );
}







