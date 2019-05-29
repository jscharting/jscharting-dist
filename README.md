# JSCharting: Any Chart. Anywhere.

<a href="https://jscharting.com"><img src="https://jscharting.com/images/logo_short.svg" style="margin:0px" align="left" hspace="10" vspace="6" width="200" ></a>

**JSCharting** is a JavaScript chart library for visualizing your data, providing resolution 
independent results across all devices and platorms. Every JSCharting license includes the 
full suite of 150+ advanced chart types, interactive stock charts and JSMapping at no additional charge.


## Install

#### Using CDN

```html
<script src="https://code.jscharting.com/latest/jscharting.js"></script>
```

#### Using npm

See [npm documentation](https://docs.npmjs.com/) for more information.
```
npm install --save jscharting
```

#### Download

The latest release can be [downloaded here](https://jscharting.com/download.aspx).

## Get Data

JSC.fetch() is an alias for vanilla JS 
 [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) function but includes 
 a polyfill for IE11. This function makes it easy to get data for the chart.
 
```js
JSC.fetch('./data.csv')
    .then(response => response.text())
    .then(text => {
        //Use csv text 
    });
```
 
If data is transferred as csv, tsv or any delimiter separated values use JSC.csv2Json().

```js
let data = JSC.csv2Json(
'date,actual,goal\n1/1/2018,5409,7000\n1/2/2018,4893,7000'
)
// ->
//[{date: 1514786400000, actual: 5409, goal: 7000},
//{date: 1514872800000, actual: 4893, goal: 7000}]

```

#### Map data to chart points

```js
let points = data.map(d => { x: d.date, y: d.actual });
//-> [{ x: 1514786400000, y: 5409 }, { x: 1514872800000, y: 4893 }]
```

#### Draw a chart

A div element is required in the page for the chart to render in.

```html
<div id="chartDiv"></div>
```

Instantiate the chart 

```js
const chart = new JSC.Chart('chartDiv', { 
    //Pass points to the series
    series:[{ points:points }], 
    // Set the x axis scale to time.
    xAxis_scale_type:'time' 
});
```

## Crash Course

(5 min read to hit the ground running)

JSCharting API is designed with ease of use in mind. The chart attempts to select 
default options that are obvious to reduce the need to customize. 

#### Chart Types

 Chart types can be set easily through options like so
 
 ```js
 const chart = new JSC.Chart('divId', { type:'line step' });
 ```
 
 Examples of chart type settings:
 - 'horizontal column aqua' - Horizontal columns with aqua shading
 - 'gauge linear horizontal' - Horizontal linear gauges.
 - 'radar polar column' - Polar radar chart with columns. 
 
 [More information..](https://jscharting.com/Documentation/index.htm#node=Home.Tutorials.chartTypes.chartTypesOverview)
 
#### Options

 Chart options are set in the chart constructor like
```js
const chart = new JSC.Chart('divId', { /*options*/ });
```
 Or at any time after the chart is rendered with
```js
chart.options({ /*options*/ });
```

JSCharting offers a declarative API with options like
```js
chart.options({ title: { label: { text: 'title text' }}});
```

However, property paths can be combined into single property names.
```js
chart.options({ title_label_text: 'title text' });
```

[Property Expansion](https://jscharting.com/Documentation/index.htm#node=Home.Tutorials.apiFeatures.codeExpansion)

#### Hide Legend

```js
chart.options({ legend_visible: false });
```
#### Legend Columns

```js
//Less Detail
chart.options({ legend_template: '%icon %name' });
//More Detail
chart.options({ legend_template: '%average %sum %icon %name' });
```
#### Legend Entries for Points

```js
chart.options({ defaultSeries_palette: 'default' });
```
[Legend Tutorial](https://jscharting.com/Documentation/index.htm#node=Home.Tutorials.legend)

#### Labels

```js
chart.options({
    //Title text
    title_label_text:'Title text',
    //Axis label text
    xAxis_label_text:'Time',
    yAxis_label_text:'Steps',
    //Point labels
    defaultPoint_label_text:'%yValue',
    //Annotations
    annotations:[{
        position:'top',
        label_text:'Annotation text'
    }]
});
```
[Using Labels](https://jscharting.com/Documentation/index.htm#node=Home.Tutorials.labels)

#### Disable Export Toolbar

```js
chart.options({ toolbar_items_export_visible: false });
```
[Toolbar &#x26; UiItems](https://jscharting.com/Documentation/index.htm#node=Home.Tutorials.interactivityOverview.uiItems.Overview)

#### Disable box visuals

```js
chart.options({ defaultBox_boxVisible: false });
```
