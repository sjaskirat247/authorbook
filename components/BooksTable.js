import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function BooksTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Books in all Languages</TableCell>
      
          </TableRow>
        </TableHead>
        <TableBody>
          {props.books.map((book) => (
            <TableRow key={book.key}>
              <TableCell>{book.title}</TableCell>
              <TableCell>
                <Link href={`/book/${book.key.split('/').pop()}`}>
                  <Button variant="outlined" color="primary">
                    View Details
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
