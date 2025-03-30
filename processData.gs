function processSheetData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
  if (!sheet) {
    Logger.log("Sheet not found!");
    return;
  }

  var range = sheet.getDataRange();
  var values = range.getValues();
  
  // Remove duplicates
  var uniqueValues = [];
  var seen = new Set();
  
  for (var i = 0; i < values.length; i++) {
    var row = values[i].join("|"); // Create a unique key for the row
    if (!seen.has(row)) {
      uniqueValues.push(values[i]);
      seen.add(row);
    }
  }

  sheet.clearContents();
  sheet.getRange(1, 1, uniqueValues.length, uniqueValues[0].length).setValues(uniqueValues);

  // Apply formatting to headers
  var header = sheet.getRange(1, 1, 1, uniqueValues[0].length);
  header.setFontWeight("bold").setBackground("#f4f4f4");

  Logger.log("Data processing complete!");
}