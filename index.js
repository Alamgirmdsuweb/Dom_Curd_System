const body = document.body;

const Table_side = document.createElement("div");
Table_side.setAttribute("class", "Container");
body.append(Table_side);

const Table_list = document.createElement("div");
Table_list.setAttribute("class", "create");
body.append(Table_list);
let table1 = document.createElement("table");
table1.setAttribute("class", "table");
table1.setAttribute("id", "table");

let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

tbody.setAttribute("id", "Tdshow");
Table_side.appendChild(Table_list);
table1.appendChild(thead);
table1.appendChild(tbody);
Table_list.appendChild(table1);

let vla = document.createElement("span");
vla.setAttribute("class", "verticalLine");
vla.id = "vl";
Table_side.appendChild(vla);

let row_ = document.createElement("tr");
row_.className = "row";
let userListHeading = document.createElement("th");
let newUserHeading = document.createElement("th");
userListHeading.setAttribute("colspan", "2");
newUserHeading.setAttribute("colspan", "4");
userListHeading.className = "userListHeading";
newUserHeading.className = "newUserHeading";
userListHeading.innerHTML = "User List";

let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.setAttribute("scope", "col");
heading_1.innerHTML = "ID";

let heading_2 = document.createElement("th");
heading_2.setAttribute("scope", "col");
heading_2.innerHTML = "Name";

let heading_3 = document.createElement("th");
heading_3.setAttribute("scope", "col");
heading_3.innerHTML = "Email";

let heading_4 = document.createElement("th");
heading_4.setAttribute("scope", "col");
heading_4.innerHTML = "Address";

let heading_5 = document.createElement("th");
heading_5.setAttribute("scope", "col");
heading_5.setAttribute("colspan", "2");
heading_5.innerHTML = "Actions";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_.appendChild(userListHeading);

row_.appendChild(newUserHeading);
thead.appendChild(row_);
thead.appendChild(row_1);
newUserHeading.className = "newUserHeading";
row_.className = "row";

let newBtn = document.createElement("button");

newBtn.innerText = "+ New";
newBtn.className = "new";
newBtn.id = "new";

newUserHeading.appendChild(newBtn);




// Add details side

const AddDetails = document.createElement("div");
AddDetails.className = "modal1";
AddDetails.id = "modal1";

const AddDetailsTitel = document.createElement("div");
AddDetailsTitel.className = "title";
Table_side.append(AddDetails);
AddDetails.append(AddDetailsTitel);
const AddDetailsText = document.createElement("p");
AddDetailsText.innerText = "ADD details";
AddDetailsTitel.append(AddDetailsText);

const AddDetailsText1 = document.createElement("span");
AddDetailsText1.className = "close";

AddDetails.append(AddDetailsText1);

const AddDetailsIcons = document.createElement("i");
AddDetailsIcons.className = "fa-solid fa-circle-xmark";
AddDetailsIcons.id = "close";
AddDetailsIcons.onclick = closePopup;
AddDetailsText.append(AddDetailsIcons);

//input field

const AddDetailsInputFile = document.createElement("div");

AddDetailsInputFile.className = "inputFile";
AddDetailsInputFile.id = "inputFile";
AddDetails.append(AddDetailsInputFile);

const AddDetailsName = document.createElement("label");
AddDetailsName.innerText = "Name:";

AddDetailsInputFile.append(AddDetailsName);
const AddDetailsBreak = document.createElement("br");
AddDetailsName.append(AddDetailsBreak);

const AddDetailsinput = document.createElement("input");
AddDetailsinput.id = "inputName";
AddDetailsinput.type = "text";
AddDetailsinput.name = "name";
AddDetailsinput.placeholder = "Enter your name";
AddDetailsinput.autocomplete = "off";
AddDetailsinput.onkeyup = AddvalidateName;
AddDetailsName.append(AddDetailsinput);

const AddDetailsErr = document.createElement("span");
AddDetailsErr.id = "nameErr";
AddDetailsInputFile.append(AddDetailsErr);

// Email

const AddDetailsInputField = document.createElement("div");
AddDetailsInputField.className = "inputFile";
AddDetailsInputField.id = "inputFile";
AddDetails.append(AddDetailsInputField);

