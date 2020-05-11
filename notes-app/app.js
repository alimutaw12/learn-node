const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

/*add command*/
yargs.command({
		command: 'add',
		describe: 'Add a new note!',
		builder: {
				title: {
						describe: 'Note title',
						demandOption: true,
						type: 'string'
				},
				body: {
						describe: 'Note body',
						demandOption: true,
						type: 'string'
				},
		},
		handler(argv) {
				notes.addNote(argv.title, argv.body)
		}
})

/*remove command*/
yargs.command({
		command: 'remove',
		describe: 'Remove a new note!',
		builder: {
				title: {
						describe: 'Note title',
						demandOption: true,
						type: 'string'
				}
		},
		handler(argv) {
				notes.removeNote(argv.title)
		}
})

/*list command*/
yargs.command({
		command: 'list',
		describe: 'List of notes!',
		handler() {
				notes.listNotes()
		}
})

/*read command*/
yargs.command({
		command: 'read',
		describe: 'Read notes!',
		builder: {
				title: {
						describe: 'Note title',
						demandOption: true,
						type: 'string'
				}
		},
		handler(argv) {
				notes.readNote(argv.title)
		}
})

yargs.parse()

// if (command === 'add') {
// 		console.log("adding new note")
// }

// const add = require('./utils.js')
//
// const sum = add(3,4)
//
// console.log(sum)
