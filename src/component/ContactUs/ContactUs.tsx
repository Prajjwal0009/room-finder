import React from 'react'
import DataTable from '../Reuseable/DataTable'
import NACell from '../Reuseable/DataTable/NACell'

const ContactUs = (props: any) => {
    const { contactUsData } = props
    const defaultColumns: any = React.useMemo(() => [
        {
            header: 'Name',
            accessorKey: 'name',
            cell: NACell
        },

        {
            header: 'Email',
            accessorKey: 'email',
            cell: NACell
        },
        {
            header: 'PhoneNumber',
            accessorKey: 'phone',
            cell: NACell
        },
        {
            header: 'Message',
            accessorKey: 'message',
            cell: NACell
        },

    ], [])

    return (
        <>
            <DataTable
                columns={defaultColumns}
                serverData={contactUsData}
            // onClick={() => navigate('/add-room')}

            // queryKey={"form"}


            />
        </>
    );
}

export default ContactUs