const AddDetailsinput2 = document.createElement("label");
AddDetailsinput2.innerText = "Email:";
AddDetailsInputField.append(AddDetailsinput2);

const Break = document.createElement("br");
AddDetailsinput2.append(Break);

const EmailInput = document.createElement("input");
EmailInput.id = "inputEmail";
EmailInput.type = "email";
EmailInput.name = "email";
EmailInput.placeholder = "Enter Your Email..";
EmailInput.onkeyup = AddvalidateEmail;
AddDetailsinput2.append(EmailInput);

const AddEmailErr = document.createElement("span");
AddEmailErr.id = "emailErr";
AddDetailsInputField.append(AddEmailErr);

// AddDetailsAddress

const AddDetailsInputField2 = document.createElement("div");
AddDetailsInputField2.className = "inputFile";
AddDetailsInputField2.id = "inputFile";
AddDetails.append(AddDetailsInputField2);

const AddDetailsAddr = document.createElement("label");
AddDetailsAddr.innerText = "Address:";
AddDetailsInputField2.append(AddDetailsAddr);

const Br = document.createElement("br");
AddDetailsAddr.append(Br);

const addDetailstext = document.createElement("textarea");
addDetailstext.className = "size";
addDetailstext.id = "inputField";
addDetailstext.name = "inputField";
addDetailstext.onkeyup = AddvalidateAddress;
AddDetailsAddr.append(addDetailstext);

const addressErr = document.createElement("span");
addressErr.id = "AddressErr";
AddDetailsInputField2.append(addressErr);

const AddDetailsCondition = document.createElement("div");
AddDetailsCondition.className = "newADD";
AddDetails.append(AddDetailsCondition);

const ConditionBtn = document.createElement("button");
ConditionBtn.className = "CancleBtn";
ConditionBtn.id = "cancelbtn";
ConditionBtn.type = "button";
ConditionBtn.onclick = Cancel;
ConditionBtn.innerText = "Cancel";
AddDetailsCondition.append(ConditionBtn);

const ConditionBtnspan = document.createElement("span");
AddDetailsCondition.append(ConditionBtnspan);

const ConditionBtnSave = document.createElement("button");
ConditionBtnSave.className = "dataSave";
ConditionBtnSave.id = "save";
ConditionBtnSave.type = "button";
ConditionBtnSave.onclick = Save;
ConditionBtnSave.innerText = "save";
ConditionBtnspan.append(ConditionBtnSave);

const submit = document.createElement("span");
submit.className = "submitErr";
submit.id = "submitErr";
AddDetails.append(submit);








// container

const modal = document.getElementById("modal1");
const btn = document.getElementById("new");
const inputFile = document.getElementById("inputFile");
const dltPupup = document.getElementById("delete");
const deletRow = document.getElementById("deleteRow");
const NewAdd = document.getElementById("NewAdd");
const cancel = document.getElementById("cancelbtn");
const SaveData = document.getElementById("save");
// Edit details
const field = document.getElementById("inputFile");
const addName = document.getElementById("inputName");
const addEmail = document.getElementById("inputEmail");
const addAddr = document.getElementById("inputField");

// edit details
const iName = document.getElementById("iName");
const iEmail = document.getElementById("iEmail");
const textarea = document.getElementById("textarea");
const updateEr = document.getElementById("updateError");
const EditnameErr = document.getElementById("EditnameErr");
const EditemailErr = document.getElementById("EditemailErr");
const EditAddressErr = document.getElementById("EditAddressErr");
//  add details validation
const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const submitErr = document.getElementById("submitErr");
const AddressErr = document.getElementById("AddressErr");

const UserName = document.getElementById("inputName");
const Email = document.getElementById("inputEmail");
const textArea = document.getElementById("inputField");

let url = "https://jsonplaceholder.typicode.com/users";

let dataForTable = [];
let num = "";
let editId = "";

