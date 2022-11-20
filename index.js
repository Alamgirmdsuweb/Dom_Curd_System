const body = document.body;
let url = "https://jsonplaceholder.typicode.com/users";

let dataForTable = [];
let num = "";
let editId = "";

let Container;
let validationSide;
let EditSide;
let EditForm;
let EditSideText;
let deleteSide;
let TableSide;
let AddDetails;
function ContainerSide() {
    Container = document.createElement("div");
    Container.setAttribute("class", "Container");
    body.append(Container);
}
ContainerSide();

function validation() {
    validationSide = document.createElement("div");
    validationSide.setAttribute("class", "verticalLine");
    Container.appendChild(validationSide);
}
validation();

//   <!-- Edit details side -->

function EditDetailsSide() {
    EditSide = document.createElement("div");
    EditSide.className = "EditDetails";
    EditSide.id = "Edit";
    Container.append(EditSide);

    EditSideText = document.createElement("span");
    EditSideText.className = "title";
    EditSideText.innerText = "Edit details";
    EditSide.append(EditSideText);

    const EditInputField = document.createElement("div");
    EditInputField.className = "inputFileBox";
    EditSide.append(EditInputField);

    EditForm = document.createElement("form");
    EditForm.id = "editside";
    EditInputField.append(EditForm);

    const EditFieldName = document.createElement("label");
    EditFieldName.innerText = "Name:";
    EditForm.append(EditFieldName);

    const lineBr = document.createElement("br");
    EditFieldName.append(lineBr);

    const EditN = document.createElement("div");
    EditN.className = "addName";
    EditForm.append(EditN);

    const EditInputName = document.createElement("input");
    EditInputName.className = "Name";
    EditInputName.id = "iName";
    EditInputName.type = "text";
    EditInputName.name = "";
    EditInputName.placeholder = "Enter your name....";
    EditInputName.value = "";
    EditInputName.autocomplete = "off";
    EditInputName.onkeyup = EditvalidName;
    EditN.append(EditInputName);

    const EditErrNa = document.createElement("span");
    EditErrNa.className = "EditnameErr";
    EditErrNa.id = "EditnameErr";
    EditN.append(EditErrNa);

    const EditErrNaBr = document.createElement("br");
    EditErrNa.append(EditErrNaBr);

    // // Edit Email

    const EditSidelable = document.createElement("label");
    EditSidelable.innerText = "Email:";
    EditForm.append(EditSidelable);

    const EditEmailBr = document.createElement("br");
    EditForm.append(EditEmailBr);

    const EditAddEmail = document.createElement("div");
    EditAddEmail.className = "AddEmail";
    EditForm.append(EditAddEmail);

    const EditAddEm = document.createElement("input");
    EditAddEm.className = "Email";
    EditAddEm.id = "iEmail";
    EditAddEm.type = "email";
    EditAddEm.placeholder = "Enter Your Email..";
    EditAddEm.name = "email";
    EditAddEm.value = "";
    EditAddEm.onkeyup = EditvalidEmail;
    EditAddEmail.append(EditAddEm);

    const EditEmError = document.createElement("span");
    EditEmError.className = "EditemailErr";
    EditEmError.id = "EditemailErr";
    EditAddEmail.append(EditEmError);

    const EditEmailB = document.createElement("br");
    EditAddEmail.append(EditEmailB);

    // // Edit Address

    const EditAddrside = document.createElement("label");
    EditAddrside.innerText = "Address:";
    EditForm.append(EditAddrside);

    const EditAddrsideBr = document.createElement("br");
    EditForm.append(EditAddrsideBr);

    const EditAddAddr = document.createElement("div");
    EditAddAddr.className = "addAddress";
    EditForm.append(EditAddAddr);

    const EditAddAddrForm = document.createElement("form");
    EditAddAddr.append(EditAddAddrForm);

    const EditAddAddrTextAre = document.createElement("textarea");
    EditAddAddrTextAre.className = "size";
    EditAddAddrTextAre.id = "textarea";
    EditAddAddrTextAre.name = "textarea";
    EditAddAddrTextAre.onkeyup = EditvalidAddress;
    EditAddAddrForm.append(EditAddAddrTextAre);

    const EditAddAddErr = document.createElement("span");
    EditAddAddErr.className = "EditAddressErr";
    EditAddAddErr.id = "EditAddressErr";
    EditAddAddrForm.append(EditAddAddErr);
}
EditDetailsSide();
// Edit condition side

