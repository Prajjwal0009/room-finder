import React from 'react'
import Button from '../Button'
import Divider from '../Divider'

const ConfirmDialog = (props: any) => {
  const { setIsOpen, handleDelete } = props
  return (
    <div>
      <div>
        <Divider />
        Are you sure you want to delete!!
      </div>
      <div className='flex gap-x-4 w-full justify-end'>
        <Button
          title="Cancel"
          variant='outlined'
          onClick={() => setIsOpen(false)}
        />
        <Button
          title='Delete'
          onClick={handleDelete}
        />
      </div>
    </div>

  )
}

export default ConfirmDialog