import React, { useEffect } from 'react'
import loadable from "@loadable/component"
const ContactComponent = loadable(() => import("../../../component/MainDashboard/Contact/Contact"));




const Contact = () => {
  const postData = async (dataToSend: any) => {
    try {
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the appropriate content-type for your API
        },
        body: JSON.stringify(dataToSend),
      });

      const responseData = await response.json();
      console.log('Response from the server:', responseData);
      // You can update state or perform other actions based on the response from the server.
    } catch (error) {
      console.error('An error occurred while sending data:', error);
    }
  };
  useEffect(() => {
    postData({ key: 'value' }); // Replace { key: 'value' } with your actual data to send.
  }, []);
  const onSubmit = (data: any) => {
    postData({ name: data?.name, email: data?.email, message: data?.message, phone: data?.phone });
    alert('Your information is Saved')
    window.location.reload();
  }
  return (
    <ContactComponent
      onSubmit={onSubmit} />
  )
}

export default Contact