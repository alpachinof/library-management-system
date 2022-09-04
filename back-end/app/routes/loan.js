const express = require('express');
const { models }  = require('../database');
const { QueryTypes } = require('sequelize');
const sequelize = require('../database');
const moment = require('moment');
const loan = require('../models/loan');

async function getAll(req, res) {
	const loans = await sequelize.query("SELECT loans.id, loans.bookId, loans.issueDate, loans.dueDate, loans.returnDate, books.title, users.firstName, users.lastName FROM ((loans INNER JOIN books ON loans.bookId = books.id) INNER JOIN users ON loans.userId = users.id)", { type: QueryTypes.SELECT });
	res.status(200).json(loans);
};


async function create(req, res) {
	const {issueDate,dueDate,returnDate,userId,bookId} = req.body;
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		await models.loan.create({issueDate:issueDate,dueDate:dueDate,
            returnDate:returnDate,userId:userId,bookId:bookId});

		await models.book.decrement('stock', { by: 1, where: { id: bookId }});

		res.status(201).end();
	}
};

async function update(req, res) {
	const {id,bookId,returnDate} = req.body;

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (id) {
		await models.loan.update({ returnDate: returnDate }, {
			where: {
			  id: id
			}
		});

		await models.book.increment('stock', { by: 1, where: { id: bookId }});

		res.status(200).end();
	} else {
		res.status(400).send(`Bad request`);
	}
};


module.exports = {
	getAll,
	create,
    update
};