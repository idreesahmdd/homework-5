class DataInput {
    constructor(nama, usia, uang) {
        this.nama = nama;
        this.usia = usia;
        this.uang = uang;
    }
}

const dataList = [new DataInput("Suep Juneng", 32, 320000), new DataInput("Alexander Sucipto", 27, 245000), new DataInput("Sri Mahyuni", 49, 142000)];

window.addEventListener("load", () => {
    const submit = document.getElementById("submit");
    const tableData = document.getElementById("table-data");
    const resume = document.getElementById("resume");
    dataTable(tableData);
    resume.innerHTML = `Rata-rata uang pendaftar adalah ` + `. . .`;

    const namaInput = document.getElementById("nama");
    const usiaInput = document.getElementById("usia");
    const uangInput = document.getElementById("uang-sangu");

    // const errorNama = document.getElementById("nama-error");
    // const errorUsia = document.getElementById("usia-error");
    // const errorUangSangu = document.getElementById("uang-error");
    // resume.innerHTML = " ";

    submit.addEventListener("click", (e) => {
        e.preventDefault();

        const nama = namaInput.value;
        const usia = usiaInput.value;
        const uang = uangInput.value;

        const { inputSubmit } = inputValidation(nama, usia, uang);

        if (inputSubmit) {
            const newData = new DataInput(nama, usia, uang);

            dataList.push(newData);

            tableData.innerHTML = "";
            dataTable(tableData);

            resume.innerHTML = "Rata-rata uang sangu adalah " + " . . .";
        }
    });
});

function inputValidation(nama, usia, uang) {
    let inputSubmit = true;

    if (nama.length === 0) {
        inputSubmit = false;
        alert("Masukkan nama anda");
    } else if (nama.length < 10) {
        inputSubmit = false;
        alert("Masukkan nama minimal 10 karakter");
    }

    if (usia < 25 || usia > 100) {
        inputSubmit = false;
        alert("Usia tidak memenuhi syarat");
    }

    if (uang < 100000 || uang > 1000000) {
        inputSubmit = false;
        alert("Uang sangu tidak sesuai kriteria");
    }

    return {
        inputSubmit,
    };
}

function dataTable(tableData) {
    for (let i = 0; i < dataList.length; i++) {
        let row = tableData.insertRow(i);

        row.insertCell(0).innerHTML = `${i + 1}`;
        row.insertCell(1).innerHTML = `${dataList[i].nama}`;
        row.insertCell(2).innerHTML = `${dataList[i].usia}`;
        row.insertCell(3).innerHTML = `${dataList[i].uang}`;
    }
}
