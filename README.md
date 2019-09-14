# Google Spreadsheet Reader jQuery Plugin
A jQuery plugin that allows you to convert a google spreadsheet into an array of JSON objects.

## Function

Easily Convert Google Spreadsheets such as [this one](https://docs.google.com/spreadsheets/u/1/d/13Ouk8KlnEn954LSSxscQEnmqOkM9R3A4Iy2pof_RdJQ/edit?usp=sharing) into a usable JSON object that you can use within a webpage.

Simply call `$.gsr(documentId, callback);` to generate a JSON definition of the sheet in reference.

The definition looks like the following:

```
{
  knownHeaders: [array of headers in the spreadsheet],
  table: [
    array of JSON objects representing the spreadsheet
  ]
}
```

## Getting Started

Visit: https://gsr-jquery.netlify.com/ for reference documentation and an example
