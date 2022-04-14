function getItems() {
  const spreadsheetId = "1JQT9bdyQOAaWAcJKPzt3XF-xmi2tO9rpCWx7mboZ4p4";
  const parser = new PublicGoogleSheetsParser();
  var result = "";
  parser.parse(spreadsheetId).then((items) => {
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
  var securityKey = prompt("Enter the security key to edit contents");

  if (securityKey === "X1T2H7U8")
    window.open(
      "https://docs.google.com/spreadsheets/d/1JQT9bdyQOAaWAcJKPzt3XF-xmi2tO9rpCWx7mboZ4p4/edit?usp=sharing"
    );
  else if (securityKey !== "") alert("Incorrect security key");
}

function addNewItem() {
  var securityKey = prompt("Enter the security key");

  if (securityKey === "M5R8Y6S3")
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfTJnvNIt2BWj14JYR_s0XOZXoYvuYUKlFdPPrPN84GXQO6ZQ/viewform?usp=sf_link"
    );
  else alert("Incorrect security key");
}
var i = 0;
var root = document.querySelector(":root");
setInterval(function () {
  i++;
  root.style.setProperty(
    "--image-background",
    "url('images/background" + i + ".jpg')"
  );
  if (i === 5) i = 0;
}, 7500);
