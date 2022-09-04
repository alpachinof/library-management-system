const express = require('express');
const { models } = require('../database');


async function getAll(req, res) {
	const books = await models.book.findAll();
	res.status(200).json(books);
};


async function create(req, res) {
	const {title,isbn,author,stock} = req.body;
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		await models.book.create({title:title,isbn:isbn,author:author,stock:stock});
		res.status(201).end();
	}
};

async function remove(req, res) {
	const id = getIdParam(req);
	await models.book.destroy({
		where: {
			id: id
		}
	});
	res.status(200).end();
};


module.exports = {
	getAll,
	create,
	remove
};