const buildTable = (data) => {
    let tableData = "";
    data.forEach((users, i) => {
        tableData += `<tr>
                <td>${i + 1}</td>
                <td>${users.name}</td>
                <td>${users.email}</td>
                <td>${users.address.city}</td>
                <td><button class="EditBtn"id="editbtn${
                    i + 1
                }"onclick="editbtn(${users.id})">Edit</button></td>
                <td><button class="DeleteBtn" id="deletbtn" onclick="Deletbtn(${
                    users.id
                })">Delete</button></td>
                </tr>`;
    });

    document.getElementById("Tdshow").innerHTML = tableData;
};

window.onload = function () {
    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((objectData) => {
            dataForTable = objectData;
            let ApiobjectData = dataForTable.find((item, i) => i == 0);
            if (ApiobjectData) {
                editId = 1;
                // onload first row show  in edit details

                buildTable(dataForTable);

                iName.value = ApiobjectData.name;

                iEmail.value = ApiobjectData.email;

                textarea.value = ApiobjectData.address.city;
            } else {
                alert("Data not a found");
            }
        });
};

// open modal NEW
btn.addEventListener("click", () => {
    console.log("ok");
    modal.classList.add("openModal");

    SaveData.disabled = false;
});
// function NewOpenPopup() {
//     modal.classList.add("openModal");

//     SaveData.disabled = false;
// }

function closePopup() {
    modal.classList.remove("openModal");
    Clearfield();
}

// updata data
function Save() {
    console.log("ooo");
    const validInput =
        AddvalidateName() && AddvalidateEmail() && AddvalidateAddress();

    SaveData.disabled = true;
    if (validInput) {
        modal.classList.remove("openModal");
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(),
        })
            .then((data) => {
                return data.json();
            })
            .then(() => {
                dataForTable.push({
                    id: dataForTable.length + 1,
                    name: UserName.value,
                    email: Email.value,
                    address: { city: textArea.value },
                });

                let editText = dataForTable.find((item, i) => i == 0);
                if (editText) {
                    editId = editText.id;
                }

                buildTable(dataForTable);

                AddFieldClear();

                // create  value add id Edit details
                let editDataSet = dataForTable.find((item, i) => i == 0);
                iName.value = editDataSet.name;

                iEmail.value = editDataSet.email;

                textarea.value = editDataSet.address.city;
            })

            .catch((err) => console.log(err));
    } else {
        SaveData.disabled = false;
        submitErr.style.display = "block";
        submitErr.innerHTML = "All fields are required";
        setTimeout(function () {
            submitErr.style.display = "none";
        }, 3000);

        return false;
    }
    SaveDataClear();
}

function Cancel() {
    modal.classList.remove("openModal");

    Clearfield();
}

function Deletbtn(id) {
    console.log("ok");
    num = id;
    dltPupup.classList.add("Modal1");
}

function deletConfirm() {
    const newValue = dataForTable.filter((newValue) => newValue.id != num);
    dltPupup.classList.remove("Modal1");

    dataForTable = newValue;
    let onEditSelect = newValue.find((item, i) => {
        return i == 0;
    });

    if (onEditSelect) {
        iName.value = onEditSelect.name;

        iEmail.value = onEditSelect.email;

        textarea.value = onEditSelect.address.city;
        editId = onEditSelect.id;
    }
    if (!onEditSelect) {
        editFieldClear();
    }

    buildTable(newValue);
}
// deletebtnCondition  pupup
function No() {
    dltPupup.classList.remove("Modal1");
}

function removeIcon() {
    dltPupup.classList.remove("Modal1");
}

function editbtn(id) {
    const foundObj = dataForTable.find((item) => item.id == id);

    editId = id;

    iName.value = foundObj.name;

    iEmail.value = foundObj.email;

    textarea.value = foundObj.address.city;
    EditvalidName("iName") &&
        EditvalidEmail("iEmail") &&
        EditvalidAddress("textarea");
}
// Edit detailes

function updateValue() {
    const Input =
        EditvalidName("iName") &&
        EditvalidEmail("iEmail") &&
        EditvalidAddress("textarea");
    if (Input) {
        const foundObj = dataForTable.find((item, i) => item.id == editId);

        foundObj.name = document.getElementById("iName").value;
        foundObj.email = document.getElementById("iEmail").value;
        foundObj.address.city = document.getElementById("textarea").value;

        buildTable(dataForTable);
    } else {
        updateEr.innerHTML = "All fields are required...";
        setTimeout(function () {
            updateEr.style.display = "none";
        }, 3000);

        return false;
    }

    EditIconsClear();
}

