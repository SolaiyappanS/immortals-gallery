function getItems() {
  const spreadsheetId = "1JQT9bdyQOAaWAcJKPzt3XF-xmi2tO9rpCWx7mboZ4p4";
  const parser = new PublicGoogleSheetsParser();
  var result = "";
  parser.parse(spreadsheetId).then((items) => {
    items.sort(GetSortOrder("Name"));
    items.sort(GetSortOrder("Pass_out_year"));
    for (var i = 0; i < items.length; i++) {
      result +=
        "<div class='card bg-dark bg-opacity-75'><span class='badge bg-dark'>" +
        (i + 1) +
        "</span><img id='immortals" +
        i +
        "' src= '' class='card-img-top m-1' alt='Unsupported Image type (or) Unsupported Browser (or) Poor Network'/>" +
        "<div class='card-body'><h2 class='card-title text-white'>" +
        Array.prototype.slice.call(items)[i].Name +
        "</h2><h4 class='card-subtitle mb-2'>" +
        Array.prototype.slice.call(items)[i].Pass_out_year +
        " Batch - " +
        Array.prototype.slice.call(items)[i].Event +
        "</h4><table class='table table-dark'><tbody><tr><th>DOB</th><td>" +
        formatDate(Array.prototype.slice.call(items)[i].DOB) +
        "</td></tr><tr><th>Contact Number 1</th><td>" +
        Array.prototype.slice.call(items)[i].Contact_Number_1 +
        "</td></tr><tr><th>Contact Number 2</th><td>" +
        (Array.prototype.slice.call(items)[i].Contact_Number_2
          ? Array.prototype.slice.call(items)[i].Contact_Number_2
          : "-") +
        "</td></tr><tr><th>Current Address</th><td>" +
        formatAddress(Array.prototype.slice.call(items)[i].Current_Address) +
        "</td></tr><tr><th>Permanent Address</th><td>" +
        formatAddress(Array.prototype.slice.call(items)[i].Permanent_Address) +
        "</td></tr><tr><th>Company/ Institution Name</th><td>" +
        Array.prototype.slice.call(items)[i].Company_Name +
        "</td></tr><tr><th>Company/ Institution Location</th><td>" +
        Array.prototype.slice.call(items)[i].Company_Location +
        "</td></tr><tr><th>Email</th><td>" +
        Array.prototype.slice.call(items)[i].Email_Id +
        "</td></tr><tr><th>Blood Group</th><td>" +
        Array.prototype.slice.call(items)[i].Blood_Group +
        "</td></tr></tbody></table></div></div><br><br>";
    }

    document.getElementById("result").innerHTML = result;

    for (var i = 0; i < items.length; i++) {
      document.getElementById("immortals" + i).src = getImageURL(
        Array.prototype.slice.call(items)[i].Photo
      );
    }
  });
}

function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}

function getImageURL(str) {
  return "https://drive.google.com/uc?export=view&id=" + str.split("id=")[1];
}

function formatDate(str) {
  var date = str.split(",");
  return (
    date[2].split(")")[0] +
    "/" +
    (date[1] * 1 + 1) +
    "/" +
    date[0].split("(")[1]
  );
}

function formatAddress(str) {
  return str.split(",").join(", ");
}

function editItems() {
  var securityKey = "";
  securityKey = prompt("Enter the security key to edit contents");

  if (securityKey === "X1T2H7U8")
    window.open(
      "https://docs.google.com/spreadsheets/d/1JQT9bdyQOAaWAcJKPzt3XF-xmi2tO9rpCWx7mboZ4p4/edit?usp=sharing"
    );
  else if (securityKey !== "") alert("Incorrect security key");
}

function addNewItem() {
  var securityKey = "";
  securityKey = prompt("Enter the security key");

  if (securityKey === "M5R8Y6S3")
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfTJnvNIt2BWj14JYR_s0XOZXoYvuYUKlFdPPrPN84GXQO6ZQ/viewform?usp=sf_link"
    );
  else if (securityKey !== "") alert("Incorrect security key");
}
var i = 0;
var root = document.querySelector(":root");
var images = [
  "1tO6h7gg0V95S-NddsALcx5it_iwPe0qV",
  "1SbDKbgSJeStFb4z4hyEpocvOLs3gBN2X",
  "1HJl_49d35KZHtb6TT0qskn3lCZn69Ant",
  "1SX2-VmtAk7UatKbN8VArwqMJ_ZHKDZnQ",
  "1-f7ADQ8-lNyArUf62hGX8doozIJAzTa1",
];
setInterval(function () {
  root.style.setProperty(
    "--image-background",
    "url('https://drive.google.com/uc?export=view&id=" + images[i] + "')"
  );
  i++;
  if (i === 5) i = 0;
}, 7500);
