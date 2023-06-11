import { useNavigate } from 'react-router-dom'
import ViewIcon from "../../assets/icons/view.svg";
import DeleteIcon from "../../../assets/icons/deleteIcon.svg";
import EditIcon from "../../../assets/icons/EditIcon.svg";


const TableActionButton = (props: any) => {
  const { viewAction, editAction, setOpenPopup, setSelectedObject, value, setOpenPopups } = props
  const navigate = useNavigate()



  const handleEditRoute = () => {
    navigate(editAction)
  }

  const handleViewRoute = () => {
    navigate(viewAction)
  }

  const handleDelete = () => {
    // console.log(value, "value");
    setSelectedObject(value)
    setOpenPopup(true)
  }

  return (
    <>

      <div className='w-full text-center flex gap-2 justify-center'>

        <button onClick={handleEditRoute}>
          <img src={EditIcon} alt="" className="text-indigo-300" />
        </button>
        <button onClick={handleDelete}>
          <img src={DeleteIcon} alt="" className="text-indigo-300" />
        </button>

      </div>

    </>
  )
}

export default TableActionButton