const express = require('express');
const { models } = require('../database');


async function getAll(req, res) {
	const users = await models.user.findAll();
	res.status(200).json(users);
};


async function create(req, res) {
	const {firstName,lastName,memberId,phoneNumber,address,joinDate,expireDate} = req.body;
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		await models.user.create({firstName:firstName,lastName:lastName,memberId:memberId,
			phoneNumber:phoneNumber,address:address,joinDate:joinDate,expireDate:expireDate});
		res.status(201).end();
	}
};

async function remove(req, res) {
	const id = getIdParam(req);
	await models.user.destroy({
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