function EditDetailesCondition() {
    const EditConditionSide = document.createElement("span");
    EditForm.append(EditConditionSide);

    const EditConditionbutton = document.createElement("button");
    EditConditionbutton.className = "Update";
    EditConditionbutton.id = "update";
    EditConditionbutton.onclick = updateValue;
    EditConditionbutton.innerText = "Update";
    EditConditionSide.append(EditConditionbutton);

    const EditConditionReset = document.createElement("span");
    EditConditionSide.append(EditConditionReset);

    const EditConditionbuttonReset = document.createElement("button");
    EditConditionbuttonReset.className = "Reset";
    EditConditionbuttonReset.id = "reset";
    EditConditionbuttonReset.onclick = ResetValue;
    EditConditionbuttonReset.innerText = "Reset";
    EditConditionReset.append(EditConditionbuttonReset);

    const EditSideErr = document.createElement("span");
    EditSideErr.className = "updateErr";
    EditSideErr.id = "updateError";
    EditSide.append(EditSideErr);
}
EditDetailesCondition();

//  <!-- delete Button pup up -->
function ConditionButton() {
    deleteSide = document.createElement("div");
    deleteSide.className = "deletePupUp";
    deleteSide.id = "delete";
    EditSide.append(deleteSide);
}
ConditionButton();

function ConditionButtonSide() {
    const deleteSpan = document.createElement("span");
    deleteSide.append(deleteSpan);

    const deleteIcons = document.createElement("i");
    deleteIcons.className = "fa-solid fa-circle-xmark";
    deleteIcons.id = "cl";
    deleteIcons.onclick = removeIcon;
    deleteSpan.append(deleteIcons);

    const deleteText = document.createElement("p");
    deleteText.innerText = "Are you sure ?";
    deleteSide.append(deleteText);

    const deleteBtnCondition = document.createElement("div");
    deleteBtnCondition.className = "deletebtnCondition";
    deleteSide.append(deleteBtnCondition);

    const deleteBtnConditionSpan = document.createElement("span");
    deleteBtnCondition.append(deleteBtnConditionSpan);

    let buttonSideNo = document.createElement("button");
    buttonSideNo.className = "No";
    buttonSideNo.onclick = No;
    buttonSideNo.innerText = "NO";
    deleteBtnConditionSpan.append(buttonSideNo);

    let buttonSideYes = document.createElement("button");
    buttonSideYes.className = "YES";
    buttonSideYes.id = "yes";
    buttonSideYes.type = "yes";
    buttonSideYes.onclick = deletConfirm;
    buttonSideYes.innerText = "YES";
    deleteBtnConditionSpan.append(buttonSideYes);
}
ConditionButtonSide();



function CreatetableSide() {
    TableSide = document.createElement("div");
    TableSide.className = "create";
    Container.append(TableSide);
}
CreatetableSide();

function Table() {
    const TableCreate = document.createElement("table");
    TableCreate.className = "table";
    TableCreate.id = "table";
    TableSide.append(TableCreate);

    const thead = document.createElement("th");
    thead.setAttribute("colspan", "2");
    thead.innerText = " UserList";
    thead.className = "TextSize";
    TableCreate.append(thead);

    const Thead = document.createElement("th");
    Thead.setAttribute("colspan", "4");
    TableCreate.append(Thead);

    const CreateSpan = document.createElement("span");
    CreateSpan.className = "Newbtn";

    Thead.append(CreateSpan);
    const CreateSpanBtn = document.createElement("button");
    CreateSpanBtn.className = "new";
    CreateSpanBtn.id = "new";
    CreateSpanBtn.type = "button";
    CreateSpanBtn.onclick = NewOpenPopup;
    CreateSpanBtn.innerText = "+ New";
    CreateSpan.append(CreateSpanBtn);

    const CreateTableData = document.createElement("tr");
    CreateTableData.className = "createTable";
    CreateTableData.id = "createTable";
    TableCreate.append(CreateTableData);

    const Heading1 = document.createElement("th");
    Heading1.innerText = "ID";
    CreateTableData.append(Heading1);

    const Heading2 = document.createElement("th");
    Heading2.innerText = "Name";
    CreateTableData.append(Heading2);

    const Heading3 = document.createElement("th");
    Heading3.innerText = "Email";
    CreateTableData.append(Heading3);

    const Heading4 = document.createElement("th");
    Heading4.innerText = "Address";
    CreateTableData.append(Heading4);

    const Heading5 = document.createElement("th");
    Heading5.setAttribute("colspan", "2");
    Heading5.innerText = "Action";
    CreateTableData.append(Heading5);

    const TableShow = document.createElement("tbody");
    TableShow.id = "Tdshow";
    TableCreate.append(TableShow);
}
Table();

