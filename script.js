class DataInput {
    constructor(nama, usia, uang) {
        this.nama = nama;
        this.usia = usia;
        this.uang = uang;
    }
}

const dataList = [new DataInput("Suep Juneng", 32, 320000), new DataInput("Jajang Miharga", 28, 190000)];

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
dataTable(tableData);

function hitungTotalUangSangu() {
    let total = 0;
    for (i = 0; i < dataList.length; i++) {
        total += dataList[i].uang;
    }
    return total;
}
totalUangSangu = hitungTotalUangSangu();
avgUangSangu = totalUangSangu / dataList.length;

//
function hitungTotalUsia() {
    let total = 0;
    for (i = 0; i < dataList.length; i++) {
        total += dataList[i].usia;
    }
    return total;
}
totalUsiaSemua = hitungTotalUsia();
avgUsia = totalUsiaSemua / dataList.length;

resume.innerHTML = "Rata-rata uang sangu Rp" + Math.round(avgUangSangu) + " dan Rata-rata usia " + Math.round(avgUsia);

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
        //
    } else {
        // ------------- INPUT VALIDASI --------------- //
        if (inputSubmitNama == true) {
            errorNama.innerHTML = "";
        } else {
            errorNama.innerHTML = "*Masukkan Nama minimal 10 Karakter";
        }

        if (inputSubmitUsia == true) {
            errorUsia.innerHTML = "";
        } else {
            errorUsia.innerHTML = "*Usia kamu tidak memenuhi syarat";
        }

        if (inputSubmitUang == true) {
            errorUangSangu.innerHTML = "";
        } else {
            errorUangSangu.innerHTML = "*Uang Sangu tidak sesuai kriteria";
        }
    }
});
