/* global Mongo, Meteor */
export const Users = Meteor.users;
export const Cards = new Mongo.Collection('cards');
