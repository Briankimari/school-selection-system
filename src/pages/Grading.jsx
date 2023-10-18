import React from 'react'
import knec from '../data/knec.jpeg'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(carbs, protein,year,performe) {
  return { carbs, protein,year,performe };
}

const rows = [
  createData('A', 12.0,2023,25),
  createData('A-', 11.00,2023,42),
  createData('B+',10.00  ,2023,54),
  createData('B',  9.00,2023,57),
  createData('B-', 	8.00 ,2023,49),
  createData('C+', 7.00 ,2023,77),
  createData('C', 	6.00 ,2023,80),
  createData('C-', 5.00 ,2023,65),
  createData('D+',  4.00 ,2023,32),
  createData('D', 3.00,2023,31),
  createData('D-', 	2.00 ,2023,12),
  createData('E', 1.00 ,2023,6),
];
const Grading = () => {
  return (
    <div className='md:mt-10 mt-28 md:p-4 p-6'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className=' text-xl font-bold text-center'>Grading Details According To KNEC Council</h2>
        <img className='md:w-28 w-16 ' src={knec} alt='Knec logo'/>
      </div>
      <div className='mt-10'>
        <h2 className='pb-4 '> Kenya Certificate Of Secondary Education(KCSE)</h2>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,border:0 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            
            
        
            <TableCell align="left">DOB</TableCell>
            <TableCell align="left">Exams</TableCell>
            <TableCell align="left">Year</TableCell>
            <TableCell align="left">Perfomance(%)</TableCell>
          </TableRow>
        
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
                           
            >

              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
              <TableCell align="left">{row.year}</TableCell>
              <TableCell align="left">{row.performe}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  )
}

export default Grading
