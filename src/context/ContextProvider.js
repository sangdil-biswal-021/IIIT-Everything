import React, { useState, createContext, useEffect } from 'react';
export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [subjects, setSubjects]=useState([]);
  const [documentType, setDocumentType] = React.useState([]);
  const [subject, setSubject] = React.useState([]);
  const [results,setResults]=useState([]);
  useEffect(()=>
  {
    const fetchData = async ()=>
    {
      const response = await fetch(
        `https://dbiiit.swoyam.engineer/getsubjects`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setSubjects(data.unique_sub_values)

      const url = `https://dbiiit.swoyam.engineer/find?sub=${subject}&docType=${documentType}`
      const newResponse= await fetch(
        url,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          
          }
        }


      )
      const newData=await newResponse.json()
      console.log(newData)
      setResults(newData)


    }
    fetchData()
  },[subject,documentType])
  return <Context.Provider value={{subjects, documentType, setDocumentType,subject, setSubject, results }}>{children}</Context.Provider>;
};
