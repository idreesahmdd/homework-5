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

// document.getElementById("submit").addEventListener("click", function (e) {
//     e.preventDefault();
//     let data = [];

//     const nama = document.getElementById("nama");
//     if (nama.value.length === 0) {
//         alert("Masukkan nama kamu");
//     } else if (nama.value.length < 10) {
//         alert("Nama yang kamu masukkan salah");
//     } else {
//         data.push(nama.value);
//     }

//     const usia = document.getElementById("usia");
//     if (usia.value === "") {
//         alert("Masukkan usia kamu");
//     } else if (usia.value < 25) {
//         alert("Usia kamu tidak memenuhi syarat");
//     } else if (usia.value > 100) {
//         alert("Usia kamu ketuaan");
//     } else {
//         data.push(usia.value);
//     }

//     const uang = document.getElementById("uang-sangu");
//     if (uang.value === "") {
//         alert("Masukkan uang sangu kamu");
//     } else if (uang.value >= 100000 && uang.value <= 1000000) {
//         data.push(uang.value);
//     }

//     console.log(data);
// });

// const nama = document.getElementById("nama");
// const usia = document.getElementById("usia");
// const uang = document.getElementById("uang-sangu");

// class DataInput {
//     constructor(nama, uang, usia) {
//         this.nama = nama;
//         this.uang = uang;
//         this.usia = usia;
//     }
// }

// let data = [new DataInput("A", 10, 20000), new DataInput("B", 15, 50000)];
// console.log(data);

// OOP => Object Oriented Programming

// CLASS ===> BLUEPRINT
// OBJECT ===> REAL LIFE OBJECT

// class Animal {

//     // Class Scope
//     constructor(age, color) {
//         this.age = age;
//         this.color = color;
//     }
// }

// let data = [
//     new Person("nama", 23, 500000),
//     new Person("nama", 23, 500000),
//     new Person("nama", 23, 500000)
// ]
// nama = "jajang"
// umur = 23
// sangu = 200k

// let nama = "jajang"

// console.log(nama.length === 0)

// if(nama.length === 0) {
// alert("nama tidak boleh kosong")
// }

// data.push(new Person(nama, umur, sangu))
// new Animal(2, "white")
// ----> age = undefined
// ----> color = undefined

// Global scope
// const cat = new Animal(2, "white")
// console.log(cat.color)

// const dog = new Animal(4, "black")
// console.log(dog.color)
