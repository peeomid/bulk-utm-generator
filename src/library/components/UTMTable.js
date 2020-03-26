import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function UTMTable(props) {
  const items = [];
  for (const key in props.values) {
    items.push(<p>{key}: {props.values[key]}</p>)
  };
  console.log(props.values);
  const rows = props.generateValues(props.values);
  console.log(rows);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>URL</TableCell>
            <TableCell align="right">Source</TableCell>
            <TableCell align="right">Medium</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Term</TableCell>
            <TableCell align="right">Content</TableCell>
            <TableCell align="right">Generated URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.url}
              </TableCell>
              <TableCell align="right">{row.source}</TableCell>
              <TableCell align="right">{row.medium}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.term}</TableCell>
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">{row.generated_url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UTMTable
