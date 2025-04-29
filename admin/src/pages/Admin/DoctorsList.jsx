import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

function DoctorsList() {
  const { doctors, aToken, getAllDoctors } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return <div>
    <h1></h1>
  </div>;
}

export default DoctorsList;
