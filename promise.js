const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = emosi => {
  let hasilMarah = 0
  let hasilTidakMarah = 0
    if (emosi === 'marah') {
      return promiseTheaterIXX().then((data) => {
        data.forEach ((array) => {
        if (array.hasil === 'marah') {
          hasilMarah++
        } else if (array.hasil === 'tidak marah') {
          hasilTidakMarah++
        }  
        })
        console.log(hasilMarah)
        console.log(hasilTidakMarah)
      })
    }
}

module.exports = {
  promiseOutput
};
