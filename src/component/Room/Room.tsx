import React, { useState } from "react";
import NACell from "../Reuseable/DataTable/NACell";
import DataTable from "../Reuseable/DataTable";
import TableActionButton from "../Reuseable/TableActionButton";
import { useNavigate } from "react-router-dom";
import moment from "moment";
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
      header: 'Date',
      accessorKey: 'added_date',
      cell: (cellProps: any) => <>
        {moment(cellProps.getValue()).format('MMMM Do YYYY, h:mm:ss a')}
      </>
    },
    {
      header: 'Action',
      accessorKey: 'id',
      cell: (row: any) => {
        console.log(row?.row?.id, "cellProps")
        return (<TableActionButton
          editAction={`/edit-room/${row?.row?.id}`}
        />)
      }
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
