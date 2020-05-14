'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const pondation = ['Dalam', 'Dangkal']
      const book = [1, 2, 3, 4]
      const voltage_rating = ['150 kV 2x250', '150 kV 2x450', '150 kV 4x450', '275 kV 2x450', '275 kV 4x450', '500 kV 4x450']
      const tower_type = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG']
      const body_extension = [6, 9, 15]
      const pondation_class = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '7']
      var data = []

      pondation.forEach((item, i) => {
          const title = `Katalog dengan pondasi ${item} buku ${book[0]} rating tegangan ${voltage_rating[0]} tipe tower ${tower_type[0]} body extension ${body_extension[0]} kelas fondasi ${pondation_class[0]}`
          var row = {
            title: title,
            pondation: item,
            book: book[0],
            voltage_rating: voltage_rating[0],
            tower_type: tower_type[0],
            body_ext: body_extension[0],
            pondation_class: pondation_class[0],
            link_doc: './storage/katalog/katalog.pdf',
            createdAt: new Date(),
            updatedAt: new Date()
          }
          data.push(row)
      });

      book.forEach((item, i) => {
          const title = `Katalog dengan pondasi ${pondation[0]} buku ${item} rating tegangan ${voltage_rating[0]} tipe tower ${tower_type[0]} body extension ${body_extension[0]} kelas fondasi ${pondation_class[0]}`
          var row = {
            title: title,
            pondation: pondation[0],
            book: item,
            voltage_rating: voltage_rating[0],
            tower_type: tower_type[0],
            body_ext: body_extension[0],
            pondation_class: pondation_class[0],
            link_doc: './storage/katalog/katalog2.pdf',
            createdAt: new Date(),
            updatedAt: new Date()
          }
          data.push(row)
      });

      voltage_rating.forEach((item, i) => {
          const title = `Katalog dengan pondasi ${pondation[0]} buku ${book[0]} rating tegangan ${item} tipe tower ${tower_type[0]} body extension ${body_extension[0]} kelas fondasi ${pondation_class[0]}`
          var row = {
            title: title,
            pondation: pondation[0],
            book: book[0],
            voltage_rating: item,
            tower_type: tower_type[0],
            body_ext: body_extension[0],
            pondation_class: pondation_class[0],
            link_doc: './storage/katalog/katalog.pdf',
            createdAt: new Date(),
            updatedAt: new Date()
          }
          data.push(row)
      });

      tower_type.forEach((item, i) => {
          const title = `Katalog dengan pondasi ${pondation[0]} buku ${book[0]} rating tegangan ${voltage_rating[0]} tipe tower ${item} body extension ${body_extension[0]} kelas fondasi ${pondation_class[0]}`
          var row = {
            title: title,
            pondation: pondation[0],
            book: book[0],
            voltage_rating: voltage_rating[0],
            tower_type: item,
            body_ext: body_extension[0],
            pondation_class: pondation_class[0],
            link_doc: './storage/katalog/katalog.pdf',
            createdAt: new Date(),
            updatedAt: new Date()
          }
          data.push(row)
      });

      body_extension.forEach((item, i) => {
          const title = `Katalog dengan pondasi ${pondation[0]} buku ${book[0]} rating tegangan ${voltage_rating[0]} tipe tower ${tower_type[0]} body extension ${item} kelas fondasi ${pondation_class[0]}`
          var row = {
            title: title,
            pondation: pondation[0],
            book: book[0],
            voltage_rating: voltage_rating[0],
            tower_type: tower_type[0],
            body_ext: item,
            pondation_class: pondation_class[0],
            link_doc: './storage/katalog/katalog.pdf',
            createdAt: new Date(),
            updatedAt: new Date()
          }
          data.push(row)
      });

      pondation_class.forEach((item, i) => {
          const title = `Katalog dengan pondasi ${pondation[0]} buku ${book[0]} rating tegangan ${voltage_rating[0]} tipe tower ${tower_type[0]} body extension ${body_extension[0]} kelas fondasi ${item}`
          var row = {
            title: title,
            pondation: pondation[0],
            book: book[0],
            voltage_rating: voltage_rating[0],
            tower_type: tower_type[0],
            body_ext: body_extension[0],
            pondation_class: item,
            link_doc: './storage/katalog/katalog.pdf',
            createdAt: new Date(),
            updatedAt: new Date()
          }
          data.push(row)
      });

      return queryInterface.bulkInsert('katalog', data)
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('katalog', null, {})
  }
};
