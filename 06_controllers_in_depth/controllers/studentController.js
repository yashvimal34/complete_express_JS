import express from 'express';

export const getAllStudentsData = (req, res) => {
    res.send("All Students Data!!")
};

export const createNewStudentData = (req, res) => {
    res.send("New Student Data Created!!")
};

export const updateStudentData = (req, res) => {
    res.send("Student Data Updated!!")
};

export const deleteStudentData = (req, res) => {
    res.send("Student Data Deleted!!")
}