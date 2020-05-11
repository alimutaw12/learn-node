const fs = require('fs')

const addNote = (title, body) => {
		const notes = loadNotes()
		const duplicateNote = notes.find((note) => note.title === title)

		if (duplicateNote === undefined) {
				notes.push({
					title: title,
					body: body
				})

				saveNote(notes)
		}
}

const removeNote = (title) => {
		const notes = loadNotes()
		const duplicateNotes = notes.filter((note) => note.title !== title)

		if (notes.length !== duplicateNotes.length) {
				saveNote(duplicateNotes)
		}
}

const listNotes = () => {
		const notes = loadNotes()
		notes.forEach((note, i) => {
				console.log(note.title)
		});
}

const readNote = (title) => {
		const notes = loadNotes()
		const duplicateNote = notes.find((note) => note.title === title)

		if (duplicateNote !== undefined) {
				console.log(duplicateNote.body)
		}
}

const saveNote = (notes) => {
		const dataJSON = JSON.stringify(notes)
		fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
		try {
				const dataBuffer = fs.readFileSync('notes.json')
				const dataJSON = dataBuffer.toString()
				return JSON.parse(dataJSON)
		} catch (e) {
				return []
		}
}

module.exports = {
		addNote: addNote,
		removeNote: removeNote,
		listNotes: listNotes,
		readNote: readNote
}
