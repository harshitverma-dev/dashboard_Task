import React, { useContext, useEffect } from 'react'
import { ContextDetails } from '../context/context'

const Details = () => {
    const { equipmentDetails, setEquipmentDetails, isLoading } = useContext(ContextDetails);
    useEffect(() => {
        let getData = JSON.parse(localStorage.getItem('details'));
        setEquipmentDetails(getData)
    }, [])
    return (
        <div>
            <div className='equipments-details'>
                {
                    isLoading ?
                        <div className='main-container'>
                            <div className='text-center loading-msg'>
                                Loading...
                            </div>
                        </div>
                        :
                        <div className='main-container'>
                            <h2>{equipmentDetails?.name}</h2>
                            <table className='details-flex'>
                                <thead className='data-flex'>
                                    <th>Equipment Category</th>
                                    <th>Gear Category</th>
                                    <th>Weight</th>

                                </thead>
                                <tbody className='data-flex'>
                                    <td>{equipmentDetails?.equipment_category?.name ?? "Not Avaliable in API data"}</td>
                                    <td>{equipmentDetails?.gear_category?.name ?? "Not Avaliable in API data"}</td>
                                    <td>{equipmentDetails?.weight ?? "Not Avaliable in API data"}</td>
                                </tbody>
                            </table>
                            <button onClick={(e) => window.history.back(e)} className='back-btn'>Go Back</button>
                        </div>
                }
            </div>

        </div>
    )
}

export default Details
