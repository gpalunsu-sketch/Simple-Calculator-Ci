function cekAngka(x) {
  if (typeof x !== "number" || Number.isNaN(x)) {
    throw new Error("Input harus berupa angka");
  }
}

function add(a, b) {
  cekAngka(a);
  cekAngka(b);
  return a + b;
}

function subtract(a, b) {
  cekAngka(a);
  cekAngka(b);
  return a - b;
}

function multiply(a, b) {
  cekAngka(a);
  cekAngka(b);
  return a * b;
}

function divide(a, b) {
  cekAngka(a);
  cekAngka(b);
  if (b === 0) {
    throw new Error("Tidak bisa membagi dengan nol");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

if (require.main === module) {
  const [operasi, angka1, angka2] = process.argv.slice(2);
  const fungsi = { add, subtract, multiply, divide }[operasi];

  if (!fungsi) {
    console.log("Cara pakai: node calculator.js <add|subtract|multiply|divide> <angka1> <angka2>");
  } else {
    try {
      console.log("Hasil:", fungsi(Number(angka1), Number(angka2)));
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
}