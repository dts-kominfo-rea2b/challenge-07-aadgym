const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emosi) => {
  const arrayXXI = await promiseTheaterIXX();
  const arrayVGC = await promiseTheaterVGC();
  const arrayFilm = arrayXXI.concat(arrayVGC);
  const arrayEmosi = arrayFilm.filter(x => x.hasil == emosi)
  const sumEmosi = arrayEmosi.length
  return sumEmosi;
}
//const promiseOutput = asyn;

module.exports = {
  promiseOutput,
};
