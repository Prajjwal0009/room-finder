import React, { useState } from "react";
import NACell from "../Reuseable/DataTable/NACell";
import DataTable from "../Reuseable/DataTable";
import TableActionButton from "../Reuseable/TableActionButton";
import { useNavigate } from "react-router-dom";
// import TableActionButton from "../Reuseable/TableActionButton";

const Room = (props: any) => {
  const { roomData } = props
  const navigate = useNavigate();
  const defaultColumns: any = React.useMemo(() => [
    {
      header: 'room_type',
      accessorKey: 'room_type',
      cell: NACell
    },

    {
      header: 'location',
      accessorKey: 'location',
      cell: NACell
    },
    {
      header: 'price',
      accessorKey: 'price',
      cell: NACell
    },
    {
      header: 'description',
      accessorKey: 'description',
      cell: NACell
    },
    {
      header: 'Action',
      accessorKey: 'id',
      cell: () => <>
        <TableActionButton
          editAction={'/edit-room'}
        />
      </>
    },

  ], [])

  return (
    <>
      <DataTable
        columns={defaultColumns}
        serverData={roomData}
        title='AddRoom'
        onClick={() => navigate('/add-room')}

      // queryKey={"form"}


      />
    </>
  );
};

export default Room;
