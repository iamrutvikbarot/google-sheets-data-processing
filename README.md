# 📊 Google Sheets Data Processing  

## 🚀 Overview  
This Google Apps Script automates common data processing tasks in Google Sheets, such as sorting, filtering, removing duplicates, and formatting data.  

## 🔹 Features  
✅ Sorts data automatically  
✅ Removes duplicate entries  
✅ Formats column headers for readability  
✅ Supports custom filtering rules  

## 📌 How It Works  
1. The script cleans and processes data in a Google Sheet.  
2. It sorts data alphabetically or numerically.  
3. Removes duplicate entries based on selected columns.  
4. Formats headers with bold text and background color.  

## 🛠️ Setup Instructions  
1. Open **Google Sheets → Extensions → Apps Script**.  
2. Delete any existing code and paste the contents of `processData.gs`.  
3. Modify the sheet name and column settings as needed.  
4. Run the script manually or set a trigger for automation.  

## 📸 Before & After Preview  
**Before Processing:**  
![Before](https://i.imgur.com/b6BX3Qf.png)  

**After Processing:**  
![After](https://i.imgur.com/uWnbQrC.png)  

## Automation example URL
- 🔗 [Data Processing](https://docs.google.com/spreadsheets/d/1k5kWp039Rwp2MBJKvWwPB7L_rXFLO0zagT_LDACSVxI/edit?gid=0#gid=0)

## 📅 Automating the Process
1.	Open Apps Script Editor (Extensions → Apps Script).
2.	Click the Clock Icon (Triggers).
3.	Click Add Trigger → Choose processSheetData.
4.	Set trigger to Time-driven (Daily at 8 AM) or any preferred frequency.
5.	Click Save and authorize the script.

## 📜 Script Code (`processData.gs`)  

```javascript
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


