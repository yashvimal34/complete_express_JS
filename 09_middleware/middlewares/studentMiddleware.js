import express from 'express';

export const validateHTTPmethods = (req, res, next) => {
    try {
        if (req.method === 'GET') {
            console.log('Valid GET Method');
        } else if (req.method === 'POST') {
            console.log('Valid POST method');
        } else if (req.method === 'PUT') {
            console.log('Valid Update method');
        } else if (req.method === 'DELETE') {
            console.log('Valid delete method');
        } else {
            console.log('Invalid HTTP requests')
        }

        // Call next() only when the request method is valid
        next();
    } catch (err) {
        next(err);
    }
};