import { Button, makeStyles, Table, TableCell, TableRow,  TableHead, TableBody} from '@material-ui/core';
import {categories} from '../../constants/data.js';
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
  create: {
    margin: '20',
    background: '#6495ED',
    color: '#fff',
    width: '60%'
  },
  table: {
    border: '1px solid rgba(224, 224, 224, 1)'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
})

function Categories() { 
  const classes = useStyle();
  return (
    <div className="main">
     <Link to='./create' className={classes.link}><Button variant="contained" className={classes.create}>Create Blog</Button></Link>

      <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>All Categories</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {
              categories.map(category => (
                <TableRow>
                  <TableCell>{category}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
      </Table>
    </div>
  );
}
export default Categories;