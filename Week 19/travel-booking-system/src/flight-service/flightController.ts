import express from 'express';
import { Request, Response } from 'express';
import flights, {Flight} from './flightModel.js';

const create = (req: Request, res: Response) => {
    const { origin, destination, price } = req.body;
    const newFlight: Flight = {
        id: flights.length + 1, // Simple ID generation
        origin,
        destination,
        price,
    };
    flights.push(newFlight); // Add flight to the mock database
    res.status(201).send(newFlight); // Respond with the created flight
}

const get =  (req: Request, res: Response) => {
    res.status(200).send(flights); // Respond with the list of flights
};

const getByID = (req: Request, res: Response) => {
    const flightId = parseInt(req.params.id);
    const flight = flights.find(f => f.id === flightId);
    if (!flight) {
        return res.status(404).send({ message: 'Flight not found' });
    }
    res.status(200).send(flight); // Respond with the found flight
};

const remove =  (req: Request, res: Response) => {
    const flightId = parseInt(req.params.id);
    const flightIndex = flights.findIndex(f => f.id === flightId);
    flights.splice(flightIndex, 1)
    res.status(204).send(); // Respond with no content
};

export default {get, getByID, create, remove};