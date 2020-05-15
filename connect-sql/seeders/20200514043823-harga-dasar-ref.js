'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const rok = 10/100
      const data = [
          /*material*/
          { item:"Semen (PC) 50 kg", unit:"kg", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Pasir Urug", unit:"m3", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Pasir Beton", unit:"m3", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Krikil Beton", unit:"m3", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Kawat Beton", unit:"kg", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Paku", unit:"kg", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Besi Polos U 24 - BJTP 24", unit:"kg", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Besi Ulir U 39 - BJTD 40", unit:"kg", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"PVC diameter 2 \"", unit:"m'", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Kayu Terentang", unit:"m3", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"BBM/Solar", unit:"liter", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Air", unit:" ", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Kaso 5/7 cm", unit:"m3", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Papan 3/20", unit:"m3", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Casing", unit:"ls", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Cleats", unit:"sets", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Bolt and Nuts", unit:"sets", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Dewatering", unit:"ls", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Test Concrete Cylinder", unit:"no", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },
          { item:"Installed stake of concrete for tower area", unit:"no", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"material", createdAt:new Date(), updatedAt:new Date() },

          /*tenaga kerja*/
          { item:"Pekerja", unit:"OH", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"tenaga kerja", createdAt:new Date(), updatedAt:new Date() },
          { item:"Mandor", unit:"OH", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"tenaga kerja", createdAt:new Date(), updatedAt:new Date() },
          { item:"Tukang Batu", unit:"OH", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"tenaga kerja", createdAt:new Date(), updatedAt:new Date() },
          { item:"Tukang Besi", unit:"OH", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"tenaga kerja", createdAt:new Date(), updatedAt:new Date() },
          { item:"Tukang Kayu", unit:"OH", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"tenaga kerja", createdAt:new Date(), updatedAt:new Date() },
          { item:"Tukang Pipa", unit:"OH", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"tenaga kerja", createdAt:new Date(), updatedAt:new Date() },
          { item:"Kepala Tukang", unit:"OH", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"tenaga kerja", createdAt:new Date(), updatedAt:new Date() },
          { item:"Operator", unit:"OH", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"tenaga kerja", createdAt:new Date(), updatedAt:new Date() },
          { item:"Enjinir", unit:"OH", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"tenaga kerja", createdAt:new Date(), updatedAt:new Date() },
          { item:"Juru ukur", unit:"OH", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"tenaga kerja", createdAt:new Date(), updatedAt:new Date() },

          /*peralatan*/
          { item:"Mesin Molen", unit:"jam", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"peralatan", createdAt:new Date(), updatedAt:new Date() },
          { item:"Waterpass", unit:"Sewa-Hari", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"peralatan", createdAt:new Date(), updatedAt:new Date() },
          { item:"Drilling Machine", unit:"jam", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"peralatan", createdAt:new Date(), updatedAt:new Date() },
          { item:"Tremie Pipa", unit:"jam", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"peralatan", createdAt:new Date(), updatedAt:new Date() },
          { item:"Mollen", unit:"jam", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"peralatan", createdAt:new Date(), updatedAt:new Date() },
          { item:"Theodalite", unit:"jam", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"peralatan", createdAt:new Date(), updatedAt:new Date() },
          { item:"Support Equipment", unit:"jam", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"peralatan", createdAt:new Date(), updatedAt:new Date() },
          { item:"Mobilization Equipment", unit:"ls", jurnal_price:500, tax_price:500+rok*500, source:"Pricelist Jakarta", type:"peralatan", createdAt:new Date(), updatedAt:new Date() },
      ]

      return queryInterface.bulkInsert('harga_dasar_ref', data)
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('harga_dasar_ref', null, {})
  }
};
