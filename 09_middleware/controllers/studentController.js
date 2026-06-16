import express from 'express';

export const getAllStudentData = (req, res) => {
    res.send("Get All Students Data...")
};

export const createNewStudentData = (req, res) => {
    res.send("Creating New Student Data...")
};

export const updateStudentData = (req, res) => {
    res.send("Updating Student Data...")
};

export const deleteStudentData = (req, res) => {
    res.send("Deleting Student Data...")
};