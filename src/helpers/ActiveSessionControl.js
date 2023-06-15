import React, { useState } from 'react';
import useGetHook from "../customHooks/useGetHook";
import APIS from "../constants/EndPoint";
import { Alert } from "@material-ui/lab";
import { makeStyles, Typography } from "@material-ui/core";
import StyledPopup from "../components/Reusable/StyledPopup";
import useDomainCheck from '../customHooks/useDomainCheck';

const UpdateDefaultSessionForm = () => {
  return (
    <h1>Update default session form</h1>
  )
}


const NoActiveSessionFound = (props) => {
  const classes = useNoActiveSessionFoundStyles()
  const [openSessionUpdatePopup, setSessionUpdatePopup] = useState(false)
  return (
    <>
      <div className={classes.root}>
        <Alert severity="error">
          <div className={"message"}>
            <div>
              No active session found, Please set default session first
            </div>
            <div className={"update-session"} onClick={() => setSessionUpdatePopup(true)}>
              Update Session
            </div>
          </div>
        </Alert>
      </div>
      <StyledPopup
        title="Update Default Session"
        openPopup={openSessionUpdatePopup}
        setOpenPopup={setSessionUpdatePopup}
      >
        <UpdateDefaultSessionForm />
      </StyledPopup>

    </>
  );
};


const ActiveSessionControl = ({ children }) => {
  const { isLoading: activeSessionLoading, data: activeSessionData } = useGetHook({
    queryKey: 'activeSessionInfo',
    url: APIS.ACTIVE_SESSION
  })

  // checks which domain is being used and returns value accordingly
  const domainCheck = useDomainCheck([
    activeSessionLoading ? "" :
      activeSessionData.status === 200 ? children :
        <NoActiveSessionFound />
    ,
    children
  ])

  return (
    <>
      {domainCheck}
      {/* {
        activeSessionLoading ? "" :
          activeSessionData.status === 200 ? children :
            <NoActiveSessionFound />
      } */}
    </>
  );
};

export default ActiveSessionControl;

const useNoActiveSessionFoundStyles = makeStyles((theme) => ({
  root: {
    "& .MuiAlert-message": {
      width: "100%"
    },
    "& .message": {
      display: "flex",
      justifyContent: "space-between"
    },
    "& .update-session": {
      color: "red",
      cursor: "pointer",
    }
  }
}))