// Reset table

function ResetValue() {
    const res = dataForTable.find((item) => item.id == editId);

    iName.value = res.name;

    iEmail.value = res.email;

    textarea.value = res.address.city;
}

// validation

// Edit details validation

function EditvalidName(fieldName) {
    const correctway = /^[A-za-z]+$/;
    let name = document.getElementById(fieldName).value;

    if (name === "") {
        return false;
    }
    if (name.length < 5) {
        EditnameErr.innerHTML = "Minimum  5 characters";
        return false;
    }
    if (name.length > 30) {
        EditnameErr.innerHTML = " Maximun 20 characters";
        return false;
    }
    if (name.match(correctway) === null || name.match(correctway)) {
        EditnameErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        return true;
    }
}

function EditvalidEmail(fieldEmail) {
    const Email = document.getElementById(fieldEmail).value;

    const correctways = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,15}$/;
    let correctEmail = Email.match(correctways);

    if (Email === "") {
        return false;
    }
    if (Email.length < 10) {
        EditemailErr.innerHTML = "Minimum 10 characters";
        return false;
    }
    if (Email.length > 50) {
        EditemailErr.innerHTML = "Maximum 50 characters";
    }

    if (!correctEmail) {
        EditemailErr.innerHTML = "Email is Invalid";
        return false;
    }
    EditemailErr.innerHTML =
        '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}

function EditvalidAddress(addressField) {
    let address = document.getElementById(addressField).value;

    if (address === "") {
        EditAddressErr.innerHTML = "Please enter your address";
    }
    if (address.length < 10) {
        EditAddressErr.innerHTML = "minimum 10 characters";
        return false;
    }
    if (address.length > 50) {
        EditAddressErr.innerHTML = "maximum 50 characters";
        return false;
    }
    EditAddressErr.innerHTML =
        '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}

// Add details validation

function AddvalidateName() {
    const correctway = /^[A-za-z]+$/;
    let name = document.getElementById("inputName").value;

    if (name === "") {
        return false;
    }
    if (name.length < 5) {
        nameErr.innerHTML = "Minimum 5 characters";
        return false;
    }
    if (name.length > 20) {
        nameErr.innerHTML = "Maximum 20 characters";
        return false;
    }
    if (name.match(correctway)) {
        nameErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        return true;
    }
}

function AddvalidateEmail() {
    let email = document.getElementById("inputEmail").value;
    const correctway = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,15}$/;
    if (email === "") {
        emailErr.innerHTML = "Please enter a valid email";
    }
    if (email.length < 10) {
        emailErr.innerHTML = "Minimum 10 characters";
        return false;
    }
    if (email.length > 50) {
        emailErr.innerHTML = "Maximum 50 characters";
    }
    if (!email.match(correctway)) {
        emailErr.innerHTML = "Email is Invalid";
        return false;
    }
    emailErr.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}

function AddvalidateAddress() {
    let address = document.getElementById("inputField").value;
    if (address === "") {
        return false;
    }
    if (address.length < 10) {
        AddressErr.innerHTML = "minimum 10 characters";
        return false;
    }
    if (address.length > 50) {
        AddressErr.innerHTML = "maximum 50 characters";
        return false;
    }
    AddressErr.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}

function Clearfield() {
    addName.value = "";
    addEmail.value = "";
    addAddr.value = "";
    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    AddressErr.innerHTML = "";
}
function editFieldClear() {
    iName.value = "";
    iEmail.value = "";
    textarea.value = "";
}
function EditIconsClear() {
    EditnameErr.innerHTML = "";
    EditemailErr.innerHTML = "";
    EditAddressErr.innerHTML = "";
}
function SaveDataClear() {
    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    AddressErr.innerHTML = "";
    submitErr.innerHTML = "";
}
function AddFieldClear() {
    UserName.value = "";
    Email.value = "";
    textArea.value = "";
}
