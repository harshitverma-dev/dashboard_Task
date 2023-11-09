import React, { useContext } from 'react'
import SearchBar from '../components/SearchBar'
import { ContextDetails } from '../context/context'
import { Link } from 'react-router-dom';

const Home = () => {
    const { equipmentList, isLoading, searchQuery, getEquipmentDetails } = useContext(ContextDetails);

    return (
        <div className='equipments-section'>
            <div className='main-container'>
                <SearchBar />
                <div className='equipments-container'>
                    <h3>Equipments</h3>
                    {
                        isLoading ?
                            <p className='loading-msg'>Loading...</p>
                            : equipmentList?.filter((items) => {
                                if (searchQuery) {
                                    let getName = items.name.charAt(0).toUpperCase() + items.name.slice(1);
                                    let getName1 = items.name.toUpperCase();
                                    return items.name.toLowerCase().includes(searchQuery) || getName.includes(searchQuery) || getName1.includes(searchQuery);
                                } else {
                                    return equipmentList;
                                }
                            }).map((items) => {
                                return (
                                    <div className='equipments-list'>
                                        <p>{items.name}</p>
                                        <Link to={`/equipment/${items.index}`}   className='view-btn' onClick={() => getEquipmentDetails(items.index)}>View</Link>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
