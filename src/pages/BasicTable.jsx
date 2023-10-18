import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Arnest Kariuki', 'A', 2020010581, '02/07/2000', 19),
 createData('Brian Bandi', 'A', 2020010040, '03/11/2001', 19),
 createData('Faith Omondi', 'A-', 2020010231, '02/07/1999', 18),
 createData('Peter Maina', 'A-', 2020010008, '12/12/2004', 19),
 createData('Mercy Njeri', 'A-', 2020010111, '02/07/2002', 20),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Index Number</TableCell>
            <TableCell align="right">Date Of Birth</TableCell>
            <TableCell align="right">Exams</TableCell>
          </TableRow>
        
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
