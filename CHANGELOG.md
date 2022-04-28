# Changelog

## [3.3.1] - 2022-4-28

### Changed

- ColorBar 3px corner rounding.
- Improved some API property descriptions.

### Added

- UiItem.change() function to trigger the item's change event if value is updated programmatically.
- Point axis tick.label.color = '%color' support to make the tick labels use point's color more easily. Includes AxisTick.label.outline.color & style.color.
- Better warning message when tooltip text callback function doesn't return a valid value.
- Warning message when a misspelled palette name is given.

### Bug Fixes

- UiItem.options('value') inconsistent with actual value in some cases.
- Range axis marker with nearly the same start/end value doesn't render a line.
- series.options('visible') does not return the actual series visibility if not set by user.
- Clicking a pie slice to unselect it not working correctly.
- Pie data point explode not triggered with point's legend entry click.
- Raster image point marker tooltip and halo paths are not correct.
- Point axis ticks on category scale with numeric point value not binding to axis.
- Adding custom axis ticks or markers through chart.axes(0).ticks.add({value:1000}) doesn't work if value is outside axis range.
- CSV parser should cast percent values `12.4%` and currency `$1.24` to numbers, not date values.
- Point axis ticks not working on gauges.
- Gauge chart exceptions in some cases.
- Linear gauge roundCap bar gridlines not rounding with non-category scale.

## [3.3.0] - 2022-4-1

### Added

