const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');
const notes=require('./notes.js');
var argv = yargs.argv;
var command =argv._[0];
if (command==='add') {
	var note=notes.addNotes(argv.title,argv.body);
	if (note) {
	console.log("Note Created");
	notes.logNotes(note);
		}
	else{
		console.log("title already taken!");
	}
} else if (command==='list') {
	var getNotes=notes.getAll();
	console.log(`Showing ${getNotes.length} notes`);
	getNotes.forEach((note) =>notes.logNotes(note));
} else if (command==='read') {
	var noteRead=notes.readNotes(argv.title);
	if (noteRead) {
		console.log("Note found");
		notes.logNotes(noteRead);
	} else {
		console.log("Note not found!");
	}
} else if (command==='remove') {
	var noteRemove=notes.removeNotes(argv.title);
	var message=noteRemove ? 'Note was removed':'note was not removed';
	console.log(message);
} else {
	console.log("command not reconize!!");
}
