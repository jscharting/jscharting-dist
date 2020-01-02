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

A target div element is required in the page for the chart to render in.

```html
<div id="chartDiv" style="width: 100%; height: 400px;"></div>
```

<blockquote>
The chart will automatically conform to the container size by default.
</blockquote>

Instantiate a chart with some static data.

```js
const chart = new JSC.Chart('chartDiv', { 
  series:[{
    points: [{ x: 'A', y: 10 }, { x: 'B', y: 5 }]
  }], 
});
```

#### Get some data
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
 
If data is transferred as csv, tsv or any delimiter separated values, it can be converted to JSON format.
See the [fetch(), CSV, and JSON](https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/) tutorial for more information.

```js
let data = JSC.csv2Json(
'date,actual,goal\n1/1/2018,5409,7000\n1/2/2018,4893,7000'
)
// -> 
// [ {date: 1514786400000, actual: 5409, goal: 7000},
// {date: 1514872800000, actual: 4893, goal: 7000} ]
```

#### Map data to chart points

```js
let points = data.map(d => {  
  return { x: d.date, y: d.actual }; 
});
//-> [{ x: 1514786400000, y: 5409 }, { x: 1514872800000, y: 4893 }]
```

#### Render a chart using data

```js
const chart = new JSC.Chart('chartDiv', {
    // Pass points to the series
    series: [{
        points: points
    }],
    // Set the x axis scale to time.
    xAxis_scale_type: 'time'
});
```

## Crash Course

(5 min read to hit the ground running)

The JSCharting API is designed with ease of use in mind. The chart attempts to select 
default options that are obvious to reduce the need to customize. 

#### Chart Types

 Chart types can be set easily through options such as:
 
 ```js
 const chart = new JSC.Chart('divId', { type:'line step' });
 ```
 
 Examples of chart type settings:
 - 'horizontal column aqua' - Horizontal columns with aqua shading
 - 'gauge linear horizontal' - Horizontal linear gauges.
 - 'radar polar column' - Polar radar chart with columns. 
 
 [More information](https://jscharting.com/tutorials/types/overview/)
 
#### Options

 Chart options are set in the chart constructor
```js
const chart = new JSC.Chart('divId', { /*options*/ });
```
 Or at any time after the chart is rendered with
```js
chart.options({ /*options*/ });
```
#### Property Expansion
JSCharting offers a declarative API with options such as
```js
chart.options({ title: { label: { text: 'title text' }}});
```

However, property paths can be combined into single property names as follows:
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
//Less Detail
chart.options({ legend_template: '%icon %name' });
//More Detail
chart.options({ legend_template: '%average %sum %icon %name' });
```
#### Legend Entries for Points
The following code snippet sets a series palette which causes each point in a series to have an entry in the legend box.
```js
chart.options({ defaultSeries_palette: 'default' });
```
[Legend Tutorial](https://jscharting.com/tutorials/js-chart-legend/)

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
[Using Labels](https://jscharting.com/tutorials/js-chart-labels/)

#### Chart with a button
Quickly add UI elements to make charts more interactive.
```js
JSC.Chart('chartDiv', { 
    toolbar_items: {
        'Click Me': {
            events_click: function(){ alert('Button clicked');}
        }}
});
```
[Toolbar &#x26; UiItems](https://jscharting.com/tutorials/js-chart-interactivity/ui-controls/overview/)

