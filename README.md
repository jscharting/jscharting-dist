# JSCharting: Any Chart. Anywhere.

<a href="https://jscharting.com"><img src="https://jscharting.com/images/logo_short.svg" style="margin: 0 13px 0 0;" align="left" hspace="10" vspace="6" width="200" ></a>

**JSCharting** is a JavaScript chart library for visualizing your data across all devices and platforms. Every JSCharting license includes the full suite of 150+ advanced chart types plus Gantt charts, JavaScript Org Charts, interactive stock and finance charts, seamless grid and calendar charts, JavaScript maps, and micro charts all for no additional charge. JSCharting has all the features you need and many you don't yet know you want.

Example Charts: 
[Chart Types](https://jscharting.com/examples/chart-types/)
| [Feature Examples](https://jscharting.com/examples/chart-features/)
## Install

#### Using CDN

Visit [code.jscharting.com](https://code.jscharting.com/) for a list of available releases.

```html
<script src="https://code.jscharting.com/latest/jscharting.js"></script>
```


#### Download

The latest release can be [downloaded here](https://jscharting.com/download/).


#### Using npm

See [npm documentation](https://docs.npmjs.com/) to get started with npm.
```
npm install --save jscharting
```
##### Working with a local copy of JSCharting

The npm package folder ```jscharting/dist/``` includes all the necessary charting JavaScript files and resources such as icons, polyfills, and mapping data files. The chart loads these resources dynamically as needed. The content of this folder should be accessible through http, so when building, copy this folder to a destination in the output website. 

If the chart detects a script tag pointing to the main jscharting.js file, it will assume the rest of the resources are 
located in the same place and will load them from there.

If the ```JSC``` namespace is imported from the ```jscharting.js``` file as a module, the chart will not know where resources 
are located and will load them from the CDN. If ```debug: true``` chart option is set, a warning message will note that the 
chart is using the CDN. In order to use local resources, point the chart baseUrl option to the location of the local 
copy of the ```jscharting/dist/``` folder.

To avoid setting the baseUrl property on every chart instance, it can be set as a global default like so:

```typescript
JSC.defaults({ baseUrl: './js/jsc/' });
```

A wrapper module can be used to apply the baseUrl and any other default options that should be used globally such as 
debug, or styling options. All subsequent charts can import this wrapper instead of the chart itself to ensure the default options are always applied. 

```typescript
import * as JSC from "jscharting";

JSC.defaults({ baseUrl: './js/jsc/' });

export default JSC;
```

## First Chart

Add a target div element to you HTML page for the chart to render in and specify a CSS height setting.

```html
<div id="chartDiv" style="max-width: 500px; height: 300px;"></div>
```

<blockquote>
The chart will automatically conform to the container size by default.
</blockquote>

Create an instance of a chart with some static data.

```js
const chart = new JSC.Chart('chartDiv', { 
  type: 'column',
  series:[{
	name: 'Teams',
    points: [{ x: 'A', y: 10 }, { x: 'B', y: 5 }]
  }], 
});
```

![First Chart](https://jscharting.com/documentation/tutorials/images/getting-started/first-column-chart.png "First Chart")

Edit in [CodePen](https://codepen.io/jsblog/pen/rNrEyog)

#### Get data from CSV
JSC.fetch() is an alias for the standard JavaScript
 [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) function and includes a polyfill 
for IE11. Use this function to effortlessly retrieve chart data from your disk.
 
```js
JSC.fetch('./data.csv')
    .then(response => response.text())
    .then(text => {
        //Use csv text 
    });
```

Data in CSV, TSV, or delimiter-separated values format can be converted to JSON. 
Refer to the [fetch(), CSV, and JSON](https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/) tutorial for more information.

```js
let data = JSC.csv2Json(
 'date,actual,goal\n1/1/2023,5409,7000\n1/8/2023,4893,7000'
);
// -> 
//[{date: 1672552800000, actual: 5409, goal: 7000},
//{date: 1673157600000, actual: 4893, goal: 7000}]
```

#### Map data to chart points

```js
let points = data.map(d => {  
  return { x: d.date, y: d.actual }; 
});
//-> [{ x: 1672552800000, y: 5409 }, { x: 1673157600000, y: 4893 }]
```

#### Render a chart using data

```js
const chart = new JSC.Chart('chartDiv', {
   /* Set the x axis scale to time. */
   xAxis_scale_type: 'time',
   /* Pass points to the series */
   series: [{
       points: points
   }]
});
```


![CSV Data Chart](https://jscharting.com/documentation/tutorials/images/getting-started/second-line-chart.png "CSV Data Chart")

Edit in [CodePen](https://codepen.io/jsblog/pen/jOpjmbd)

## Crash Course

(5 min read to hit the ground running)

The JSCharting API is designed to be user-friendly. The chart selects default options that are intuitive, 
reducing the need for customization.

#### Chart Types

You can set chart types through the chart type property:
 
 ```js
 const chart = new JSC.Chart('divId', { type: 'horizontal column' });
 ```

There are a variety of [chart types](https://jscharting.com/documentation/#node=Enums.chartType), 
[series types](https://jscharting.com/documentation/#node=Home.API.json.Enums.seriesType), 
and modifiers that can be combined in the "type" property. 

##### Examples of chart types:
`horizontal`, `pie`, `radar`, `map`, `organizational`, `calendar`, [full list](https://jscharting.com/documentation/#node=Enums.chartType)

##### Examples of series types:
`column`, `line`, `area`, `bubble`, `candlestick`, [full list](https://jscharting.com/documentation/#node=Home.API.json.Enums.seriesType)

A few illustrated examples of type settings:

[![line](https://jscharting.com/documentation/tutorials/images/getting-started/line-type.png)](https://jscharting.com/examples/chart-types/line/)
[![column](https://jscharting.com/documentation/tutorials/images/getting-started/column-type.png)](https://jscharting.com/examples/chart-types/line/)
[![area](https://jscharting.com/documentation/tutorials/images/getting-started/area-type.png)](https://jscharting.com/examples/chart-types/area/)
[![horizontal column](https://jscharting.com/documentation/tutorials/images/getting-started/horizontal-column-type.png)](https://jscharting.com/examples/chart-types/bar/)
[![radar spider column](https://jscharting.com/documentation/tutorials/images/getting-started/radar-spider-column.png)](https://jscharting.com/examples/chart-types/radar-polar/)
[![gauge column roundcaps](https://jscharting.com/documentation/tutorials/images/getting-started/gauge-column-roundcaps.png)](https://jscharting.com/examples/chart-types/circular-gauge/)
[![More Examples](https://jscharting.com/documentation/tutorials/images/getting-started/more-types.png)](https://jscharting.com/examples/chart-types/)
 
 [Chart Types Overview](https://jscharting.com/tutorials/types/overview/)

Be sure to check out our [chart types gallery](https://jscharting.com/examples/chart-types/) for examples and usage guidance.
 
#### Chart Options

Chart options can be set in the chart constructor,
```js
const chart = new JSC.Chart('divId', { /*options*/ });
```
or at any time after the chart is rendered.
```js
chart.options({ /*options*/ });
```
#### Property Expansion
JSCharting provides a declarative API with options such as
```js
chart.options({ title: { label: { text: 'title text' }}});
```

For convenience, property paths can be combined into single property names as shown:
```js
chart.options({ title_label_text: 'title text' });
```

[Property Expansion Details](https://jscharting.com/tutorials/js-chart-api-features/code-expansion/)

#### Hide Legend

```js
chart.options({ legend_visible: false });
```
#### Legend Columns 

```js
// Less Detail
chart.options({ legend_template: '%icon %name' });
// More Detail
chart.options({ legend_template: '%average %sum %icon %name' });
```
Refer to the [Token Reference Tutorial](https://jscharting.com/tutorials/js-chart-labels/token-reference/) for a comprehensive list of over 54 available tokens, listed under the 'Series Tokens' section.

![Legend template](https://jscharting.com/documentation/tutorials/images/getting-started/legend-template.png "Legend template")


Try it out in this [CodePen](https://codepen.io/jsblog/pen/NWBQWGQ)

#### Legend Entries for Points
The code snippet below sets a series palette, which results in each point in a series having a corresponding entry in the legend box.
```js
chart.options({ defaultSeries_palette: 'default' });
```

![No Setting](https://jscharting.com/documentation/tutorials/images/getting-started/default-palette.png "No Setting")
![Series Palette Set](https://jscharting.com/documentation/tutorials/images/getting-started/default-series-palette.png "Series Palette Set")

[Legend Tutorial](https://jscharting.com/tutorials/js-chart-legend/)

#### Labels

```js
chart.options({
    /* Title text */
    title_label_text: 'Title text',
    /* Axis label text */
    xAxis_label_text: 'Time',
    yAxis_label_text: 'Steps',
    /* Point labels */
    defaultPoint_label_text: '%yValue',
    /* Annotations */
    annotations:[{
        position: 'top',
        label_text: 'Annotation text'
    }]
});
```

![Chart Labels](https://jscharting.com/documentation/tutorials/images/getting-started/label-text.png "Chart Labels")

[Using Labels](https://jscharting.com/tutorials/js-chart-labels/) tutorial.

#### Chart with a button
Do you need a user interface control to adjust a chart setting or test a line of code in real-time?

Traditionally, you would have to create an HTML element and link its events to JavaScript code, 
but this process can be made much easier by using the integrated UI controls provided by JSCharting. 
This allows you to add simple UI elements without any HTML required.

```js
JSC.Chart('chartDiv', { 
    toolbar_items: {
        'Click Me': {
            events_click: function(){ alert('Button clicked'); }
        }}
});
```
Try it in [CodePen](https://codepen.io/jsblog/pen/poZMoOR).


[Toolbar &#x26; UiItems](https://jscharting.com/tutorials/js-chart-interactivity/ui-controls/overview/) tutorial.

