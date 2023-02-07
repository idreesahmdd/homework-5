class DataInput {
    constructor(nama, usia, uang) {
        this.nama = nama;
        this.usia = usia;
        this.uang = uang;
    }
}

const dataList = [];

const submit = document.getElementById("submit");

const namaInput = document.getElementById("nama");
const usiaInput = document.getElementById("usia");
const uangInput = document.getElementById("uang-sangu");

const tableData = document.getElementById("table-data");
const resume = document.getElementById("resume");

const errorNama = document.getElementById("nama-error");
const errorUsia = document.getElementById("usia-error");
const errorUangSangu = document.getElementById("uang-error");
const benar = document.getElementById("input-sukses");

// ----------------- INPUT VALIDASI ------------------//
function inputValidationNama(nama) {
    let inputSubmitNama = true;

    if (nama.length < 10) {
        inputSubmitNama = false;
    }
    return inputSubmitNama;
}

function inputValidationUsia(usia) {
    let inputSubmitUsia = true;
    if (usia < 25 || usia > 100) {
        inputSubmitUsia = false;
    }
    return inputSubmitUsia;
}

function inputValidationUang(uang) {
    let inputSubmitUang = true;
    if (uang < 100000 || uang > 1000000) {
        inputSubmitUang = false;
    }
    return inputSubmitUang;
}

function dataTable(tableData) {
    for (let i = 0; i < dataList.length; i++) {
        let row = tableData.insertRow(i);

        row.insertCell(0).innerHTML = i + 1;
        row.insertCell(1).innerHTML = dataList[i].nama;
        row.insertCell(2).innerHTML = dataList[i].usia;
        row.insertCell(3).innerHTML = dataList[i].uang;
    }
}

function avgUangSangu() {
    let total = 0;
    let avg = 0;
    for (i = 0; i < dataList.length; i++) {
        total += Number(dataList[i].uang);
        avg = total / dataList.length;
    }
    return avg;
}
// console.log("rata-rata uang " + avgUangSangu());

function avgUsia() {
    let total = 0;
    let avg = 0;
    for (i = 0; i < dataList.length; i++) {
        total += Number(dataList[i].usia);
        avg = total / dataList.length;
    }
    return avg;
}
// console.log("rata-rata usia " + avgUsia());

resume.innerHTML = "Rata-rata Uang Sangu Rp" + avgUangSangu() + " dan Rata-rata Usia " + avgUsia() + " tahun";

submit.addEventListener("click", (e) => {
    e.preventDefault();

    const nama = namaInput.value;
    const usia = usiaInput.value;
    const uang = uangInput.value;

    const inputSubmitNama = inputValidationNama(nama);
    const inputSubmitUsia = inputValidationUsia(usia);
    const inputSubmitUang = inputValidationUang(uang);

    if (inputSubmitNama == true && inputSubmitUsia == true && inputSubmitUang == true) {
        const newData = new DataInput(nama, usia, uang);
        dataList.push(newData);

        tableData.innerHTML = "";
        dataTable(tableData);

        errorNama.innerHTML = "";
        errorUsia.innerHTML = "";
        errorUangSangu.innerHTML = "";
        benar.innerHTML = "Data Berhasil di Inputkan";

        resume.innerHTML = "Rata-rata Uang Sangu Rp" + Math.round(avgUangSangu()) + " dan Rata-rata Usia " + Math.round(avgUsia()) + " tahun";
    } else {
        // ------------- INPUT VALIDASI --------------- //
        if (inputSubmitNama == false) {
            errorNama.innerHTML = "*Masukkan Nama minimal 10 Karakter";
        } else {
            errorNama.innerHTML = "";
        }

        if (inputSubmitUsia == false) {
            errorUsia.innerHTML = "*Usia minimal 25 tahun";
        } else {
            errorUsia.innerHTML = "";
        }

        if (inputSubmitUang == false) {
            errorUangSangu.innerHTML = "*Uang Sangu Rp100.000 - Rp1.000.000";
        } else {
            errorUangSangu.innerHTML = "";
        }
        benar.innerHTML = " ";
    }
});
