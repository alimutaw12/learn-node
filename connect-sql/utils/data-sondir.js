'use strict';
const excelToJson = require('convert-excel-to-json');
const path = require('path')

const dataSondirJsonFromExcel = (path) => {
  const project = excelToJson({ sourceFile: path, range: 'F4', columnToKey: { F: 'Project' } })
  const location = excelToJson({ sourceFile: path, range: 'F5', columnToKey: { F: 'Location' } })
  const soundingNo = excelToJson({ sourceFile: path, range: 'F6', columnToKey: { F: 'SoundingNo' } })
  const date = excelToJson({ sourceFile: path, range: 'F7', columnToKey: { F: 'Date' } })
  const depthOfSounding = excelToJson({ sourceFile: path, range: 'O4', columnToKey: { O: 'DepthOfSounding' } })
  const groundSurfaceLevel = excelToJson({ sourceFile: path, range: 'O5', columnToKey: { O: 'GroundSurfaceLevel' } })
  const coordinateX = excelToJson({ sourceFile: path, range: 'O6', columnToKey: { O: 'CoordinateX' } })
  const coordinateY = excelToJson({ sourceFile: path, range: 'O7', columnToKey: { O: 'CoordinateY' } })
  const mukaAirTanah = excelToJson({ sourceFile: path, range: 'O8', columnToKey: { O: 'MukaAirTanah' } })

  var infomation = {}

  infomation.Project = project['T.057'][0].Project
  infomation.Location = location['T.057'][0].Location
  infomation.SoundingNo = soundingNo['T.057'][0].SoundingNo
  infomation.Date = date['T.057'][0].Date
  infomation.DepthOfSounding = depthOfSounding['T.057'][0].DepthOfSounding
  infomation.GroundSurfaceLevel = groundSurfaceLevel['T.057'][0].GroundSurfaceLevel
  infomation.CoordinateX = coordinateX['T.057'][0].CoordinateX
  infomation.CoordinateY = coordinateY['T.057'][0].CoordinateY
  if (mukaAirTanah['T.057'][0] === undefined) {
  		infomation.MukaAirTanah = ""
  } else {
  		infomation.MukaAirTanah = mukaAirTanah['T.057'][0].MukaAirTanah
  }

  const dataExcel = excelToJson({
      sourceFile: path,
  		header:{
          rows: 11
      },
  		columnToKey: {
  				D: 'SignDepth',
  				E: 'Depth',
  				G: 'Qc',
  				I: 'Qt',
  				K: 'Fs',
  				M: 'Ft',
  				P: 'Fr',
      }
  });

  const data = dataExcel['T.057']

  data.forEach((item, i) => {
  		if (item.SignDepth === '-' && item.Depth !== 0) {
  				// console.log(item)
  				item.Depth = -1*item.Depth
  		}

  		if (item.Qc === undefined) {
  				item.Qc = ''
  		}

  		if (item.Qt === undefined) {
  				item.Qt = ''
  		}

  		if (item.Fs === undefined) {
  				item.Fs = ''
  		}

  		if (item.Ft === undefined) {
  				item.Ft = ''
  		}

  		if (item.Fr === undefined) {
  				item.Fr = ''
  		}

  		item.SBT = ''

  		delete item.SignDepth
  });

  var result = {}
  result.infomation = infomation
  result.data = data

  return result
}

exports.dataSondirJsonFromExcel = dataSondirJsonFromExcel
