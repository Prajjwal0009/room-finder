import React, { useState, useEffect } from "react";

const LocationComponent = (props: any) => {
  const { setLatitude, setLongitude, latitude, longitude } = props
 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to get the current location
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setError(null);
          },
          (error) => {
            setError("Error getting your location: " + error.message);
          }
        );
      } else {
        setError("Geolocation is not supported by your browser.");
      }
    };

    // Call the function to get the location when the component mounts
    getCurrentLocation();

    // Clean up the geolocation watcher when the component unmounts
    return () => {
      // No need to clear the geolocation watch here
    };
  }, []);

  return (
   <></>
  );
};

export default LocationComponent;