- Support for linear gradients in <icon> tags.
- Color [adjustment options](https://jscharting.com/tutorials/types/js-series-point-colors-chart/#color-adjustment-options) (darken, lighten) with gradient stops colors based on the first color.
- Set area series gradient fill with dynamic color adjustment values to create a gradient look regardless of the series color. i.e. `['currentColor','white', 90]`
- Support label.outline.color = color adjust keywords based on label color.
- Support point.fill colorAdjust keywords in gradient config values.
- axis.categories property support to specify categories manually.
- Support for property paths in nest key() and rollup() functions. i.e. `nest().key('attributes.role')`.
- Allow toolbar_items_zoom_position setting without overwriting map zoom buttons.
- Enable axisTick.gridLine_width='column' with scales other than category.
- point.getParents() getChildren() functions.
- chart.connectors() function to highlight hierarchy connector lines.
- series().points(`hierarchy paths selectors`)
- Expand point.parent property to support an array of parent connectors.
- Add point.connectorLine property to style point connectors individually.
- Support point.connectorLine.radius to control radius of connector rounded corners. Including an array of radii to set the radius of each corner of the connector line.
- Organizational chart type modifier to use right angle or straight connector lines. Right angle by default.
- Organizational chart connector line pixel snapping.
- Add point.annotation.syncWidth & syncHeight options for organizational charts.
- Option to set point.focusGlow = false to disable it.

### Changed

- Reduced the default organizational chart dependency line arrow size.
- Organizational chart point annotation labels are centered vertically and horizontally by default.
- chart.type = 'organization' to 'organizational'. 'organization' works for backwards compatibility.
- Zoomed organizational chart attempts to move root nodes closer to center on initial view.

### Bug Fixes

- Animation on one chart prevents tooltips from appearing on another chart.
- X Axis crosshair working incorrectly with invisible axis and annotation outside the chartArea.
- Chart in a DIV that does not have a height resizes when DIV width changed.
- IE11 stopped working.
- Point mouseOver, mouseOut events not always invoked reliably.
- Some Gantt dependencies on points from other series not always drawn.
- Organizational chart breaks in some cases after changing organizational chart orientation a few times.
- Organizational node connector lines point in the wrong direction with some tree orientations.
- Organizational chart edge cases rendering issues.
- Point selection issue when switching from a max number of points selected limit to another node.
- label.maxWidth may not work if text is larger in some cases.
- Smart category grouping failed to group all labels in a rare case.
- Annotation movement lag in organizational charts when scroll wheel scrolling.
- Automatic point label color sometimes getting gradient fill when point.fill is a gradient.
- Point data as [x,y,z] array is not working with heatmap chart.
- With a full stacked scale some column point corners are not rounding correctly when series visibility changes.
- Axis range tick shows when tick starts exactly when axis range ends, or vice versa.
- Range axis marker with the same start/end value doesn't render a line.
- Axis marker label with user defined alignment renders in corner of chart if label doesn't fit.
- Axis marker label {autoWrap:false} not working.

## [3.2.1] - 2021-12-1

### Added

- Support for Next.js when using the JSC React component.

## [3.2.0] - 2021-11-20

### Added

- Automatic string tween animations.
- Automatic text number animation.
- Property label.animation to control string tween animation independently.
- Shape labels for pie and funnel charts.
- Automatic shape labels for pies.
- Property shape.defaultLabel as defaults for all shape labels.

### Bug Fixes

- Point %icon token not using the individual point color.
- Allow hiding the colorBar when using the heatmap type.
- Bubble type tooltip stops working after panning the chart.
- Incorrectly handling Jan 1st 1970 date value.
- Logarithmic scale with negative numbers not always working correctly.
- Logarithmic scale with zero values not always working correctly.
- DefaultCultureName setting now used in some non-token formatting cases.
- Axis ticks with token values not always updating tick label text.

## [3.1.0] - 2021-8-17

For more information, visit [What's new in 3.1](https://jscharting.com/blog/v31Release.htm).

### Added

- Label.opacity property.
- Automatic column series corner rounding.
- Point.radius property to control column corners.
- Enable point color modifiers (lighten, darken,...) on point.complete.fill and point.complete.hatch.color

### Changed

- legendEntry.iconWidth deprecated, enabled for backward compatibility. Use legendEntry.icon.width instead.

### Bug Fixes

- Resizing circular gauge charts may throw error in some scenarios
- A regression bug that may prevent manual annotation width or height settings from working.
- Exception when target Div element has no size set.
- Smart palette update issue when data is added after first render.
- Multi-shape animation may throw exception in some circumstances.
- Make candlestick column with zero value (doji candlestick) render correctly.
- An issue with passing functions for shape label text.
- legendEntry.icon.width not working.
- Issue preventing axis.line.breaks.custom from working on circular axes.
- Range axis scale mode disabled by a non-range series on a different axis.
- Scale microchart shows numeric ticks in wrong position in some scenarios.
- Printing the chart with the export toolbar may print extra blank pages.
- Axis ticks with fill not moving out of view.

## [3.0.3-beta] - 2021-4-8

### Bug Fixes

- Point click events may have triggered the wrong point when multiple points were overlapping.
- Custom path point marker may not center when width or height are 0.
- Axis line with color:'smartPalette' may not work if line breaks are not used.
- jscharting.d.ts may cause compile errors with TypeScript projects.
- Pie chart layout may cause pie sizes to collapse in some scenarios.
- Point marker animation moving along the arc of circular gauges.
- Slider clicks in IE not updating slider value correctly.
- Arc gauge gradients fill incorrectly in some cases.
- Using range x values and point names may place the point on the axis scale incorrectly.
- Organizational chart with complex multi-parent nodes not laid out correctly.

## [3.0.2] - 2021-01-27

### Added

- API uiItem.offset property in the documentation.
- Added axis.defaultHiddenTick property to control tick styling when they are hidden due to overlaps.
- Chart parses numeric point data values. `series.0.points = [1,2,3]`
- Legend line icon width scale to the largest width.
- Legend line icons include dash styles that scale to fit.

### Bug Fixes

- Fail gracefully when map data is not available for specified countries.
- Fix to prevent organizational points from overlapping in some scenarios.
- Fix maps losing tooltips after zooming the chart programmatically.
- Fix gradient arc axis line without breaks exception.
- Fix a bug preventing multiple axes from duplicating parent axis category ticks.
- Fix a bug that prevented custom TopoJSON map data from loading with a remote URL.
- The Intl polyfill and locales have been removed from the bundle. In the very unlikely case they are needed, they will be downloaded from the CDN.
- Fix synced category axis tick labels not staying in sync when main axis categories are reordered.
- Fix %pointCount Token bug when only one point exists.
- Fix a bug preventing radar series from being updated.
- Fix overlapping tick logic with dense tick overlaps and custom tick priority
- Last axis tick visibility is not prioritized over major and minor ticks when ticks overlap.
- Fix an issue with Chrome 88 on Android not loading charts.
- An issue that prevented axis data from being passed to click event handlers on maps.


## [3.0.1] - 2020-10-26

### Changed

- Fixed a few minor bugs. 

## [3.0.0] - 2020-10-21

For more information, visit [What's new in 3.0](https://jscharting.com/blog/v30Release.htm).

### Added

- Venn series type
- Automatic color blending for venn diagrams
- `point.altColor` with colorAdjust support for circular gauges
- Candlestick and OHLC alternate color support with `point.altColor`
- `stroke` styling for labels
- updateOptions.then post animation callback.
- Data highlighting (by muting others)
    - 3 highlighting modes (series, point, pointGroup)
    - Highlighting options when hovering points, legend, axis ticks
- Point selection improvements 
    - `auto`, `single` or `multiple` selection modes
    - `{ max: n }` Maximum n points FIFO selection.
- `pointSelectionChanged` and `seriesSelectionChanged` chart events
- Legend checkbox option
- Point and series `muted` and `selected` properties.
- Chart mentoring, tips and suggestions with `{ debug: true }`
- Simplified series state settings `{ defaultSeries_states_hover_opacity: .5 }` 
- `JSC.sortBy()` utility function
- `beforeExport` and `afterExport` chart events
- `%parentId` point token
- Simpler additional axis logic: Automatically assumes what axes to bind to without needing `id` settings.
- Arbitrary axes. Extra axes with `scale.range` setting can be used without binding to any other axis or data.
- Axis tick `mouseOver` `mouseOut` and `click` events
- Tooltip `followCursor` option
- UIItem slider debounce option

### Changed

- Axis tick animation with proper scaling
- Setting chart option {export:true} is required for export menu to appear
- Chart wide performance improvements
- Use `axis_scale_range:{ padding` and (`min` or `max`) together
- Point axis tick: Closest point gets the tick.  
- Smarter point tooltip positioning

### Bug Fixes

- No Y Axis ticks on circular gauge exception fix.
- Needle gauge default tooltip newline bug fix.
- Fix X Axis range setting not working with bubble type.
- Fix custom point settings preventing hatch pattern on legend entries.
- Mapping mobile touch scroll fix.
- Line series with labels zoom exception fix. 

## [2.9.0-9] - 2020-5-1

### Added
- Allow string date values in smartPalette configuration 

### Bug Fixes
- Pinch zoom on iOS devices
- Issue with scale breaks and axis.invert=true
- Organizational charts not working with wrong point order
- OHLC shape drawing extra lines
- Chart type:'map solid' not making point fills solid
- SmartPalette range legend entries layout when only SP range entries exist
- Custom legendEntry not updating through legendEntry.options()
- Duplicate axisMarker legend entries with gauge charts after chart updates

## [2.9.0-8] - 2020-3-5

### Added

- Datagrid exportFile property to specify the name of the exported file
- Datagrid title string property to draw a title
- RTL culture support
- Weekday `ddd` and `dddd` formatting
- Tests with jest
- Changelog
- .npmignore

### Changed

- Axis tick animation with proper scaling
- TokenLib date formatting fixes
- Annotation with multivariate text wrapping fix
- Render non-zero but small columns
- Numeric x axes with only 4 digit values, use 'd' format by default.

### Bug Fixes
- Fixed tile/calendar pattern drawing of heatmap and calendar charts when zooming x or y axes.
- Marker hitTest area was too large, especially for large markers.
- Points sharing same ID across different series had trouble changing tooltip.
- Fix empty point with axisTick option exception.

## [2.9.0] - 2019-11-7

### Added

- First & last point settings
- Axis tick label auto-wrapping
- Axis scale minInterval option
- DefaultAxis option
- Point axisTick axisId setting
- Spline tension option
- JSC.fontsReady() helper function for custom fonts
- JSC.ready() helper function waits until page is loaded
- Superimpose visuals with <absolute>
- Debug notifications
- Point color adjustment values
- JSC.defaults() to apply default settings for all subsequent chart instances
- New chart events (zoomed, scrolled, mouseOver, mouseOut)
- Disable microchart pixel-snapping with 'antialias' setting

### Changed

- New modern look
- Improved auto tooltip text
- Improved point coloring system
- Revised and updated samples

## [2.8.0] - 2019-5-6

### Added

- Axis range ticks
- AxisTick calendarPattern values
- AxisMarker calendarPattern values
- Point axis ticks
- Axis.caOffset property
- Axis number shortening and magnitude formatting
- Datagrid control
- Accessibility
- Line caps
- Gantt dependencies
- Superscript and subscript
- Scroll panel on calendar cells labels that don't fit
- Scale column labels to fit vertically when autoHide=false
- JSC.label() icon animations

### Changed

- Category scale names == ranges
- Logarithmic scale improvements
- Updated microchart styling and options

## [2.7.0] - 2018-11-16

### Added

- Microchart visualizations
- Mosaic plot/variwide/mekko chart type
- Interactive uiItem types
- Combined tooltips & crosshairs
- Data point options
- Standalone SVG graphics with JSC.label(targetDiv, text)
- Data nesting
- Data parsing (CSV - JSON conversions)
- JSC data utility functions
- CDN Support
- Framework integration samples

### Changed

- Axis scale break enhancements

