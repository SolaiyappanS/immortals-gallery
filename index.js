function getItems() {
  const spreadsheetId = "1JQT9bdyQOAaWAcJKPzt3XF-xmi2tO9rpCWx7mboZ4p4";
  const parser = new PublicGoogleSheetsParser();
  var result = "";
  parser.parse(spreadsheetId).then((items) => {
    for (var i = 0; i < items.length; i++) {
      result +=
        "<div class='card'><img id='immortals" +
        i +
        "' src= '' class='card-img-top'/>" +
        "<div class='card-body'><p class='card-text'>" +
        "<table class='table table-striped'><tbody><tr><th>Name</th><td>" +
        Array.prototype.slice.call(items)[i].Name +
        "</td></tr><tr><th>DOB</th><td>" +
        Array.prototype.slice.call(items)[i].DOB +
        "</td></tr><tr><th>Contact Number 1</th><td>" +
        Array.prototype.slice.call(items)[i].Contact_Number_1 +
        "</td></tr><tr><th>Contact Number 2</th><td>" +
        Array.prototype.slice.call(items)[i].Contact_Number_2 +
        "</td></tr><tr><th>Current Address</th><td>" +
        Array.prototype.slice.call(items)[i].Current_Address +
        "</td></tr><tr><th>Permanent Address</th><td>" +
        Array.prototype.slice.call(items)[i].Permanent_Address +
        "</td></tr><tr><th>Company/ Institution Name</th><td>" +
        Array.prototype.slice.call(items)[i].Company_Name +
        "</td></tr><tr><th>Company/ Institution Location</th><td>" +
        Array.prototype.slice.call(items)[i].Company_Location +
        "</td></tr><tr><th>Pass-out Year</th><td>" +
        Array.prototype.slice.call(items)[i].Pass_out_year +
        "</td></tr><tr><th>Event</th><td>" +
        Array.prototype.slice.call(items)[i].Event +
        "</td></tr><tr><th>Blood Group</th><td>" +
        Array.prototype.slice.call(items)[i].Blood_Group +
        "</td></tr></tbody></table></p></div></div>";
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

function editItems() {
  var securityKey = prompt("Enter the security key");

  if (securityKey === "X1T2H7U8")
    window.open(
      "https://docs.google.com/spreadsheets/d/1JQT9bdyQOAaWAcJKPzt3XF-xmi2tO9rpCWx7mboZ4p4/edit?usp=sharing"
    );
  else alert("Incorrect security key");
}

function addNewItem() {
  var securityKey = prompt("Enter the security key");

  if (securityKey === "M5R8Y6S3")
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfTJnvNIt2BWj14JYR_s0XOZXoYvuYUKlFdPPrPN84GXQO6ZQ/viewform?usp=sf_link"
    );
  else alert("Incorrect security key");
}
