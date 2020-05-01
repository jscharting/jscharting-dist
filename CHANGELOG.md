# Changelog

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

