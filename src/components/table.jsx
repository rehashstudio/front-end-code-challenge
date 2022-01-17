import React from "react";
import { useTable } from "react-table";
import styles from '../../styles/componentStyles/Index.module.scss';

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <table {...getTableProps()} className={styles.tableInfo}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={'h_' + index}>
            {headerGroup.headers.map((column, cIndex) => (
              <th {...column.getHeaderProps()} key={'c_h_' + cIndex}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={'r_' + index}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()} key={'c_r_' + index}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
