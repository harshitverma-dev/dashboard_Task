import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ContextDetails = createContext();

const ContextData = ({ children }) => {
    const [equipmentList, setEquipmentList] = useState(null);
    const [equipmentDetails, setEquipmentDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${process.env.REACT_APP_BASE_URL}/equipment`)
            .then((res) => {
                setEquipmentList(res?.data?.results);
                setIsLoading(false)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const getEquipmentDetails = (url) => {
        setIsLoading(true)
        axios.get(`${process.env.REACT_APP_BASE_URL}/equipment/${url}`)
            .then((res) => {
                setEquipmentDetails(res?.data);
                localStorage.setItem('details', JSON.stringify(res?.data));
                setIsLoading(false)
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <ContextDetails.Provider value={{ searchQuery, setSearchQuery, equipmentList, setEquipmentList, isLoading, equipmentDetails, setEquipmentDetails, getEquipmentDetails }}>
            {children}
        </ContextDetails.Provider>
    )
}

export default ContextData
