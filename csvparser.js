// Copyright 2023 Brad Westhafer
// This code is released under the MIT License

import fs from "fs";

let filename;
// This assumes that the first 2 arguments will be the path to node and the path to this file.
// To specify a filename, call this from the command line with "node csvparser.js [filename]" and omit the extension
// Otherwise, the assumption is that the file is called file.csv
if(process.argv.length > 2) {
    filename = process.argv[2]
}
else {
    filename = "file"
}

fs.readFile(filename + ".csv","utf8", (err, data) => {
    if (err) return console.error(err)
    let output = parseCSVToJSON(data)
    fs.writeFile(filename + ".json", output, (err) => {
        if (err) return console.error(err)
        console.log("CSV file " + filename + ".csv successfully converted to JSON file " + filename + ".json")
    })
})

// This function converts the cells of the CSV into a 2-dimensional array.
function parseCSV(csv) {
    let lines = csv.split("\n")
    lines[0] = lines[0].replace(/^\uFEFF/gm, ""); // Removes byte order mark if present
    let retval = []
    lines.forEach((line) => {
        let thisLine = line.split(",")
        retval.push(thisLine)
    });
    return retval
}

// This function assumes that the first row of the CSV contains headers in every column
function parseCSVToJSON(csv) {
    let lines = parseCSV(csv)
    let headers = lines[0]
    let retval = "{\n  \"Entries\": ["
    lines.slice(1).forEach((line, ind) => {
        if (ind > 0) retval += ",\n"
        else retval += "\n"
        let entry = "    {"
        line.forEach((value, index) => {
            if(index > 0) entry += ","
            entry += "\n      \"" + headers[index] + "\": \"" + value + "\""
        });
        entry += "\n    }"
        retval += entry
    });
    retval += "\n  ]\n}"
    return retval
}