// Add details side

function AddDetailsSide() {
    AddDetails = document.createElement("div");
    AddDetails.className = "modal1";
    AddDetails.id = "modal1";

    const AddDetailsTitel = document.createElement("div");
    AddDetailsTitel.className = "title";
    Container.append(AddDetails);
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
}
AddDetailsSide();

//input field
function AddDetailsInputSide() {
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
}
AddDetailsInputSide();

// container

const modal = document.getElementById("modal1");
const btn = document.getElementById("new");
const inputFile = document.getElementById("inputFile");
const dltPupup = document.getElementById("delete");
const SaveData = document.getElementById("save");
// Edit details
const field = document.getElementById("inputFile");
const addName = document.getElementById("inputName");
const addEmail = document.getElementById("inputEmail");
const addAddr = document.getElementById("inputField");

// edit details
const iName1 = document.getElementById("iName");
const iEmail1 = document.getElementById("iEmail");
const textarea = document.getElementById("textarea");
const updateEr = document.getElementById("updateError");
const EditnameErr = document.getElementById("EditnameErr");
const EditemailError = document.getElementById("EditemailErr");
const EditAddressErr = document.getElementById("EditAddressErr");
//  add details validation
const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const submitErr = document.getElementById("submitErr");
const AddressErr = document.getElementById("AddressErr");
const UserName = document.getElementById("inputName");
const Email = document.getElementById("inputEmail");
const textArea = document.getElementById("inputField");



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

                iName1.value = ApiobjectData.name;

                iEmail1.value = ApiobjectData.email;

                textarea.value = ApiobjectData.address.city;
            } else {
                alert("Data not a found");
            }
        });
};

function NewOpenPopup() {
    modal.classList.add("openModal");

    SaveData.disabled = false;
}

function closePopup() {
    modal.classList.remove("openModal");
    Clearfield();
}

// updata data
function Save() {

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
                iName1.value = editDataSet.name;

                iEmail1.value = editDataSet.email;

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
        iName1.value = onEditSelect.name;

        iEmail1.value = onEditSelect.email;

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

    iName1.value = foundObj.name;

    iEmail1.value = foundObj.email;

    textarea.value = foundObj.address.city;
    EditvalidName("iName") &&
        EditvalidEmail("iEmail") &&
        EditvalidAddress("textarea");
}
// Edit detailes

function updateValue(e) {
    e.preventDefault();
    const Input =
        EditvalidName("iName") &&
        EditvalidEmail("iEmail") &&
        EditvalidAddress("textarea");
    if (Input) {
        const foundObject = dataForTable.find((item, i) => item.id == editId);

        foundObject.name = document.getElementById("iName").value;
        foundObject.email = document.getElementById("iEmail").value;
        foundObject.address.city = document.getElementById("textarea").value;

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

function ResetValue(e) {
    e.preventDefault();
    const res = dataForTable.find((item) => item.id == editId);

    iName1.value = res.name;

    iEmail1.value = res.email;

    textarea.value = res.address.city;
}

// validation

// Edit details validation

function EditvalidName() {
    const correctway = /^[A-za-z]+$/;
    const name = document.getElementById("iName").value;

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

function EditvalidEmail() {
    const Email = document.getElementById("iEmail").value;

    const correctways = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,15}$/;
    let correctEmail = Email.match(correctways);

    if (Email === "") {
        return false;
    }
    if (Email.length < 10) {
        EditemailError.innerHTML = "Minimum 10 characters";
        return false;
    }
    if (Email.length > 50) {
        EditemailError.innerHTML = "Maximum 50 characters";
    }

    if (!correctEmail) {
        EditemailError.innerHTML = "Email is Invalid";
        return false;
    }
    EditemailError.innerHTML =
        '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}

function EditvalidAddress() {
    let address = document.getElementById("textarea").value;

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
    iName1.value = "";
    iEmail1.value = "";
    textarea.value = "";
}
function EditIconsClear() {
    EditnameErr.innerHTML = "";
    EditemailError.innerHTML = "";
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
