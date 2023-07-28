import React, { useEffect, useState } from 'react'
import loadable from "@loadable/component"
const ContactUsComponent = loadable(() => import("../../component/ContactUs/ContactUs"));




const ContactUs = () => {
    const [contactUsData, setContactUsData] = useState<any>([]);

    useEffect(() => {
        fetchRoomData();
    }, []);

    async function fetchRoomData() {
        try {
            const response = await fetch('http://localhost:8000/api/v1/contact-us/');
            const data = await response.json();
            setContactUsData(data);
        } catch (error) {
            console.log('Error:', error);
        }
    }
    console.log(contactUsData)



    return (
        <ContactUsComponent
        contactUsData={contactUsData} />
    )
}

export default ContactUs