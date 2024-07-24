import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import deserts1 from './deserts1.jpg';
import dreenk from './dreenk.jpg';
import hot from './hot.jpg';

 export const About = () => {
    const about = [
        { id: 1, name: 'Товар 1', price: 100, quantity: 10 },
        { id: 2, name: 'Товар 2', price: 150, quantity: 5 },
        { id: 3, name: 'Товар 3', price: 200, quantity: 8 },
        { id: 4, name: 'Товар 4', price: 250, quantity: 2 },
    ];

    return (
        <div className="container mt-5">
            <h2>Список товаров</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Количество</th>
                    </tr>
                </thead>
                <tbody>
                    {about.map((about) => (
                        <tr key={about.id}>
                            <td>{about.id}</td>
                            <td>{about.name}</td>
                            <td>{about.price} ₽</td>
                            <td>{about.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default About;