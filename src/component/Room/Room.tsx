import React, { useState } from "react";
import NACell from "../Reuseable/DataTable/NACell";
import DataTable from "../Reuseable/DataTable";
import TableActionButton from "../Reuseable/TableActionButton";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Modal from "../Reuseable/Modal";
import ConfirmDialog from "../Reuseable/ConFirmDialog";
// import TableActionButton from "../Reuseable/TableActionButton";

const Room = (props: any) => {

  const { roomData, setSelectedObject, deleteDataFromAPI, selectedObject, isOpen, setIsOpen } = props

  const navigate = useNavigate();
  const handleDelete = () => {
    deleteDataFromAPI(selectedObject)
  }
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
        return (<TableActionButton
          value={row?.row?.original?.id}
          editAction={`/edit-room/${row?.row?.original?.id}`}
          setOpenPopup={setIsOpen}
          setSelectedObject={setSelectedObject}
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
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        children={<ConfirmDialog
          setIsOpen={setIsOpen}
          deleteDataFromAPI={deleteDataFromAPI}
          handleDelete={handleDelete}
        />}
        title="Delete"
      />
    </>
  );
};

export default Room;
