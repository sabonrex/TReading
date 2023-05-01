import React from "react";
import { useEffect, useState } from "react";
import { Context } from "../store/appContext";

import { PlanetsCard } from "../component/PlanetCard.jsx";
import { PeopleCard } from "../component/PeopleCard.jsx";
import { VehicleCard } from "../component/VehicleCard.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context)
    return (
        <>
            <div className="section">
                <h1 className="text-danger" style={{ fontFamily: "monospace" }}>Characters</h1>
                <div className="card-container">
                    {peopleList && peopleList.length > 0 ? (
                        <div className="card-scroll">
                            {peopleList.map((item, index) => {
                                return (
                                    <PeopleCard
                                        key={index}
                                        name={item.name}
                                        uid={item.uid}
                                        height={item.height}
                                    />

                                );
                            })}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className="section">
                <h1 className="text-danger" style={{ fontFamily: "monospace" }}>Planets</h1>
                <div className="card-container">
                    {planetsList && planetsList.length > 0 ? (
                        <div className="card-scroll">
                            {planetsList.map((item, index) => {
                                return (
                                    <PlanetsCard
                                        key={item.uid}
                                        name={item.name}
                                        uid={item.uid}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className="section">
                <h1 className="text-danger" style={{ fontFamily: "monospace" }}>Vehicles</h1>
                <div className="card-container">
                    {vehicleList && vehicleList.length > 0 ? (
                        <div className="card-scroll">
                            {vehicleList.map((item, index) => {
                                return (
                                    <VehicleCard
                                        key={item.uid}
                                        name={item.name}
                                        uid={item.uid}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className="section">
                <h1 className="text-danger" style={{ fontFamily: "monospace" }}>Read Later</h1>
                <div className="card-container ms-1 me-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col-2" style={{ fontFamily: "monospace" }}>Name</th>
                                <th scope="col-2" style={{ fontFamily: "monospace" }}>Link</th>
                                <th scope="col-2" style={{ fontFamily: "monospace" }}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {store.readLater && store.readLater.length > 0 ? (
                                <>
                                    {store.readLater.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
                                                </td>
                                                <td>
                                                    <i className="fas fa-trash-alt text-danger h6 p-1" onClick={() => actions.handleDelete(index)} style={{ cursor: 'pointer' }}></i>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </>
                            ) : (
                                <tr>
                                    <td colSpan="3" style={{ fontFamily: "monospace" }}>No items added to Read Later list</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};