const fs = require('fs');
var fetchNotes=() =>{
	try{
		var noteString=fs.readFileSync('cool.json');
		return JSON.parse(noteString);
	}catch(e){
		return [];
	}
};
var saveNotes=(Notes) =>{
	fs.writeFileSync('cool.json',JSON.stringify(Notes));
};
var addNotes=(title,body) => {
	var Notes=fetchNotes();
	var Note={
		title,
		body
	};
	var duplicateNotes=Notes.filter((Note) => Note.title===title);
	if (duplicateNotes.length===0) {

	Notes.push(Note);
	saveNotes(Notes);
	return Note;
	}
	 
};
var getAll=() =>{
	return fetchNotes();
};
var readNotes=(title) => {
	var Notes=fetchNotes();
	var noteRead= Notes.filter((Note) => Note.title===title);
	return (noteRead[0]);
};
var removeNotes=(title) => {
	var Notes=fetchNotes();
	var filterNotes=Notes.filter((Note) => Note.title!==title);
	saveNotes(filterNotes);
	return Notes.length !==filterNotes.length;
}
var logNotes = (Note) =>{
	console.log("--");
	console.log("title: "+Note.title);
	console.log("Body: "+Note.body);
} ;
module.exports={
	addNotes,
	getAll,
	readNotes,
	removeNotes,
	logNotes
};