import React, { useState } from "react";
import NACell from "../Reuseable/DataTable/NACell";
import DataTable from "../Reuseable/DataTable";
import TableActionButton from "../Reuseable/TableActionButton";
// import TableActionButton from "../Reuseable/TableActionButton";

const Room = (props: any) => {
  const defaultColumns: any = React.useMemo(() => [
    {
      header: 'FirstName',
      accessorKey: 'firstName',
      cell: NACell
    },

    {
      header: 'LastName',
      accessorKey: 'lastName',
      cell: NACell
    },
    {
      header: 'Age',
      accessorKey: 'age',
      cell: NACell
    },
    {
      header: 'Visits',
      accessorKey: 'visits',
      cell: NACell
    },
    {
      header: 'Progress',
      accessorKey: 'progress',
      cell: NACell
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: NACell
    },
    {
      header: 'Action',
      accessorKey: 'id',
      cell: () => <>
          <TableActionButton
          />
      </>
    },

  ], [])

  return (
    <>
      <DataTable
        columns={defaultColumns}
   
        // queryKey={"form"}
        

      />
    </>
  );
};

export default Room;
