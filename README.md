# csvparser

This repository contains a simple CSV parser written in JavaScript (Node.JS) that parses a CSV file and converts it to JSON. It assumes that the first row of the file contains headers labeling the contents of each column. Additionally, it removes the byte order mark, if one is present at the beginning of the file. It has been tested on a CSV file of 2023 baseball batting statistics downloaded from [Rotowire](https://www.rotowire.com/baseball/stats.php).

To run it, use the following command:

node csvparser.js [filename]

Where [filename] is the name of a CSV file in the same directory. If [filename] is omitted, it will open "file.csv". The output file will be [filename].json.

The original idea/motivation for this project came from a [LinkedIn post](https://www.linkedin.com/posts/jonathan-taylor-dev_we-should-write-our-own-csv-parser-how-activity-7121480250697424896-ZTQi?utm_source=share&utm_medium=member_desktop) by Jonathan Taylor. This was written within an evening and is made available without any guarantees that it will be supported.

This repository is made available under the MIT license. The no warranty disclaimer in the license should be especially emphasized here as this code was written and made available on GitHub under the assumption that it would never be used in production anywhere.