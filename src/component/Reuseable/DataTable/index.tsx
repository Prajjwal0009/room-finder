import React, { useEffect, useState } from 'react';

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { classNames } from '../../../utils/classNames'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import PageTitle from '../PageTitle'
import serverData from "./makeData.js"; // Import data from makeData.js

function DataTable(props: any) {
  const { columns, tableName, setIsOpenAdd, title, onClick } = props;
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)
  const [data, setData] = useState<any[]>([]);
  // const [data, setData] = useState([])

  const navigate = useNavigate();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  const totalCount = serverData.length;
  const handleAddPageRoute = () => {
    setIsOpenAdd(true);
  };

  useEffect(() => {
    // Set the data from makeData.js
    setData(serverData);
  }, [serverData]);

  useEffect(() => {
    // Set the data from makeData.js
    setData(serverData.slice(page * limit, (page + 1) * limit));
  }, [page, limit]);

  useEffect(() => {
    table.setPageSize(limit);
  }, [limit, table]);

  const handleNextPage = () => {
    setPage(page => page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page => page - 1);
  };

  const handleLastpage = () => {
    setPage(Math.floor(totalCount / limit));
  };

  const handleFirstPage = () => {
    setPage(0);
  };

  return (
    <>
      <div className=" w-full">
        <div className='w-full flex justify-between'>
          <PageTitle
            pageTitle={tableName}
          />
          <Button
            title={title}
            onClick={onClick}
          />

        </div>
        <table className='w-full m-2'>
          <thead className='bg-[#5c6bb0] text-white'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className=''>
                {headerGroup.headers.map((header, index) => (
                  <th key={header.id} colSpan={header.colSpan} className={classNames(index === 0 ? "rounded-tl-lg" : headerGroup.headers.length - 1 === index ? "rounded-tr-lg text-left w-[8rem]" : "", "py-[10px] text-left px-5")}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className='even:bg-gray-50 odd:bg-white hover:bg-gray-100 hover:transition-all'>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className='py-[10px] text-left px-2'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map(header => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        <div className="h-2" />
        <div className="flex bg-white py-2 m-2 w-full justify-center gap-4">
          <button
            className="border rounded p-1"
            onClick={() => handleFirstPage()}
            disabled={page === 0}

          >
            {'<<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => handlePreviousPage()}
            disabled={page === 0}
          >
            {'<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => handleNextPage()}
            disabled={(page + 1) * limit >= totalCount}
          >
            {'>'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => handleLastpage()}
            disabled={(page + 1) * limit >= totalCount}

          >
            {'>>'}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {page + 1} of {Math.ceil(totalCount / limit)}
            </strong>
          </span>

          <select
            value={table.getState().pagination.pageSize}
            onChange={e => {
              setLimit(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="h-4" />
      </div>

    </>

  );
}

export default DataTable;
