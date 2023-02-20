
/**
* The top level chart configuration API.
* var chart = new JSC.Chart({});
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-bundle/}
*/
export declare interface JSCChartConfig {

    /**
     * Used to enable and disable accessibility or to assign an initial tabIndex for the chart.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-accessibility/}
     * @since 2.8
     */
    tabIndex?: number | string;

    /**
     * Animation settings for all animations such as real-time data updates.
     */
    animation?: JSCAnimationConfig;

    /**
     * The fundamental {@link https://jscharting.com/documentation/#node=Home.API.json.Enums.chartType | chart type} such as horizontal or vertical. You can include additional {@link https://jscharting.com/documentation/#node=Home.API.json.Enums.seriesType | seriesType enum} values for line, bar, area, and other varieties. For example:"horizontal column" creates a bar chart.
     * @remarks This can be set through <a href="Types.series.type">chart.defaultSeries.type</a> as well.
     * See Also:
     * {@link https://jscharting.com/tutorials/types/ | Describes how to define specific chart types.}
     * {@link https://jscharting.com/documentation/#node=Home.API.json.Enums.chartType | A list of chart type settings.}
     * {@link https://jscharting.com/documentation/#node=Home.API.json.Enums.seriesType | A list of series type settings.}
     */
    type?: string;

    /**
     * Default chart options for this chart to use.
     * @remarks Default chart options you can share across multiple charts. Use this to maintain the same look and feel across multiple charts.
     */
    template?: JSCChartConfig;

    /**
     * Default options for all annotations.
     */
    defaultAnnotation?: JSCAnnotationConfig;

    /**
     * Default options for all axes on the chart.
     * @since 2.9
     */
    defaultAxis?: JSCAxisConfig;

    /**
     * Default culture name used when formatting values.
     * @def 'en-US'
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-labels/formatting/}
     */
    defaultCultureName?: string;

    /**
     * Default point options.
     */
    defaultPoint?: JSCPointConfig;

    /**
     * Default series options. Use this property to avoid duplicate settings across multiple series.
     */
    defaultSeries?: JSCSeriesConfig;

    /**
     * Colors assigned to each series sequentially. Can be a {@link https://jscharting.com/documentation/#node=Home.API.json.Enums.palette | palette name}, array of colors, or a smart palette options object.
     */
    palette?: string | JSCSmartPaletteConfig | JSCColorConfig[];

    /**
     * Set true to apply a default list of hatch patterns to each series of points, or an array of specific {@link https://jscharting.com/documentation/#node=Home.API.json.Enums.hatchStyle | hatchStyles}.
     * @since 2.0
     */
    hatchPalette?: boolean | string[];

    /**
     * Width of the chart in pixels or percentage of container. When not specified, chart will fill container size.
     * @def 640
     */
    width?: number | string;

    /**
     * Height of the chart in pixels or percentage of container.
     */
    height?: number | string;

    /**
     * An array of text annotations placed anywhere on the chart.
     */
    annotations?: JSCAnnotationConfig[];

    /**
     * Visual properties of the background box surrounding the chart image.
     */
    box?: Box;

    /**
     * Default box properties that apply to virtually all box visuals on the chart such as annotations, legend, etc. Most boxes on the chart use the boxVisible:false setting, which can be globally reverted through this property.
     * @since 2.5
     */
    defaultBox?: DefaultBox;

    /**
     * Specifies the margin between the chart visual bounds and image edges.
     * @remarks Use negative margins to clip the chart visual if needed.
     */
    margin?: JSCMarginConfig;

    /**
     * Enables or disables warning messages in the browser console. Disabled by default.
     */
    debug?: boolean;

    /**
     * The main X axis or array of X axes used by this chart.
     * @remarks Additional X axes will sync their scale ranges with the main (first) X axis by default.
     */
    xAxis?: JSCAxisConfig | JSCAxisConfig[];

    /**
     * The main Y axis or array of Y axes used by this chart.
     * @remarks Additional axes will sync their scale ranges with the main (first) Y axis by default.
     */
    yAxis?: JSCAxisConfig[] | JSCAxisConfig;

    /**
     * The Z axis options.
     * @remarks Use zAxis_scale_type: "stacked" to make column-based series overlap points with the same x value rather than cluster in groups. Useful with Gantt charts.
     */
    zAxis?: JSCAxisConfig;

    /**
     * Legend options.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-legend/}
     */
    legend?: JSCLegendConfig;

    /**
     * Chart title box options.
     */
    title?: JSCTitleBoxConfig;

    /**
     * Chart area related settings.
     */
    chartArea?: JSCChartAreaConfig;

    /**
     * An array of data series visualized on the chart.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-data/}
     */
    series?: JSCSeriesConfig[];

    /**
     * A csv file name, csv text content, or values separated into arrays of rows and column. Used mainly with the calendar chart type but can also be used to populate a series of any other chart type automatically. Csv data must be in [date, value] format for use with calendar type.
     * @since 2.6
     */
    data?: string | [(string | number | Date)][];

    /**
     * Grid options that enable switching between chart and grid view for the charted data.
     * @since 2.8
     */
    grid?: JSCGridConfig;

    /**
     * Chart and chart area specific events.
     */
    events?: ChartEvents;

    /**
     * Point tooltip options.
     */
    defaultTooltip?: JSCTooltipConfig;

    /**
     * Export and Print button toolbar settings.
     */
    toolbar?: JSCToolbarConfig;

    /**
     * A shortcut to enable export menu items visibility. It maps to the toolbar.items.export.visible property.
     * @since 3.0
     */
    export?: boolean;

    /**
     * Specifies which axis has interactive zooming enabled.
     */
    axisToZoom?: ("x" | "y" | "xy" | "none");

    /**
     * Map chart type related settings.
     * See Also:
     * {@link https://jscharting.com/tutorials/types/js-map-chart/}
     * @since 2.1
     */
    mapping?: Mapping;

    /**
     * Encompasses options for the calendar chart type.
     * @since 2.6
     */
    calendar?: JSCCalendarConfig;

    /**
     * Default calendar highlight options applied to all other highlights on the chart.
     * @since 2.6
     */
    defaultHighlight?: JSCHighlightConfig;

    /**
     * An array of calendar highlight options used to emphasize groupings of points in a calendar chart.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_CalendarWeekStart_Chart.htm}
     * @since 2.6
     */
    highlights?: JSCHighlightConfig[];

    /**
     * Several strings used on the chart.
     */
    languageStrings?: JSCLanguageStringsConfig;

    /**
     * Manually specifies the location where the jscharting.js and its resources are located. It is not necessary to set if a script tag referencing jscharting.js exists on a page.
     * @remarks This URL can be set globally using <a href="iObject.JSC.defaults()">JSC.defaults()</a> and is useful when using jscharting.js as a module.
     * @since 2.9
     */
    baseUrl?: string;

    /**
     * Set to true to overlap the JSCharting branding at the bottom left of the chart. By default, branded charts add 20px bottom margin to the chart. This prevents the margin from being added.
     * @since 3.4
     */
    overlapBranding?: boolean;
    [any: string]: any;
}

/**
* Encapsulates a box with a label that can be placed arbitrarily on the chart.
*/
export declare interface JSCAnnotationConfig {

    /**
     * Used to enable and disable accessibility or to assign an initial tabIndex for the chart item.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-accessibility/}
     * @since 2.8
     */
    tabIndex?: number | string;

    /**
     * The ID of this annotation. Used to easily reference the annotation with chart.annotations(ID) api.
     * @since 2.5
     */
    id?: string;

    /**
     * Label displayed inside the annotation.
     */
    label?: JSCLabelConfig;

    /**
     * Alignment or pixel position in or around the chartArea. The position can be prefixed with "inside" meaning inside the chartArea.
     * 
     * Alignment based position can be specified with two alignment values where their order is significant. First value specifies the side to align to such as top, right, bottom, left. The second value is the alignment on that side. For example, 'top left' will place the annotation on top of the chart and align left whereas 'left top' places it on the left side and aligns to top. Inside the chartArea these two settings will have the same meaning.
     * 
     * Pixel position of the annotation where 0,0 is the top left corner of the chart image. Prefixing this setting with "inside " like: "inside 10,10" will make the 0,0 position refer to the top left corner of the chartArea. Items will stack  when using the same positions such as "inside top left" for multiple items.
     * 
     * @since 2.6
     */
    position?: string;

    /**
     * Background fill of this annotation.
     */
    fill?: JSCFillConfig;

    /**
     * Annotation box outline settings.
     */
    outline?: JSCOutlineConfig;

    /**
     * Describes the type or each individual corner of the box.
     * @since 2.0
     */
    corners?: any | [("square" | "cut" | "round"), ("square" | "cut" | "round"), ("square" | "cut" | "round"), ("square" | "cut" | "round")] | string;

    /**
     * Enables or disables the annotation shadow.
     * @since 2.0
     */
    shadow?: boolean;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid (default).
     * @since 1.4
     * @max 1
     */
    opacity?: number;

    /**
     * Whether the annotation box is visible. Setting this property to false leaves only the annotation label visible. This property offers a shortcut to hide the annotation background box with one setting.
     * @def true
     */
    boxVisible?: boolean;

    /**
     * Annotation box corner radius.
     * @def 5
     * @max 50
     */
    radius?: number;

    /**
     * Space between box edges and the annotation label in pixels.
     * @since 2.0
     */
    padding?: JSCMarginConfig;

    /**
     * Annotation width (automatic if not defined)
     * @example 120
     */
    width?: number;

    /**
     * Annotation height (automatic if not defined)
     * @example 60
     */
    height?: number;

    /**
     * Annotation margin.
     * @since 2.0
     */
    margin?: JSCMarginConfig;

    /**
     * When true, the annotation and label will be rendered using HTML.
     * @since 2.0
     */
    asHTML?: boolean;
    [any: string]: any;
}

/**
* Represents a chart axis.
*/
export declare interface JSCAxisConfig {

    /**
     * Used to enable and disable accessibility or to assign an initial tabIndex for the chart item.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-accessibility/}
     * @since 2.8
     */
    tabIndex?: number | string;

    /**
     * The ID of this axis. Used to reference the axis programmatically at run-time.
     */
    id?: string;

    /**
     * Main axis label configuration.
     * @remarks This label's text is also used to describe data associated with this axis. For example, if the Y axis label reads "cost", the tooltip for a data point may show "cost: 123" based on this label.
     */
    label?: JSCLabelConfig;

    /**
     * The possible rotation of tick labels in degrees used when labels overlap without rotation.
     * @remarks Applies to horizontal axes. Setting a value of 0 will disable angled ticks.
     * @since 2.0
     */
    autoRotate?: number;

    /**
     * Fill used on the area between every other two grid lines.
     */
    alternateGridFill?: JSCFillConfig;

    /**
     * Axis orientation.
     */
    orientation?: ("none" | "left" | "right" | "top" | "bottom" | "topLeft" | "topleft" | "topRight" | "topright" | "bottomRight" | "bottomright" | "bottomLeft" | "bottomleft" | "opposite");

    /**
     * The default settings used by all major axis ticks on the axis.
     */
    defaultTick?: JSCAxisTickConfig;

    /**
     * The default settings used by all minor axis ticks on the axis.
     */
    defaultMinorTick?: JSCAxisTickConfig;

    /**
     * The default settings used by ticks that are hidden due to overlaps.
     * @since 3.1
     */
    defaultHiddenTick?: JSCAxisTickConfig;

    /**
     * Default setting applied to all axis markers on this axis.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_LegendAxisMarkers_Chart.htm}
     * @since 2.1
     */
    defaultMarker?: JSCAxisMarkerConfig;

    /**
     * A custom tick representing the axis origin. For example, on numeric axes the default origin is the value 0.
     * @remarks To disable the originTick, set originTick.enabled=false
     * @since 2.0
     */
    originTick?: JSCAxisTickConfig;

    /**
     * An array of custom ticks or tick values added to this axis.
     * @since 1.5
     */
    customTicks?: (JSCAxisTickConfig[] | number[]);

    /**
     * An array of string category names used on this axis instead of numeric or date values. Point x or name values can be omitted when categories are defined.
     * @remarks If point x or name values are not specified, each category name will be assigned to each data point x value sequentially. If point strings x values or names are defined, the axis category array will define their sort order. If numeric point x values are defined, they represent the index of the axis category array. Point objects the chart returns through the FP API will have point.name properties set to an X axis category name if used.
     * @since 3.3
     */
    categories?: string[];

    /**
     * Styling options for the axis line.
     */
    line?: Line;

    /**
     * Axis markers drawn on this axis.
     */
    markers?: JSCAxisMarkerConfig[];

    /**
     * Format string used for values on this axis. Values associated with this axis including axis ticks, point labels, among others will inherit this format by default.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-labels/formatting/}
     * {@link https://jscharting.com/samples/Javascript_AxisFormatting_Chart.htm}
     */
    formatString?: string;

    /**
     * Culture name used for formatting values on the axis.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-labels/formatting/}
     */
    cultureName?: string;

    /**
     * A number between 0 and 1 that sets the spacing percentage between column or bar groups. This setting applies when used with the X axis. The default spacingPercentage value is 0.2.
     * @max 1
     */
    spacingPercentage?: number;

    /**
     * Pixel width of columns stemming from this axis. This setting applies when used with the X axis.
     */
    staticColumnWidth?: number;

    /**
     * Scale related settings such as intervals, range and the like.
     * @since 1.1
     */
    scale?: Scale;

    /**
     * Whether the axis is visible.
     * @since 1.5
     */
    visible?: boolean;

    /**
     * When true and used with circular or radial charts, grid lines will render on top of data.
     * @since 2.5
     */
    onTop?: boolean;

    /**
     * Specifies the distance the of the axis from the related chartArea. A value of 0 will force the axis to touch the chart area even if it overlaps other axes. Negative values move the axis inside the chart area.
     * @since 2.8
     */
    caOffset?: number;

    /**
     * When set to 'hidden' the tick labels get clipped instead of affecting layout of the chart.
     * @remarks This is useful with live charts to prevent chartArea resizing due to axis tick labels.
     * @since 2.0
     */
    overflow?: string;

    /**
     * An axis tick that follows the mouse cursor and invokes combined tooltips or if x crosshair is combined with Y axis crosshair, the Y axis will show multiple crosshairs for all point values at the given x position.
     * @remarks Also used as colorBar visual that indicates the value of the hovered element
     * @since 2.7
     */
    crosshair?: JSCAxisTickConfig;
    [any: string]: any;
}

/**
* Options for adding gaps to the axis line at tick positions. This is an aesthetic feature that gives gauge types an improved visual quality in some cases. It can also be used with smartPalette line fill and represent ranges defined by the palette.
* @since 2.5
*/
export declare interface JSCLineBreaksConfig {

    /**
     * A numeric value between 0-.1 that controls the gap size at break positions.
     * @def 0.01
     */
    gap?: number;

    /**
     * When true,  gaps and fills are reversed.
     */
    invert?: boolean;

    /**
     * When true,  gaps and fills are reversed.
     */
    custom?: number[];
    [any: string]: any;
}

/**
* Represents an axis tick that encapsulates the tick label, gridLine, line styling settings.
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-axis/ticks-markers/}
*/
export declare interface JSCAxisTickConfig {

    /**
     * Line drawn on the chart area at the axis tick position.
     * @remarks Setting gridLine.visible='auto' will hide the grid lines if there are few gridlines used.
     * @since 2.5
     */
    gridLine?: JSCLineConfig;

    /**
     * The tick line of this AxisTick. The line.length property controls the length of this tick mark. With range ticks it controls the range shape (curly braces or arrows).
     * @remarks Setting line.visible = false will hide the range tick connector lines as well.
     */
    line?: JSCLineConfig;

    /**
     * Background fill of the axisTick label.
     * @since 2.7
     */
    fill?: JSCFillConfig;

    /**
     * AxisTick label box outline settings.
     * @since 2.7
     */
    outline?: JSCOutlineConfig;

    /**
     * Describes the type or each individual corner of the axis tick label box. Visible automatically when used with crosshairs. Set a fill or outline to use corners with regular axis ticks.
     * @since 2.7
     */
    corners?: any | [("square" | "cut" | "round"), ("square" | "cut" | "round"), ("square" | "cut" | "round"), ("square" | "cut" | "round")] | string;

    /**
     * Axis tick label box corner radius.
     * @def 3
     * @since 2.7
     */
    radius?: number;

    /**
     * Axis tick label.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-labels/token-reference/ | Label Token Reference}
     * {@link https://jscharting.com/samples/Javascript_LabelTokens_Chart.htm}
     */
    label?: JSCLabelConfig;

    /**
     * (Custom Ticks) The axis value this tick represents.
     * @since 1.5
     */
    value?: number | string | Date | [(number | string | Date), (number | string | Date)] | Value;

    /**
     * Whether the axis tick(s) is enabled and rendered. Also used with defaultTick to disable automatically generated ticks.
     * @since 1.5
     */
    enabled?: boolean;

    /**
     * Whether the axis range is adjusted to include this tick.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_AxisMarkerGoal_Chart.htm}
     * @since 1.5
     */
    includeInScale?: boolean;

    /**
     * Space between the tick label and tick mark.
     * @since 2.0
     */
    padding?: number;

    /**
     * Can be used with regular or circular outer axes to place ticks inside or outside the related chart area.
     * @since 2.5
     */
    placement?: ("auto" | "inside" | "outside");

    /**
     * Controls the visualization when the tick has a range value.
     * @def auto
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-axis/range-ticks/}
     * @since 2.8
     */
    rangeMode?: ("auto" | "curly" | "measure");

    /**
     * Event functions fired when for specific mouse interactions with this axis tick.
     * @since 3.0
     */
    events?: AxisTickEvents;

    /**
     * When used with point.x/yAxisTick, this property can be used to disable the default series highlighting on hover behavior. Set this option to false or 'none' to disable.
     * @remarks The default action when hovering a point axis tick is to mute other series to highlight the series of this point.
     * @since 3.0
     */
    hoverAction?: boolean | string;

    /**
     * When true and used with circular or radial charts, all tick visuals will render on top of data.
     * @since 2.5
     */
    onTop?: boolean;

    /**
     * With multiple X or Y axes, this property can be used with point.(x/y)AxisTick to specify the ID of the axis the point axis tick should be added to.
     * @since 2.9
     */
    axisId?: string;
    [any: string]: any;
}

/**
* Defines styles and positions used to mark a specified section or position on an axis.
* See Also:
* {@link https://jscharting.com/samples/Javascript_AxisMarkersInFront_Chart.htm}
*/
export declare interface JSCAxisMarkerConfig {

    /**
     * The axis marker ID
     */
    id?: string;

    /**
     * Axis marker value.
     */
    value?: number | string | any | [(number | Date | string), (number | Date | string)];

    /**
     * Whether the axis range is adjusted to always include this marker.
     * @since 1.5
     */
    includeInScale?: boolean;

    /**
     * Axis marker color.
     */
    color?: JSCFillConfig;

    /**
     * Single value axis marker line options.
     */
    line?: JSCLineConfig;

    /**
     * When true, the axis marker will appear in front of the data.
     */
    onTop?: boolean;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid (default).
     * @def 1
     * @since 1.4
     * @max 1
     */
    opacity?: number;

    /**
     * Label object drawn next to the axis marker.
     */
    label?: JSCLabelConfig;

    /**
     * This marker's legend entry settings.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_LegendAxisMarkers_Chart.htm}
     * @since 2.1
     */
    legendEntry?: JSCLegendEntryConfig;
    [any: string]: any;
}
/**
* Represents a color that can be set in several ways. Possible options are:
* The color name: "red"
* Hex color value: "#FF0000"
* RGB values syntax: rgb(20,20,20)
* RGBA values syntax: rgba(20,20,20,.5)
* Array of [color, opacity]: ["blue",.5]
*/
type JSCColorConfig = string | [any, number];

/**
* Represents a color with default shading effect disabled, a simple array based linear gradient fill, or complex linear gradient fill with stops.
*/
export declare type JSCFillConfig = JSCColorConfig | ([JSCColorConfig, (boolean | number)] | [JSCColorConfig, JSCColorConfig, number]) | JSCFillConfig_object;
export declare interface JSCFillConfig_object {

    /**
     * Gradient angle.
     */
    angle?: number;

    /**
     * Defines gradient color stops for this fill.
     */
    stops?: [number, JSCColorConfig][];

    /**
     * URL of an image that fills the area.
     */
    image?: string;
    [any: string]: any;
}

/**
* Describes a hatch pattern fill.
*/
export declare interface JSCHatchConfig {

    /**
     * Hatch pattern name
     */
    style?: string;

    /**
     * Color of the hatch pattern
     */
    color?: JSCColorConfig;
    [any: string]: any;
}

/**
* Percent complete values and styling options
* @since 2.0
*/
export declare type JSCCompleteConfig = JSCCompleteConfig_object | number;
export declare interface JSCCompleteConfig_object {

    /**
     * Percent of (Y) complete.
     * @remarks Applies to data point visuals that draw a rectangle.
     */
    y?: number | [number, number];

    /**
     * Percent of (X) complete
     * @since 2.0
     */
    x?: number | [number, number];

    /**
     * Fill options for the area.
     */
    fill?: JSCFillConfig;

    /**
     * Hatch styling for the area.
     */
    hatch?: JSCHatchConfig;
    [any: string]: any;
}

/**
* A color range specifying a value range and color. It is used with {@link https://jscharting.com/documentation/#node=Home.API.json.Types.smartPalette | smartPalette} objects.
* See Also:
* {@link https://jscharting.com/samples/Javascript_SmartPaletteRanges_Chart.htm}
* {@link https://jscharting.com/tutorials/js-chart-gradient-palette/}
* @since 2.1
*/
export declare interface JSCColorRangeConfig {

    /**
     * Range value.
     */
    value?: number | [(number | string), (number | string)];

    /**
     * The color associated with this color range.
     */
    color?: JSCColorConfig;

    /**
     * The legend entry associated with this range.
     */
    legendEntry?: JSCLegendEntryConfig;
    [any: string]: any;
}

/**
* Takes an object which determines the range values automatically, an array of ranges, or an array of numbers
*/
export declare type JSCSpRangeConfig = JSCSpRangeConfig_object | (JSCColorRangeConfig[] | number[]);
export declare interface JSCSpRangeConfig_object {

    /**
     * The starting value of the ranges.
     */
    min?: number;

    /**
     * The ending or max value to generate ranges for.
     */
    max?: number;

    /**
     * Interval of the ranges generated.
     */
    interval?: number;
    [any: string]: any;
}

/**
* A smartPalette defines a gradient range of colors and how point values are mapped to it.
* See Also:
* {@link https://jscharting.com/samples/Javascript_SmartPaletteGallery_Chart.htm}
* {@link https://jscharting.com/tutorials/js-chart-gradient-palette/}
* @since 2.1
*/
export declare interface JSCSmartPaletteConfig {

    /**
     * The smartPalette ID.
     * @since 2.5
     */
    id?: string;

    /**
     * Specifies a token expression evaluated for each point that maps to the colors.
     */
    pointValue?: string | ((point: Point) => any);

    /**
     * An array of value ranges and the associated colors.
     */
    ranges?: JSCSpRangeConfig;

    /**
     * Default settings that are applied to each range. This can be used to specify a single legend entry config for all ranges.
     */
    defaultRange?: JSCColorRangeConfig;

    /**
     * An array of values and colors like linear gradient stops.
     */
    stops?: ([(number | string), JSCColorConfig, number, number] | [(number | string), JSCColorConfig, number] | [(number | string), JSCColorConfig])[];

    /**
     * .
     */
    colors?: JSCColorConfig[];

    /**
     * Option can be used with colors array to explicitly define the value range those colors should apply to.
     * @since 2.6
     */
    colorsValueRange?: [(number | string), (number | string)];

    /**
     * Indicates whether the color stops are reversed. If so, the values will also invert.
     */
    invert?: boolean;

    /**
     * A gradient range of colors that appears in the legend when used with a smartPalette set on the chart level palette property
     * @since 2.1
     */
    colorBar?: ColorBar;
    [any: string]: any;
}

/**
* Represents a label containing text, font styling, color, and other options.
*/
export declare interface JSCLabelConfig {

    /**
     * The label text.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-labels/token-reference/ | Label Token Reference}
     * {@link https://jscharting.com/samples/Javascript_LabelTokens_Chart.htm}
     */
    text?: string | ((arg: any) => string);

    /**
     * label color
     */
    color?: JSCColorConfig;

    /**
     * Opacity of this label. 0 = transparent, 1 = solid.
     * @since 3.1
     */
    opacity?: number;

    /**
     * Label outline settings.
     * @since 3.0
     */
    outline?: JSCLabelOutlineConfig;

    /**
     * Whether the label is visible.
     * @def true
     */
    visible?: boolean;

    /**
     * Horizontal alignment of this label.
     */
    align?: ("center" | "left" | "right");

    /**
     * Vertical alignment of this label.
     */
    verticalAlign?: ("top" | "middle" | "bottom");

    /**
     * Label offset from the initial position in pixels.
     */
    offset?: string | number;

    /**
     * Label style options.
     */
    style?: JSCLabelStyleConfig;

    /**
     * Label rotation in degrees.
     */
    rotate?: number;

    /**
     * Margin of this label.
     * @since 2.0
     */
    margin?: JSCMarginConfig;

    /**
     * Used to disable automatic label wrapping.
     * @remarks If the string contains &lt;br&gt; tags, automatic wrapping is disabled as well.
     * @since 2.6
     */
    autoWrap?: boolean;

    /**
     * Set to "ellipsis" in combination with autoWrap:false and width to limit the width of this label.
     * @since 3.4
     */
    textOverflow?: string;

    /**
     * Max width of this label.
     * @since 2.9
     */
    maxWidth?: number;

    /**
     * When animation options are defined at the label level, it can be used to control the string character animation. To disable it for example.
     * @since 3.2
     */
    animation?: JSCAnimationConfig;
    [any: string]: any;
}

/**
* Represents label outline settings
*/
export declare interface JSCLabelOutlineConfig {

    /**
     * Outline color.
     */
    color?: JSCColorConfig;

    /**
     * Outline width
     */
    width?: number;
    [any: string]: any;
}

/**
* Represents outline settings
*/
export declare type JSCOutlineConfig = JSCOutlineConfig_object | string;
export declare interface JSCOutlineConfig_object {

    /**
     * Outline color.
     */
    color?: JSCColorConfig;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid (default).
     * @since 3.4
     * @max 1
     */
    opacity?: number;

    /**
     * Line dash style
     * @since 1.4
     */
    dashStyle?: ("Solid" | "solid" | "ShortDash" | "shortdash" | "ShortDot" | "shortdot" | "ShortDashDot" | "shortdashdot" | "ShortDashDotDot" | "shortdashdotdot" | "Dot" | "dot" | "Dash" | "dash" | "LongDash" | "longdash" | "DashDot" | "dashdot" | "DashDotDot" | "dashdotdot" | "LongDashDot" | "longdashdot" | "LongDashDotDot" | "longdashdotdot");

    /**
     * Outline width
     */
    width?: number;

    /**
     * Specifies whether the line is visible.
     * @since 2.5
     */
    visible?: boolean;
    [any: string]: any;
}

/**
* Defines styling used to draw a line or curve.
*/
export declare interface JSCLineConfig {

    /**
     * Line color.
     */
    color?: JSCColorConfig;

    /**
     * Line width in pixels.
     * @example "5px" || 5
     */
    width?: number | string;

    /**
     * Line dash style
     */
    dashStyle?: ("Solid" | "solid" | "ShortDash" | "shortdash" | "ShortDot" | "shortdot" | "ShortDashDot" | "shortdashdot" | "ShortDashDotDot" | "shortdashdotdot" | "Dot" | "dot" | "Dash" | "dash" | "LongDash" | "longdash" | "DashDot" | "dashdot" | "DashDotDot" | "dashdotdot" | "LongDashDot" | "longdashdot" | "LongDashDotDot" | "longdashdotdot");

    /**
     * Length of the line when applicable.
     */
    length?: number;

    /**
     * Opacity of this line. 0 = transparent, 1 = solid.
     * @since 2.0
     */
    opacity?: number;

    /**
     * Specifies whether the line is visible.
     * @since 2.5
     */
    visible?: boolean;

    /**
     * Line cap options that provide control over line cap shapes such as arrows. The 'arrow' line cap type is a specialized shape that is available in addition to other shape types.
     * @since 2.8
     */
    caps?: JSCLineCapsConfig;
    [any: string]: any;
}

/**
* Represents an area on which series and elements are plotted.
*/
export declare interface JSCChartAreaConfig {

    /**
     * Used to enable and disable accessibility or to assign an initial tabIndex for the chart item.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-accessibility/}
     * @since 2.8
     */
    tabIndex?: number | string;

    /**
     * The fundamental Chart Type such as horizontal or vertical. See {@link https://jscharting.com/documentation/#node=Home.API.json.Enums.seriesType | seriesType enum} for line, bar, area varieties. This can be set through {@link https://jscharting.com/documentation/#node=Home.API.json.Types.series.type | chart.defaultSeries.type}
     * See Also:
     * {@link https://jscharting.com/tutorials/types/ | Describes how to define specific chart types.}
     * @since 2.0
     */
    type?: string;

    /**
     * Fill settings used to fill the interior of this chart area.
     */
    fill?: JSCFillConfig;

    /**
     * Whether the annotation box is visible. Setting this property to false leaves only the annotation label visible. This property offers a shortcut to hide the annotation background box with one setting.
     * @def true
     * @since 2.0
     */
    boxVisible?: boolean;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid (default).
     * @def 1
     * @since 1.4
     * @max 1
     */
    opacity?: number;

    /**
     * Chart area box outline settings.
     */
    outline?: JSCOutlineConfig;

    /**
     * Enables or disables the chart area shadow.
     * @since 2.0
     */
    shadow?: boolean;

    /**
     * Controls whether series visuals are clipped when they go outside the chartArea rectangle.
     * @since 2.6
     */
    clipContent?: boolean;

    /**
     * 
     */
    series?: JSCSeriesConfig[];

    /**
     * The chart area's Y axis or array of Y axes.
     */
    yAxis?: JSCAxisConfig | JSCAxisConfig[];

    /**
     * The chart area's Y axis or array of Y axes.
     * @since 2.0
     */
    xAxis?: JSCAxisConfig | JSCAxisConfig[];

    /**
     * ChartArea's title box options.
     * @since 2.0
     */
    title?: JSCTitleBoxConfig;
    [any: string]: any;
}

/**
* Represents a series of data points and series related options.
*/
export declare interface JSCSeriesConfig {

    /**
     * Used to enable and disable accessibility or to assign an initial tabIndex for the chart item.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-accessibility/}
     * @since 2.8
     */
    tabIndex?: number | string;

    /**
     * Series object ID.
     */
    id?: string;

    /**
     * Specifies the series type or a chart type such as pie, radar, or gauge.
     * See Also:
     * {@link https://jscharting.com/tutorials/types/ | Describes how to define specific chart types.}
     * @since 1.1
     */
    type?: string;

    /**
     * Specifies the initial animation of the series.
     */
    animation?: JSCAnimationConfig;

    /**
     * Name of this series.
     */
    name?: string;

    /**
     * Point options applied to all points in this series.
     */
    defaultPoint?: JSCPointConfig;

    /**
     * Point options applied to all leaf points within this hierarchy. A leaf point is a hierarchical point that has no child points.
     * @remarks This can be useful to adjust all vertically stacked leaf points at the same time.
     * @since 3.4
     */
    defaultLeafPoint?: JSCPointConfig;

    /**
     * Point options applied to the first point in this series.
     * @since 2.9
     */
    firstPoint?: JSCPointConfig;

    /**
     * Point options applied to the last point in this series.
     * @since 2.9
     */
    lastPoint?: JSCPointConfig;

    /**
     * An array of points or point data object associated with this series.
     */
    points?: JSCPointConfig[] | Points;

    /**
     * Series attributes  containing additional metadata as key value pairs that can be referenced in label text or other series related properties using tokens such as %attributeKey.
     * @since 2.5
     */
    attributes?: [string, (string | number | Date)][] | Attributes;

    /**
     * The default series color. Same as the defaultPoint.Color setting.
     */
    color?: JSCColorConfig;

    /**
     * The fill of series area used with area series type.
     * @since 2.9
     */
    fill?: JSCFillConfig;

    /**
     * Specifies the amount of opacity of this series from 0 to 1, where 0 is transparent and 1 is solid.
     * @since 1.4
     * @max 1
     */
    opacity?: number;

    /**
     * Palette used for elements in this series.
     */
    palette?: string | JSCSmartPaletteConfig | JSCColorConfig[];

    /**
     * Indicates whether a default palette should be used with a boolean setting, or an array of hatchStyles that define the palette.
     * @since 2.0
     */
    hatchPalette?: boolean | string[];

    /**
     * Line options used when the series type property is a line or spline.
     */
    line?: JSCLineConfig;

    /**
     * Specifies the behavior of the series if empty points are included. Empty points have y values set to null.
     */
    emptyPointMode?: ("default" | "ignore" | "treatAsZero" | "treataszero");

    /**
     * Specifies whether point selection is enabled, the pointSelectionMode, or the maximum number of points that can be selected at a time. Setting true boolean is same as "auto" selection mode.
     * @remarks When designing charts for mobile usage where CTRL keys are not available, specific selection modes like "single" or "multiple" can be used for consistent selection behavior across devices.
     * @since 3.0
     */
    pointSelection?: boolean | string | PointSelection;

    /**
     * Specifies mouse tracking options for this series. When using crosshairs and combined tooltips, disabling mouse tracking will exclude points of this series from being highlighted (Point.focusGlow) by the crosshair or included in combined tooltips.
     * @remarks Disabling mouse tracking can improve client-side performance.
     */
    mouseTracking?: MouseTracking | boolean;

    /**
     * Legend entry settings associated with this series.
     */
    legendEntry?: JSCLegendEntryConfig;

    /**
     * Specifies the X axis associated with this series, or a new axis used only by this series.
     */
    xAxis?: number | string | JSCAxisConfig;

    /**
     * Specifies the Y axis associated with this series, or a new axis used only by this series.
     */
    yAxis?: number | string | JSCAxisConfig;

    /**
     * Specifies the number of pixels by which pie slices are exploded (offset) from the pie center when points are in the selected state.
     * See Also:
     * {@link https://jscharting.com/documentation/#node=Home.API.json.Types.Point.selected | Point selected state option.}
     */
    explodeOffset?: number;

    /**
     * Specifies the series states
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-interactivity/states/}
     */
    states?: States;

    /**
     * Event functions fired for specific mouse interactions with this series.
     */
    events?: SeriesEvents;

    /**
     * Indicates whether the series is in the mute state.
     * @since 3.0
     */
    muted?: boolean;

    /**
     * Indicates whether the series is in the select state.
     * @since 3.0
     */
    selected?: boolean;

    /**
     * The starting angle or arc of pie, gauge, or radar series type.
     * @since 1.1
     */
    angle?: JSCAngleArcConfig;

    /**
     * Styling and position info for the series when it is a pie, gauge or radar series type
     * @since 1.1
     */
    shape?: JSCShapeConfig;

    /**
     * Specifies the minimum and maximum sizes of points. The minimum size can be set to limit bar height, and both can be used to specify bubble size limits.
     * @since 1.1
     */
    size?: Size | [(number | string), (number | string)];

    /**
     * Specifies a map by code, a file name or a map features defined in a map file that is specified in baseLayers
     * See Also:
     * {@link https://jscharting.com/tutorials/types/js-map-chart/maps-mapcodes/}
     * {@link https://jscharting.com/tutorials/types/js-map-chart/}
     * @since 2.1
     */
    map?: string | JSCMapFileDataConfig;

    /**
     * Indicates whether the series is visible.
     * @since 2.6
     */
    visible?: boolean;
    [any: string]: any;
}

/**
* Represents a data point and related options.
*/
export declare type JSCPointConfig = ([number, (number | [(number | Date), (number | Date)])] | [Date, (number | [(number | Date), (number | Date)])] | [string, (number | [(number | Date), (number | Date)])] | [(string | number), (string | number), number] | [(Date | string), number, number, number, number]) | number | JSCPointConfig_object;
export declare interface JSCPointConfig_object {

    /**
     * Point object ID.
     */
    id?: string;

    /**
     * Identifies a single or multiple parent points by ID. If used as an array of pointConnector objects, each connector line can be styled individually. The point.connectorLine properties are the defaults for these lines.
     * @remarks This property allows defining nested hierarchies of points currently used with treemap data.
     * @since 3.3
     * @inline true
     */
    parent?: string | JSCPointConnectorConfig | JSCPointConnectorConfig[];

    /**
     * The default parent point connector line styling.
     * @since 3.3
     */
    connectorLine?: JSCLineConfig;

    /**
     * Organizational layout applied to children of this point if all its children are leaf points. A leaf point is a point in the hierarchy that has no children.
     * @remarks Set "vertical" to stack points vertically when used with the organizational chart type and the default down orientation.
     * @since 3.4
     */
    leafPointLayout?: string;

    /**
     * Point options applied to all leaf points that are children of this point. A leaf point is a point in the hierarchy that has no children.
     * @remarks This can be useful to adjust this point's child leaf points at the same time.
     * @since 3.4
     */
    defaultLeafPoint?: JSCPointConfig;

    /**
     * Specifies only the point visual fill color and does not affect other point related color.
     * @since 2.9
     */
    fill?: JSCColorConfig;

    /**
     * This point's color.
     */
    color?: JSCColorConfig;

    /**
     * The point's alternate color used with candlestick and OHLC bars when the close price is lower than the open price. Also used with circular columns to define the alternate color when the column overlaps itself.
     * @remarks Using the setting 'currentColor' with circular bars disables the color changes. Other color adjustment keywords are supported as well.
     * @since 3.0
     */
    altColor?: JSCColorConfig;

    /**
     * Point's outline options. Applies to marker, bar, or pie series types.
     */
    outline?: JSCOutlineConfig;

    /**
     * The hatch style to fill the point visual.
     * @def none
     * @since 2.0
     */
    hatch?: JSCHatchConfig;

    /**
     * Numeric corner radius of column series type or "auto".
     * @def auto
     * @since 3.1
     */
    radius?: string | number;

    /**
     * A glow effect when the point is hovered or highlighted by combined tooltip and crosshair
     * @since 2.7
     */
    focusGlow?: FocusGlow | boolean;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid.
     * @def 1
     * @since 1.4
     * @max 1
     */
    opacity?: number;

    /**
     * Point marker options used when the parent series type is set to marker
     */
    marker?: JSCPointMarkerConfig;

    /**
     * Annotation of this point. Used in organizational charts to set options for node visualizations.
     * @since 2.1
     */
    annotation?: JSCAnnotationConfig;

    /**
     * Point label options.
     * @remarks Point labels include smart layout logic that will attempt to position them efficiently and without overlapping other labels or points. Specifying settings for align, verticalAlign, and placement will limit the range of possible label positions, but the chart will try to find the best settings for any other properties that are not set explicitly.
     */
    label?: JSCLabelConfig;

    /**
     * Tooltip string for this element. Point related tokens can be used.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-labels/token-reference/ | Label Token Reference}
     * {@link https://jscharting.com/samples/Javascript_LabelTokens_Chart.htm}
     */
    tooltip?: string | ((point: Point) => string);

    /**
     * When false, the point will not respond to mouse events. The points will not be highlighted by axis crosshairs and will be excluded from combined tooltips.
     * @def true
     * @since 2.6
     */
    mouseTracking?: boolean;

    /**
     * The mouse cursor type when hovering this data point.
     * @since 3.0
     */
    cursor?: ("none" | "default" | "pointer" | "help" | "crosshair" | "wait" | "progress" | "text" | "n-resize" | "ne-resize" | "nw-resize" | "e-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize");

    /**
     * Specifies point state options
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-interactivity/states/}
     */
    states?: PointStates;

    /**
     * Event functions fired when for specific mouse interactions with this point.
     */
    events?: PointEvents;

    /**
     * Name of this point
     */
    name?: string;

    /**
     * X value of this point.
     */
    x?: number | [(number | string | Date), (number | string | Date)] | Date | string;

    /**
     * Y value of this point.
     */
    y?: number | [(number | string | Date), (number | string | Date)] | string | Date;

    /**
     * Z value of this point. Used in bubble charts and as gauge needle length from 0 to 1, and as pie slide lengths.
     * See Also:
     * {@link https://jscharting.com/tutorials/types/}
     * @since 1.1
     */
    z?: number;

    /**
     * Open price value used with finance charts.
     */
    open?: number;

    /**
     * High price value used with finance charts.
     */
    high?: number;

    /**
     * Low price value used with finance charts.
     */
    low?: number;

    /**
     * Close price value used with finance charts.
     */
    close?: number;

    /**
     * Used with Venn diagrams.
     * @since 3.0
     */
    sets?: string[];

    /**
     * Used to specify error bar data for this series.
     * @since 1.1
     */
    subvalue?: JSCSubvalueConfig;

    /**
     * Used to specify error bar data for this series on the X axis.
     * @since 2.0
     */
    subvalueX?: JSCSubvalueConfig;

    /**
     * Styling of the complete area.
     * @since 2.0
     */
    complete?: JSCCompleteConfig;

    /**
     * Used with calendar charts to specify a date, date range, or calendar pattern to bind to.
     * See Also:
     * {@link https://jscharting.com/tutorials/types/js-calendar-chart/}
     * @since 2.6
     */
    date?: number | [(number | string), (number | string | Date)] | string | JSCCalendarPatternConfig;

    /**
     * Point attributes which hold additional information about the point and can be referenced within label text with tokens such as %attributeKey.
     * @remarks With calendar charts, wrapping a string value attribute in an array like ["attribute string value"] allows merging attributes of multiple points. See the events calendar example in the <a href="Tutorials.calendar">Calendar tutorial</a> for more details.
     * @since 2.6
     */
    attributes?: [string, (string | number | Date)][] | any;

    /**
     * Indicates whether this point is selected. With pie series, selection offsets pie slice from the main pie by series.explodeOffset in pixels.
     * See Also:
     * {@link https://jscharting.com/documentation/#node=Home.API.json.Types.Series.explodeOffset | Pie series selected state modifier.}
     */
    selected?: boolean;

    /**
     * Indicates whether this point is muted due to other series or points being highlighted.
     * @since 3.0
     */
    muted?: boolean;

    /**
     * Used to define a highlighting action when hovering this data point.
     * @since 3.0
     */
    hoverAction?: boolean | string;

    /**
     * Legend entry settings associated with this point.
     * @since 2.0
     */
    legendEntry?: JSCLegendEntryConfig;

    /**
     * When defined, an axis tick is added to the X axis with this point's x value. The axis tick label will be processed using point tokens that can describe this point.
     * @since 2.8
     */
    xAxisTick?: JSCAxisTickConfig;

    /**
     * When defined, an axis tick is added to the Y axis with this point's y value. The axis tick label will be processed using point tokens that can describe this point.
     * @since 2.8
     */
    yAxisTick?: JSCAxisTickConfig;

    /**
     * Specifies a map feature by code, a file name or a map feature defined in a map file that is specified in baseLayers
     * See Also:
     * {@link https://jscharting.com/tutorials/types/js-map-chart/maps-mapcodes/}
     * {@link https://jscharting.com/tutorials/types/js-map-chart/}
     * @since 2.1
     */
    map?: string | JSCMapFileDataConfig;
    [any: string]: any;
}

/**
* Represents point marker settings
*/
export declare interface JSCPointMarkerConfig {

    /**
     * Specifies a predefined marker shape or image path. Alternatively, an icon object with properties related to the shape such as "path" can be used to specify a custom path shape that will be scaled to the marker size.
     * @since 2.1
     * @example 'circle', 'url(images/us.png)', {name:'iconName'}, 'iconName'
     */
    type?: string | JSCIconConfig;

    /**
     * Specifies whether this marker is visible.
     */
    visible?: boolean;

    /**
     * This points marker color. Applies to both fill and outline color but is slightly adjusted for outline color by default.
     * @since 2.9
     */
    color?: JSCColorConfig;

    /**
     * Marker shape fill.
     */
    fill?: JSCFillConfig;

    /**
     * Point marker outline styling.
     */
    outline?: JSCOutlineConfig;

    /**
     * Point marker size in pixels.
     */
    size?: number;

    /**
     * Offsets the marker visual in pixels from the original position.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_MapThematicMarkers_Chart.htm}
     * @since 2.1
     */
    offset?: string;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid.
     */
    opacity?: number;

    /**
     * State options for point marker.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-interactivity/states/}
     */
    states?: PointMarkerStates;

    /**
     * Specifies rotation of the marker in degrees. When using circular or radial charts, setting 'auto' will rotate the marker so it is oriented pointing away from the center. Point token values can be used with this property.
     * @since 2.5
     */
    rotate?: number | string;

    /**
     * Values between 0 and 1 used with needle gauge charts to specify the needle length or range.
     * @since 2.5
     */
    length?: number | [number, number];
    [any: string]: any;
}

/**
* Represents a hierarchical relationship with one or multiple parents. Includes point ID and line properties to customize the connector line to the specified point.
* Example: <b>{ id: 'p1', line:{ color: 'red' } }</b>
* @remarks Used with hierarchical chart types such as organizational or Gantt dependencies.
* @since 3.3
* @example { id: 'p1', line:{ color: 'red' } }<br/>{ id: 'p1,p2,p3', line:{ color: 'red' } }
*/
export declare interface JSCPointConnectorConfig {

    /**
     * The ID of a parent point or a comma delimited list of parent point IDs.
     */
    id?: string;

    /**
     * Line properties of the parent connector line.
     */
    line?: JSCLineConfig;
    [any: string]: any;
}

/**
* Represents the legend box settings of this chart.
*/
export declare interface JSCLegendConfig {

    /**
     * Used to enable and disable accessibility or to assign an initial tabIndex for the chart item.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-accessibility/}
     * @since 2.8
     */
    tabIndex?: number | string;

    /**
     * Additional horizontal spacing between entries (not cells or columns of entries) when they are side-by-side
     * @since 2.0
     */
    horizontalSpacing?: number;

    /**
     * Similar to HTML table cellSpacing attribute, it defines the space between each cell and box edges.
     * @since 2.0
     */
    cellSpacing?: number;

    /**
     * Fills the background of the legend box.
     */
    fill?: JSCFillConfig;

    /**
     * Legend box outline.
     */
    outline?: JSCOutlineConfig;

    /**
     * Legend box corner radius.
     * @def 5
     * @max 50
     */
    radius?: number;

    /**
     * Specifies whether the legend is visible.
     */
    visible?: boolean;

    /**
     * Specifies the default options used by all legend entries in this legend.
     */
    defaultEntry?: JSCLegendEntryConfig;

    /**
     * Specifies whether the order of the legend entries is reversed.
     */
    reversed?: boolean;

    /**
     * Specifies whether a shadow is visible for the legend box.
     */
    shadow?: boolean;

    /**
     * Limits the pixel width of the legend box.
     * @since 2.9
     */
    maxWidth?: number;

    /**
     * When specified, this pixel width is used for the legend. Determined automatically when not specified.
     */
    width?: number;

    /**
     * When specified, this pixel height is used for the legend. Determined automatically when not specified.
     * @since 1.2,
     */
    height?: number;

    /**
     * Specifies the margin of the legend box.
     * @since 2.0
     */
    margin?: JSCMarginConfig;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid.
     * @def 1
     * @since 1.4
     * @max 1
     */
    opacity?: number;

    /**
     * Whether the legend box background and outline are visible
     * @def true
     */
    boxVisible?: boolean;

    /**
     * Describes the type of each individual corner of the box.
     * @since 2.0
     */
    corners?: any | [("square" | "cut" | "round"), ("square" | "cut" | "round"), ("square" | "cut" | "round"), ("square" | "cut" | "round")] | string;

    /**
     * Layout of the legend entries.
     */
    layout?: ("auto" | "vertical" | "horizontal");

    /**
     * Offsets the legend by this pixel amount given as "x,y" from the initial position
     */
    offset?: string;

    /**
     * Alignment or pixel position in or around the chartArea. The position can be prefixed with "inside" meaning inside the chartArea.
     * 
     * Alignment based position can be specified with two alignment values where their order is significant. First value specifies the side to align to such as top, right, bottom, left. The second value is the alignment on that side. For example, 'top left' will place the item on top of the chart and align left whereas 'left top' places it on the left side and aligns to top. Inside the chartArea these two settings will have the same meaning.
     * 
     * Pixel position of the item where 0,0 is the top left corner of the chart image. Prefixing this setting with "inside " like: "inside 10,10" will make the 0,0 position refer to the top left corner of the chartArea. Items will stack  when using the same positions such as "inside top left" for multiple items.
     * 
     * @since 2.6
     */
    position?: string;

    /**
     * Represents the legend title
     */
    title?: LegendTitle;

    /**
     * Styling setting for column header labels.
     * @since 2.0
     */
    headerStyle?: JSCLabelStyleConfig;

    /**
     * An array or delimited list (string) of header labels for each column defined in the template property.
     * @since 2.0
     */
    header?: string | string[];

    /**
     * An array or delimited list (string) of tokens and expressions that define the value for each column. The header property provides a similar way to label each column.
     * @since 2.0
     */
    template?: string | string[];

    /**
     * An array of custom legend entries that will be added to the legend.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_LegendCustomEntries_Chart.htm}
     * @since 2.1
     */
    customEntries?: JSCLegendEntryConfig[];
    [any: string]: any;
}

/**
* Represents a legend entry.
*/
export declare interface JSCLegendEntryConfig {

    /**
     * The ID of this entry.
     * @since 3.0
     */
    id?: string;

    /**
     * The %name token in the legend template will refer to this string rather than process the token on the related item directly.
     * @since 2.0
     */
    name?: string | ((arg: any) => string);

    /**
     * The %value token in the legend template will refer to this string rather than process the token on the related item directly.
     * @since 2.0
     */
    value?: string | ((arg: any) => string);

    /**
     * Legend entry text style.
     */
    style?: JSCLabelStyleConfig;

    /**
     * Distance between the entry text and icon
     */
    padding?: number;

    /**
     * Legend entry text color.
     */
    color?: JSCColorConfig;

    /**
     * When specified, this pixel width is used for the entry. Determined automatically when not specified.
     */
    width?: number;

    /**
     * Height of the legend entry in pixels.
     */
    height?: number;

    /**
     * When true, a line will be drawn above the legend entry.
     * @since 2.6
     */
    lineAbove?: boolean;

    /**
     * A checkbox associated with this legend entry.
     * @since 3.0
     */
    checkbox?: boolean | JSCIconConfig;

    /**
     * Specifies whether this legend entry is visible.
     */
    visible?: boolean;

    /**
     * Legend entries will be sorted by this number.
     */
    sortOrder?: number;

    /**
     * Used to disable the default hover behavior like highlighting. Set this option to false or 'none' to disable.
     * @remarks The default action when hovering a series or point is to mute other points and series to highlight the one being hovered.
     * @since 3.0
     */
    hoverAction?: boolean | string;

    /**
     * State options for legend entry.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-interactivity/states/}
     */
    states?: LegendEntryState;

    /**
     * The mouse cursor type when hovering this entry.
     * @since 2.6
     */
    cursor?: ("none" | "default" | "pointer" | "help" | "crosshair" | "wait" | "progress" | "text" | "n-resize" | "ne-resize" | "nw-resize" | "e-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize");

    /**
     * Event functions fired when for specific mouse interactions with this legend entry.
     * @since 2.0
     */
    events?: LegendEntryEvents;

    /**
     * Icon options that are incorporated into the legend entry icon visual.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_BarMarkerIconsInLegend_Chart.htm}
     * @since 2.1
     */
    icon?: JSCIconConfig;

    /**
     * Used with custom entries, these attributes hold values that legend columns may require.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_LegendAlone_Chart.htm}
     * @since 2.1
     */
    attributes?: [string, (string | number | Date)][] | any;
    [any: string]: any;
}

/**
* Represents a time interval span.
* @example {unit:'day',multiplier:2}
*/
export declare interface JSCTimeIntervalConfig {

    /**
     * The time unit used by this interval.
     */
    unit?: ("second" | "minute" | "hour" | "day" | "week" | "month" | "year");

    /**
     * Time unit multiplication factor.
     * @def 1
     */
    multiplier?: number;
    [any: string]: any;
}

/**
* Represents chart title box options.
*/
export declare interface JSCTitleBoxConfig {

    /**
     * Used to enable and disable accessibility or to assign an initial tabIndex for the chart item.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-accessibility/}
     * @since 2.8
     */
    tabIndex?: number | string;

    /**
     * Title label.
     */
    label?: JSCLabelConfig;

    /**
     * Background fill of the title box.
     */
    fill?: JSCFillConfig;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid (default).
     * @def 1
     * @since 1.4
     * @max 1
     */
    opacity?: number;

    /**
     * Whether the title box background and outline are visible
     * @def true
     */
    boxVisible?: boolean;

    /**
     * Boxes corner radius.
     * @def 5
     */
    radius?: number;

    /**
     * Spacing between the title label and bounding box.
     * @def 5
     */
    padding?: number;

    /**
     * Margins around title box.
     * @since 3.0
     */
    margin?: JSCMarginConfig;

    /**
     * Title box outline settings.
     */
    outline?: JSCOutlineConfig;

    /**
     * Title box position.
     */
    position?: ("left" | "center" | "right" | "full");

    /**
     * Whether the title is visible.
     * @since 2.0
     */
    visible?: boolean;
    [any: string]: any;
}

/**
* Represents data tooltip settings.
*/
export declare interface JSCTooltipConfig {

    /**
     * Background fill.
     * @def auto
     * @remarks When this property is set to "auto" (default), the background is automatically created to include the source point's color.
     */
    fill?: JSCFillConfig;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid (default).
     * @def 0.8
     * @since 1.4
     * @max 1
     */
    opacity?: number;

    /**
     * Tooltip box outline styling.
     */
    outline?: JSCOutlineConfig;

    /**
     * Box corner radius.
     * @def 4
     * @max 50
     */
    radius?: number;

    /**
     * Specifies whether tooltips are enabled.
     * @def true
     */
    enabled?: boolean;

    /**
     * Enables or disables the tooltip shadow.
     * @def true
     */
    shadow?: boolean;

    /**
     * Padding between annotation content and tooltip box.
     * @def 5
     * @max 50
     */
    padding?: number;

    /**
     * Numeric margin that influences the distance between tooltip and the target element.
     * @since 2.0
     */
    margin?: number;

    /**
     * Label displayed inside the annotation.
     * @remarks  When combined tooltip is enabled, the text property supports additional point list tokens.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-interactivity/crosshair-combined-tooltip/}
     */
    label?: JSCLabelConfig;

    /**
     * Enables a combined tooltip that includes details about all points at the cursor X axis position. The combined tooltip can also be enabled automatically based on crosshair settings. Use defaultTooltip.label.text to define the combined tooltip template.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-interactivity/crosshair-combined-tooltip/}
     * @since 2.7
     */
    combined?: boolean;

    /**
     * If true, the tooltip follows the cursor position. This feature is enabled for some chart types by default.
     * @remarks It is useful with chart types where points visuals fill most of the available space.
     * @since 3.0
     */
    followCursor?: boolean;
    [any: string]: any;
}

/**
* Represents language strings used on the chart.
*/
export declare interface JSCLanguageStringsConfig {

    /**
     * Export button tooltip.
     * @def 'Export to raster or vector image'
     */
    exportButtonTooltip?: string;

    /**
     * Print button tooltip.
     * @def 'Print the chart'
     */
    printButtonTooltip?: string;

    /**
     * Reset zoom label text.
     * @def 'Zoom Out'
     */
    resetZoomText?: string;

    /**
     * Reset zoom label tooltip.
     * @def 'Reset Zoom'
     */
    resetZoomTooltip?: string;
    [any: string]: any;
}

/**
* Represents image exporting options.
*/
export declare interface JSCExportOptionsConfig {

    /**
     * Export server URL.
     */
    server?: string;

    /**
     * Output image format mime type, or extension name (pdf, png, jpg, svg)
     */
    imageType?: string;

    /**
     * Title file attribute.
     * @since 2.6
     */
    title?: string;

    /**
     * Author file attribute.
     * @since 2.6
     */
    author?: string;

    /**
     * Subject file attribute.
     * @since 2.6
     */
    subject?: string;

    /**
     * Keywords file attribute.
     * @since 2.6
     */
    keywords?: string;

    /**
     * Comment file attribute.
     * @since 2.6
     */
    comment?: string;

    /**
     * Rating file attribute.
     * @since 2.6
     */
    rating?: number;
    [any: string]: any;
}
export declare type JSCToolbarConfig = JSCUiItemConfig;
export declare type JSCUiItemConfig = JSCAnnotationConfig;

/**
* An icon visual.
* See Also:
* {@link https://jscharting.com/samples/Javascript_IconsBrowser_Chart.htm}
* @since 2.0
*/
export declare type JSCIconConfig = string | JSCIconConfig_object;
export declare interface JSCIconConfig_object {

    /**
     * Spacing between icon and outerShape.
     */
    padding?: JSCMarginConfig;

    /**
     * Margins around icon outerShape.
     */
    margin?: JSCMarginConfig;

    /**
     * Icon width and height
     * @example 40
     */
    size?: number;

    /**
     * Icon width
     * @example 120
     */
    width?: number;

    /**
     * Icon height (automatic if not defined)
     * @example 60
     */
    height?: number;

    /**
     * Icon name from the available icon sets.
     */
    name?: string;

    /**
     * A custom icon path using SVG path syntax.
     */
    path?: string;

    /**
     * Defines an outer shape out of which this icon is cut out.
     */
    outerShape?: ("none" | "diamond" | "circle" | "arrow-down" | "arrow-up" | "five-point-star" | "four-point-star" | "merger" | "split-reverse" | "seven-point-star" | "six-point-star" | "spinoff" | "split" | "square" | "triangle" | "triangle-down");

    /**
     * Outline settings for this icon.
     */
    outline?: JSCOutlineConfig;

    /**
     * Icon fill.
     */
    fill?: JSCFillConfig;

    /**
     * Hatch styling for the area.
     * @since 3.0
     */
    hatch?: JSCHatchConfig;

    /**
     * Indicates whether the icon is visible.
     */
    visible?: boolean;

    /**
     * Describes the position of the icon in relation to related visual such as a label
     * @def left
     */
    position?: ("none" | "left" | "right" | "top" | "bottom" | "topLeft" | "topleft" | "topRight" | "topright" | "bottomRight" | "bottomright" | "bottomLeft" | "bottomleft" | "opposite");

    /**
     * Rotation of the icon in degrees.
     * @since 2.5
     */
    rotate?: number;
    [any: string]: any;
}

/**
* Margin of the visual item.
* @since 2.0
*/
export declare type JSCMarginConfig = number | ([number, number, number, number] | [number, number] | [number, number, number]) | JSCMarginConfig_object | string;
export declare interface JSCMarginConfig_object {

    /**
     * Top margin in pixels.
     */
    top?: number;

    /**
     * Right margin in pixels.
     */
    right?: number;

    /**
     * Bottom margin in pixels.
     */
    bottom?: number;

    /**
     * Left margin in pixels.
     */
    left?: number;
    [any: string]: any;
}

/**
* Label Style
*/
export declare interface JSCLabelStyleConfig {

    /**
     * Label max width.
     */
    maxWidth?: number;

    /**
     * Label's font size.
     */
    fontSize?: number | string;

    /**
     * Label's font family
     */
    fontFamily?: string;

    /**
     * Label's font weight
     */
    fontWeight?: ("normal" | "bold");

    /**
     * Label's font style
     */
    fontStyle?: ("normal" | "italic");

    /**
     * Specifies the decoration added to text.
     * @since 2.6
     */
    textDecoration?: ("overline" | "line-through" | "underline" | "underline overline");

    /**
     * Mouse cursor on label hover.
     */
    cursor?: ("none" | "default" | "pointer" | "help" | "crosshair" | "wait" | "progress" | "text" | "n-resize" | "ne-resize" | "nw-resize" | "e-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize");

    /**
     * Label color.
     */
    color?: JSCColorConfig;
    [any: string]: any;
}

/**
* Represents series state options.
*/
export declare interface JSCSeriesStateConfig {

    /**
     * Line options used when this series type is a line.
     */
    line?: JSCLineConfig;

    /**
     * The fill or color of the area of areaLines in this state.
     * @since 3.0
     */
    fill?: JSCFillConfig;

    /**
     * Can be used disable the state visualization.
     * @since 3.0
     */
    enabled?: boolean;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid (default).
     * @since 1.4
     * @max 1
     */
    opacity?: number;
    [any: string]: any;
}
export declare type JSCUiItemStateConfig = JSCUiItemConfig;

/**
* Represents legend entry state options.
*/
export declare interface JSCLegendEntryStateConfig {

    /**
     * Legend entry label style.
     */
    style?: JSCLabelStyleConfig;

    /**
     * Color of the legend entry text.
     * @since 3.0
     */
    color?: JSCColorConfig;
    [any: string]: any;
}

/**
* Represents data point state options.
*/
export declare interface JSCPointStateConfig {

    /**
     * Point's outline options. Applies to marker, bar, or pie series types.
     */
    outline?: JSCOutlineConfig;

    /**
     * Point marker options
     */
    marker?: JSCPointMarkerConfig;

    /**
     * Point marker, bar or pie fill.
     */
    fill?: JSCFillConfig;

    /**
     * Color of the point
     * @since 3.4
     */
    color?: JSCColorConfig;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid (default).
     * @since 3.4
     * @max 1
     */
    opacity?: number;

    /**
     * The chart will avoid calculating state styles for the select state to improve performance based on other properties. You can prevent or force the select state styles to be generated for the object using this property.
     * @since 3.0
     */
    enabled?: boolean;
    [any: string]: any;
}

/**
* Point marker state options.
*/
export declare interface JSCPointMarkerStateConfig {

    /**
     * Fills the marker.
     */
    fill?: JSCFillConfig;

    /**
     * Point marker outline properties.
     */
    outline?: JSCOutlineConfig;
    [any: string]: any;
}

/**
* Specifies animation settings such as enabled, duration, and easing.
* @example false OR {duration:250, easing:"easeInQuad"}
*/
export declare type JSCAnimationConfig = boolean | JSCAnimationConfig_object;
export declare interface JSCAnimationConfig_object {

    /**
     * The duration in milliseconds.
     */
    duration?: number;

    /**
     * Animation easing function name.
     */
    easing?: string;
    [any: string]: any;
}
export declare type JSCEventHandlerConfig = string | ((arg: any) => any);
export declare type JSCDataEventHandlerConfig = ((arg: any) => any);

/**
* Defines an angle or arc.
* @remarks All angles are based on 0 degrees pointing right.
* @since 1.1
*/
export declare type JSCAngleArcConfig = number | [number, number] | JSCAngleArcConfig_object;
export declare interface JSCAngleArcConfig_object {

    /**
     * Start angle in degrees.
     */
    start?: number;

    /**
     * End angle in degrees.
     */
    end?: number;

    /**
     * Orientation of the arc used in conjunction with the sweep property.
     * @remarks If only orientation is defined, a sweep of 360 is assumed.
     */
    orientation?: number;

    /**
     * The sweep in degrees given as number, or as a string percentage of 360.
     * @remarks If only the sweep is defined, it is evaluated with an assumed orientation angle of 0.
     * @example "50%" OR 5
     */
    sweep?: number | string;
    [any: string]: any;
}

/**
* Encapsulates the styling settings of a shape.
* @since 1.1
*/
export declare interface JSCShapeConfig {

    /**
     * Background fill of this shape.
     */
    fill?: JSCFillConfig;

    /**
     * Shape outline styling.
     */
    outline?: JSCOutlineConfig;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid (default).
     * @since 1.4
     * @max 1
     */
    opacity?: number;

    /**
     * Whether the shape visual is visible.
     * @def true
     */
    visible?: boolean;

    /**
     * Default settings applied to all shape labels. Useful when multiple shape labels are used.
     * @since 3.2
     */
    defaultLabel?: JSCLabelConfig;

    /**
     * Series shape label. Used to specify label text and settings when the series is represented as a shape
     * @remarks When a function is used for shape label text, either a series or array of series is provided as the argument. Currently supported with treemap, gauge, and radar charts.
     * @since 3.1
     */
    label?: JSCLabelConfig | JSCLabelConfig[];
    [any: string]: any;
}

/**
* Represents additional point data values that can be specified as relative to or independent of the parent point's value. Subvalues are used to store point error bar values.
* @since 1.1
*/
export declare interface JSCSubvalueConfig {

    /**
     * Represents an error range [low,high]
     * @example [-45,45]
     */
    range?: [number, number];

    /**
     * Error line styling.
     */
    line?: JSCLineConfig;

    /**
     * Represents a range, +/- the value of the offset with respect to the elements Y value or range.
     */
    offset?: number;

    /**
     * Represents a range, +/- the percentage of the elements Y value or range.
     */
    percent?: number;

    /**
     * An array of subvalues associated with this point.
     * @since 2.0
     */
    values?: number[];
    [any: string]: any;
}
export declare type JSCMapFileDataConfig = any;
export declare type JSCZoomConfig = string | number | ([number, number] | [number, number, number] | [number, number, number, number]);

/**
* Update options used when the chart responds to this update.
*/
export declare interface JSCUpdateOptionsConfig {

    /**
     * Animation settings used when with this update.
     */
    animation?: JSCAnimationConfig;

    /**
     * Callback function to run after the chart update is finishes animating. The "this" keyword refers to the chart object.
     * @since 3.0
     */
    then?: ((args: any[]) => any);
    [any: string]: any;
}

/**
* Encompasses options for the calendar chart type.
* @since 2.6
*/
export declare interface JSCCalendarConfig {

    /**
     * The date range the calendar chart encompasses. It can be used when chart.data is not populated so the chart knows what dates to show or to cull data and only show the specified date range.
     */
    range?: [(number | string | Date), (number | string | Date)];

    /**
     * Date of the series that is displayed first when chart renders.
     */
    initial?: Date | number | string;

    /**
     * The starting day of the week (0-6) used when arranging calendar grids. Sunday (0) by default.
     */
    weekStart?: number;

    /**
     * The date format string used when creating series names. These labels appear in the legend name columns.
     */
    seriesFormat?: string;

    /**
     * The date format string used when creating point names. These labels are accessible through the point %name token in labels.
     */
    pointFormat?: string;

    /**
     * The calculation used when grouping date value pairs into cells and subvalues.
     */
    calculation?: ("sum" | "average" | "min" | "max");

    /**
     * Sub values are grouped into predefined intervals but may result in spikes if data does not provide sufficient points for each subgrouping. Setting this to true will create interpolated values for missing data points.
     */
    interpolateSubvalues?: boolean;

    /**
     * The default point options for cells that do not contain any heatmap data.
     */
    defaultEmptyPoint?: JSCPointConfig;

    /**
     * The default point options set for peripheral calendar cells that are not part of the series date range but included for completeness. For example, when using month view, some cells representing days of adjacent months are included to fill in the gaps of the grid.
     */
    defaultEdgePoint?: JSCPointConfig;
    [any: string]: any;
}

/**
* Specifies a calendar pattern that includes filters and rules such as weekends, or more complicated rules like how dates of national holidays are determined. Calendar patterns can also represent complex time intervals such as first weekend of every month.
* 
* Setting filter property value to " " indicates that an interval at that time span. For example {month:" "} means every month. Only one property can have an asterisk.
* 
* To represent every 3 months this configuration can be used: {month:" ",every:3}
* 
* When using options such as { year:"1/1/2020" } the year value is evaluated using the same function applied to dates being tested and is equivalent to { year:2020 }
* 
* See {@link https://jscharting.com/tutorials/types/js-calendar-chart/calendar-patterns/ | calendarPattern tutorial} for more details.
* @since 2.6
*/
export declare type JSCCalendarPatternConfig = JSCCalendarPatternConfig_object | string;
export declare interface JSCCalendarPatternConfig_object {

    /**
     * When multiple filters are specified and this option is true, all filters must be met for a date value to match this pattern.
     */
    inclusive?: boolean;

    /**
     * When used with an interval filter such as {month:" ",every:3}, it provides a way to specify "every 3 months"
     */
    every?: number;

    /**
     * Specifies a time offset as a time interval or as a number in milliseconds. This option is useful with scale breaks that remove parts of the scale such as weekends. Data points may be centered on dates that specify the beginning of the time span like 12AM. This offset allows the parts of the scale that are removed to be adjusted so they do not remove parts of the data points.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_FinancePatternBreaks_Chart.htm}
     * @since 2.7
     */
    offset?: number | JSCTimeIntervalConfig;

    /**
     * The year value to match
     * @example { year:2018 }
     */
    year?: JSCCalendarPatternValueConfig;

    /**
     * The month value to match (1-12)
     */
    month?: JSCCalendarPatternValueConfig;

    /**
     * The quarter number to match
     */
    quarter?: JSCCalendarPatternValueConfig;

    /**
     * The weekday number to match (0-6)
     */
    weekday?: JSCCalendarPatternValueConfig;

    /**
     * The day of year to match
     */
    dayofyear?: JSCCalendarPatternValueConfig;

    /**
     * The day of month to match (1-31)
     */
    day?: JSCCalendarPatternValueConfig;

    /**
     * The specific date or dates to match
     */
    date?: JSCCalendarPatternValueConfig;

    /**
     * The hour of day to match
     */
    hour?: JSCCalendarPatternValueConfig;

    /**
     * The minute of day to match.
     */
    minuteofday?: JSCCalendarPatternValueConfig;

    /**
     * The minute of hour to match (0-59)
     */
    minute?: JSCCalendarPatternValueConfig;

    /**
     * The second of minute to match (0-59).
     */
    second?: JSCCalendarPatternValueConfig;
    [any: string]: any;
}

/**
* A value range used to match dates against.
* @since 2.6
* @inline true
*/
export declare type JSCCalendarPatternValueConfig = number | string | (string | number)[] | JSCCalendarPatternValueConfig_object;
export declare interface JSCCalendarPatternValueConfig_object {

    /**
     * The start/end values of the range to match.
     */
    range?: [(number | string | Date), (number | string | Date)];
    [any: string]: any;
}

/**
* Options that define a pattern and styling used to highlight a grouping of points.
* @since 2.6
*/
export declare interface JSCHighlightConfig {

    /**
     * The ID of this highlight.
     */
    id?: string;

    /**
     * Calendar pattern to highlight.
     */
    pattern?: JSCCalendarPatternConfig;

    /**
     * Background fill of this highlight that renders behind point visuals.
     */
    fill?: JSCFillConfig;

    /**
     * Outline styling options that render on top of point visuals.
     */
    outline?: JSCOutlineConfig;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid (default).
     * @max 1
     */
    opacity?: number;
    [any: string]: any;
}

/**
* Line cap settings.
*/
export declare interface JSCLineCapsConfig {

    /**
     * Settings for the line cap at the start of the line.
     */
    start?: Start;

    /**
     * Settings for the line cap at the end of the line.
     */
    end?: End;

    /**
     * When true and the line path is made up of multiple shapes, the caps are applied to every individual shape.
     */
    everyShape?: boolean;

    /**
     * Specifies the default line cap shape name or a specialized 'arrow' cap.
     */
    type?: string;

    /**
     * The default cap size as a percentage of line width or a pixel size of the cap.
     * @example "450%" || 20
     */
    size?: string | number;

    /**
     * The default cap overflow setting. When set to true, the cap extends beyond the line end. When false, it is drawn within the span of the line.
     */
    overflow?: boolean;
    [any: string]: any;
}

/**
* Encapsulates grid options.
* @since 2.8
*/
export declare interface JSCGridConfig {

    /**
     * Enables the chart to switch between chart and grid view when enabled through the chart {@link https://jscharting.com/documentation/#node=Home.API.json.Types.chart.grid | grid property}.
     */
    enabled?: boolean;

    /**
     * When true or set with a csv file name, the grid will show a button that allows downloading the data as CSV.
     * @since 2.9
     * @example 'grid-data' -> exports grid-data.csv
     */
    exportFile?: boolean | string;

    /**
     * Data grid title text.
     * @since 3.0
     */
    title?: string;

    /**
     * An array of JSON objects or arrays to display in the grid. A function can be specified as well. It will be executed and the returned data will display in the grid. When grid.options({}) is called, the function is executed again to refresh grid data.
     */
    data?: ([(string | number | Date)][] | Undefined[]) | ((args: any[]) => any);

    /**
     * Default formatting culture name.
     */
    cultureName?: string;

    /**
     * The width of the output grid as a number in pixels or string percentage.
     */
    width?: number | string;

    /**
     * Height of the grid in pixels. Can be used to limit the resulting height.
     */
    height?: number | string;

    /**
     * Enables a header column that displays the numeric index of each data row.
     */
    headerCol?: boolean;

    /**
     * Enables a header row that shows column names or letters when names are not available.
     */
    headerRow?: boolean;

    /**
     * When specified, the default DataGrid CSS file will be omitted and the specified one is downloaded instead. Setting the value to an empty string will omit downloading the default CSS file.
     */
    cssFile?: string;

    /**
     * The CSS class name of the datagrid table.
     */
    className?: string;

    /**
     * Column definition settings that will apply to all data columns.
     */
    defaultColumn?: JSCGridColumnConfig;

    /**
     * Defines columns and their options shown in the grid.
     */
    columns?: JSCGridColumnConfig[];

    /**
     * An array of value strings assigned to each data column. An object with properties referring to column names. Or an array of either to create multiple summary rows.
     * @remarks The %min %max %sum %average tokens can be used define the calculation for the summary row columns.
     */
    summaryRow?: string[];

    /**
     * Accessibility options for the grid buttons when enabled.
     * See Also:
     * {@link https://jscharting.com/tutorials/js-chart-accessibility/}
     */
    buttons?: Buttons;
    [any: string]: any;
}

/**
* A grid column definition that includes header, cell text and other options.
* @since 2.8
*/
export declare interface JSCGridColumnConfig {

    /**
     * The header of the data column.
     */
    header?: string | string[];

    /**
     * Width of the output column in pixels or as a CSS string value.
     */
    width?: number | string;

    /**
     * Data type of the column such as number or date.
     */
    type?: string;

    /**
     * Left, center, or right alignment of the column values.
     */
    align?: string;

    /**
     * Cell value label text that can be used to specify the data, format, or expression for the column.
     */
    value?: string;

    /**
     * The CSS class name applied to the grid column.
     */
    className?: string;
    [any: string]: any;
}

/**
* Accessibility options for the button
* @since 2.8
*/
export declare interface JSCGridButtonConfig {

    /**
     * Used to enable and disable accessibility or to assign a tabIndex for the button.
     */
    tabIndex?: number | string;

    /**
     * The text of the button.
     */
    text?: string;
    [any: string]: any;
}

/**
* Initializes and returns a new instance of the JS chart object.
* @param targetElement - Specifies the ID of the HTML element to which this chart is added, or the element object itself.
* @param chartConfig - Chart options
* @param callback - A callback function called when the chart load is complete. This function is called in the context of the chart object, hence, the "this" keyword can be used in the function to refer to the <a href="iObject.chart">chart</a>.
* @returns Returns a chart JS object.
* @example var chart = JSC.chart('targetDiv', options, callback);
*/
export function chart(targetElement: (string | any), chartConfig: JSCChartConfig, callback?: ((args: any[]) => any)): Chart;
/**
* A static method providing number and date formatting by passing a value and using standard or custom format strings.
* @param val - The value to be formatted based on the given format string.
* @param format - Format string.
* @param culture - Culture.
* @returns Returns a string with the value formatted according to the specified format.
* See Also:
* {@link https://jscharting.com/samples/Javascript_CallbackFormatting_Chart.htm}
* {@link https://jscharting.com/tutorials/js-chart-labels/formatting/ | Formatting labels tutorial.}
*/
export function formatString(val: (number | Date), format: string, culture?: any): string;
/**
* Formats a number based on specified format string.
* @param val - The value to be formatted based on the given format string.
* @param format - Format string. A default number format is used if not provided.
* @param culture - Culture.
* @returns Returns a string with the value formatted according to the specified format.
* See Also:
* {@link https://jscharting.com/samples/Javascript_CallbackFormatting_Chart.htm}
* {@link https://jscharting.com/tutorials/js-chart-labels/ | Includes information on formatStrings.}
* @since 2.0
*/
export function formatNumber(val: number, format?: string, culture?: any): string;
/**
* Formats a date based on specified format string.
* @param val - The value to be formatted based on the given format string.
* @param format - Format string.
* @param culture - Culture.
* @returns Returns a string with the value formatted according to the specified format.
* See Also:
* {@link https://jscharting.com/samples/Javascript_CallbackFormatting_Chart.htm}
* {@link https://jscharting.com/tutorials/js-chart-labels/ | Includes information on formatStrings.}
* @since 2.0
*/
export function formatDate(val: (string | Date), format: string, culture?: any): string;
/**
* A static method used to populate points from array data with the goal of reducing the amount of overhead (string data size) when data is passed to JSCharting.
* @param properties - A comma delimited list of properties the data argument arrays map to.
* @param data - Data to map to the properties for each point. Example: ['Greg',50];
* @returns Returns an array of point config objects.
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-data/client-side/series-points/}
* @since 1.1
* @example var arrayOfPoints = JSC.pointsFromArray('name,y', [ ['Jan', 196], ['Feb', 178], ['Mar', 169] ])
*/
export function pointsFromArray(properties: string, data: [(string | number | Date)][]): JSCPointConfig[];
/**
* Series points property can take an object which allows a more efficient format for data transfer. This function can take this points object and expand it into an array of point config objects client-side if needed.
* @param pointsObj - Point object data to expand.
* @returns Returns an array of point config objects.
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-data/client-side/series-points/}
* @since 2.0
*/
export function parsePoints(pointsObj: any): JSCPointConfig[];
/**
* A static method used to get the colors of a specified palette.
* @param id - The name or index of the palette to get.
* @returns An array of colors
* @since 1.1
*/
export function getPalette(id?: (string | number)): JSCColorConfig[];
/**
* Generates a specified number of colors based on the given base color and range of HSL variations.
* @param base - A base color to use as a starting point.
* @param variations - A set of 0-1 values defining the range of variation of each HSL component in the resulting color palette.
* @param count - Number of color to create.
* @param sort - -1 = Random shuffling. 0 = Linear sort. 1 = Random seed.
* @returns An array of colors
* See Also:
* {@link https://jscharting.com/samples/Javascript_MapPaletteDesigner_Chart.htm}
* @since 1.4
*/
export function colorToPalette(base: JSCColorConfig, variations: Variations, count: number, sort: number): JSCColorConfig[];
/**
* Creates an instance of nest object.
* @returns A new instance of the nesting object.
* @since 2.7
*/
export function nest(): Nest;
/**
* Wraps the array.map() function.
* @param data - Array to iterate.
* @param iteratee - Iterates each item in the array.
* @returns An array with results of iteratee on each item.
* @since 2.8
*/
export function map(data: any, iteratee: ((args: any[]) => any)): any;
/**
* A stable sort utility that creates an array of items sorted in ascending order. The order is based on the result of each item running through each iteratee. Please note the array provided in the argument is not sorted.
* @param array - Array to iterate.
* @param iteratee - Iterates each item in the array.
* @returns A new array sorted in ascending order.
* @since 3.0
* @example JSC.sortBy(points, 'y');
<br>JSC.sortBy(items, 'attributes.age'); 
<br>JSC.sortBy(items, ['attributes.age','name']); 
<br>
*/
export function sortBy(array: any, iteratee?: any): any;
/**
* Provides a shortcut to the window.fetch() function or a polyfill when browser does not support it natively.
* @param fileName - Filename to load.
* @param callback - Callback.
* @returns A promise returned by fetch().
* @since 2.6
*/
export function fetch(fileName: string, callback?: any): Promise<any>;
/**
* A utility function to parse csv file content.
* @param text - Csv file content string.
* @param options - Csv parsing options
* @returns The original and parsed data including information about detected headers and data types.
* @since 2.6
* @example JSC.parseCsv('Name,Age
art,23') -> 
<br>{
<br>  &nbsp;&nbsp;raw: "Name,Age
art,23",
<br>  &nbsp;&nbsp;headers: [ [ "Name", "Age" ] ],
<br>  &nbsp;&nbsp;split: [ [ "art", "23" ] ],
<br>  &nbsp;&nbsp;data: [ [ "art", 23 ] ],
<br>  &nbsp;&nbsp;types: [ "string", "number" ]
<br>}
*/
export function parseCsv(text: string, options?: Options): ParseCsv;
/**
* Recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively.
* @param target - Object to merge sources into.
* @param sources - (...object) Sources to merge
* @param sources2 - (...object) Sources to merge
* @returns The result of merged objects.
* @since 2.7
*/
export function merge(target: Target, sources?: Sources, sources2?: Sources2): any;
/**
* Provides JSCharting label support for any DIV elements on a page. Supported features include microchart, and icon tag syntax.
* @param targetElement - Specifies the ID of the HTML element to which this chart is added, or the element object itself.
* @param labelText - String content to render in the targetElement.
* @param options - Label options.
* @since 2.7
* @example JSC.label("divID", "Microchart: &#x3C;chart type=column data=1,5,3,4&#x3E;")
*/
export function label(targetElement: (string | any), labelText: string, options?: JSCLabelConfig): void;
/**
* A utility math function to sum values of arrays or objects. Null values are ignored.
* @param array - Array of numbers of object to process.
* @param iterator - When used with an array of objects, it identifies a specific numeric property of each object to sum.
* @returns Numeric result of the calculation.
* @since 2.7
* @example JSC.sum( [{a: 5}, {a: 10}], 'a' ); // -> 15<br>JSC.sum( [{a: 5}, {a: 10}], v => v.a ); // -> 15<br>JSC.sum( [5, 10] ); // -> 15
*/
export function sum(array: (number[] | any[]), iterator?: (string | ((entry: any) => any))): number;
/**
* A utility math function to calculate the average of an array of numbers or objects. Null values are ignored.
* @param array - Array of numbers of object to process.
* @param iterator - When used with an array of objects, it identifies a specific numeric property of each object to use in the calculation.
* @returns Numeric result of the calculation.
* @since 2.7
* @example JSC.mean( [{a: 5}, {a: 10}], 'a' ); // -> 7.5<br>JSC.mean( [{a: 5}, {a: 10}], v => v.a ); // -> 7.5<br>JSC.mean( [5, 10] ); // -> 7.5
*/
export function mean(array: (number[] | any[]), iterator?: (string | ((entry: any) => any))): number;
/**
* A utility math function to calculate the minimum value of an array of numbers or objects. Null values are ignored.
* @param array - Array of numbers of object to process.
* @param iterator - When used with an array of objects, it identifies a specific numeric property of each object to use in the calculation.
* @returns Numeric result of the calculation.
* @since 2.7
* @example JSC.min( [{a: 5}, {a: 10}], 'a' ); // -> 5<br>JSC.min( [{a: 5}, {a: 10}], v => v.a ); // -> 5<br>JSC.min( [5, 10] ); // -> 5
*/
export function min(array: (number[] | any[]), iterator?: (string | ((entry: any) => any))): number;
/**
* A utility math function to calculate the minimum value of an array of numbers or objects. Null values are ignored.
* @param array - Array of numbers of object to process.
* @param iterator - When used with an array of objects, it identifies a specific numeric property of each object to use in the calculation.
* @returns Numeric result of the calculation.
* @since 2.7
* @example JSC.max( [{a: 5}, {a: 10}], 'a' ); // -> 10<br>JSC.max( [{a: 5}, {a: 10}], v => v.a ); // -> 10<br>JSC.max( [5, 10] ); // -> 10
*/
export function max(array: (number[] | any[]), iterator?: (string | ((entry: any) => any))): number;
/**
* Converts a string of comma separated values into JSON objects. The first rows can include property names or property names can be specified in the options columns property.
* @param csvText - File content of the comma separated values to convert.
* @param options - Options used when converting to JSON objects. Example: JSC.csv2Json("Date,Actual
1/1/2018,4535", {map: (d, i) => {return { date: d.Date, steps: d.Actual);}});
* @returns An array of JSON objects
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/}
* @since 2.7
*/
export function csv2Json(csvText: string, options?: any): any[];
/**
* Converts a string of tab separated values into JSON objects. The first rows can include property names or property names can be specified in the options columns property.
* @param tsvText - File content of the tab separated values to convert.
* @param options - Options used when converting to JSON objects.
* @returns An array of JSON objects
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/}
* @since 2.7
*/
export function tsv2Json(tsvText: string, options?: any): any[];
/**
* Converts a string of custom delimiter separated values into JSON objects. The first rows can include property names or property names can be specified in the options columns property.
* @param dsvText - File content of the custom delimiter separated values to convert.
* @param delimiter - The custom delimiter character.
* @param options - Options used when converting to JSON objects.
* @returns An array of JSON objects
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/}
* @since 2.7
*/
export function dsv2Json(dsvText: string, delimiter: string, options?: any): any[];
/**
* Converts an array of JSON objects into a comma separated values format string.
* @param items - An array of JSON objects
* @param options - Options used when converting to the delimiter separated value string.
* @returns The resulting comma separated values string.
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/}
* @since 2.7
*/
export function json2Csv(items: any[], options?: any): string;
/**
* Converts an array of JSON objects into a tab separated values format string.
* @param items - An array of JSON objects
* @param options - Options used when converting to the delimiter separated value string.
* @returns The resulting tab separated values string.
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/}
* @since 2.7
*/
export function json2Tsv(items: any[], options?: any): string;
/**
* Converts an array of JSON objects into a custom delimiter separated values format string.
* @param items - An array of JSON objects.
* @param delimiter - The custom delimiter character.
* @param options - Options used when converting to the delimiter separated value string.
* @returns The resulting custom delimiter separated values string.
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/}
* @since 2.7
*/
export function json2Dsv(items: any[], delimiter: string, options?: any): string;
/**
* Returns a promise indicating that all web fonts have been loaded.
* @param fonts - Font or font list to load
* @returns A promise returned when fonts are loaded.
* @since 2.9
*/
export function fontsReady(fonts: (string | string[])): Promise<any>;
/**
* Returns a promise indicating that all targets have been loaded.
* @param args - Font names or/and document object
* @returns A promise returned when all targets have been loaded.
* @since 2.9
*/
export function ready(args: any[]): Promise<any>;
/**
* A method that establishes chart option defaults that will apply to all subsequent charts.
* @param config - Default chart options that will be applied to all subsequent charts. Passing a null value will clear all default options.
* @returns The current default options.
* @since 2.8
*/
export function defaults(config: JSCChartConfig): JSCChartConfig;
/**
* Represents a chart JS object providing methods to manipulate and analyze the chart in real-time.
*/
export declare class Chart {

    /**
     * This is the constructor for creating a new chart object.
     * @param options - The chart configuration.
     * @param callback - A function to execute 
     * @return Chart object reference
     */
    constructor(options: JSCChartConfig, callback?: (c?: Chart) => void);

    /**
     * This is the constructor for creating a new chart object.
     * @param targetElement - The chart target element.
     * @param options - The chart configuration.
     * @param callback - A function to execute 
     * @return Chart object reference
     */
    constructor(targetElement: string, options: JSCChartConfig, callback?: (c?: Chart) => void);

    /**
    * A collection used to get/update/set series data and options.
    * @since 2.0
    * @example chart.series().points(p=>p.y>200).options({color:'red'}),
    */
    series: CollectionFactory<SeriesCollection, Series>;

    /**
    * A collection used to get/update/set annotations and options.
    * @since 2.0
    * @example chart.annotations.add( {label:{text:"labelText"}} ) - Adds an annotation.<br/>chart.annotations().options({fill:"none"}) - Set fill for all annotations to none.
    */
    annotations: CollectionFactory<Collection<Annotation>, Annotation>;

    /**
    * A collection used to get/update/set chartArea and options.
    * @since 2.0
    * @example chart.chartAreas(0) - Get the chartArea.
    */
    chartAreas: CollectionFactory<Collection<ChartArea>, ChartArea>;

    /**
    * A collection used to get and update axes on the chart.
    * @since 2.0
    * @example chart.axes( { prefix: "x" } ) - Get all X axes.<br/>chart.axes( "x" ) - Get the main X axis.
    */
    axes: CollectionFactory<AxisCollection, Axis>;

    /**
    * A collection legends on the chart.
    * @since 2.0
    */
    legends: CollectionFactory<LegendCollection, Legend>;

    /**
    * A collection used to get and update UI items  on the chart.
    * @since 2.0
    * @example chart.uiItems() - Get all UI Items.
    */
    uiItems: CollectionFactory<Collection<UiItem>, UiItem>;

    /**
    * Use this function to get a list of hierarchy paths, style the connector lines, and reset connector line styling. For example if you want to highlight a path to the root node in an organizational chart when hovering data points.
    * @param selector - You can select all branches from a point up the hierarchy, down the hierarchy, or between two points.
    * @param style - Line styling options to apply to the specified connector lines. If you do not provide line styling, lines will be reset.
    * @param updateOptions - By default line styling will avoid animation. Resetting line styles does not support animation. Animation is not recommended if updating line styles from point hover events.
    * @returns When you specify the selector argument, this function returns all paths resulting from the selector.
    * @remarks When you style connector lines using this function they will be rendered on top of data points. When styling is not set, or is reset, they are rendered beneath data points.
    * See Also:
    * {@link https://jscharting.com/documentation/#node=Home.Tutorials.hierarchyStyling}
    * @since 3.3
    * @example chart.connectors(['pointA', 'up'], {color: 'red'}); -> Styles all connector lines from pointA up the hierarchy.</br>chart.connectors(['pointA', 'up']); -> Reset all previously applied line styling from pointA up the hierarchy.</br>chart.connectors(); -> Reset all line styling previously applied by this function.</br>
    */
    connectors(selector?: any[], style?: JSCLineConfig, updateOptions?: JSCUpdateOptionsConfig): string[][];
    /**
    * Destroy chart and release resources.
    * @since 1.0
    */
    destroy(): void;
    /**
    * Function used to get and set chart options.
    * @param chartOptions - The setting to update on the chart.
    * @param updateOptions - Update options used when the chart redraws.
    * @returns The collection.
    * @remarks With no arguments, all options are returned.
    * @since 2.0
    */
    options(chartOptions?: (JSCChartConfig | string), updateOptions?: (JSCUpdateOptionsConfig | boolean)): JSCChartConfig;
    /**
    * Initialize and return a grid object that is connected to and displays chart data in the specified div element.
    * @param targetDiv - A string containing tokens and expression to evaluate.
    * @param options - Grid options.
    * @returns Returns a new grid object promise.
    * @since 2.8
    */
    toGrid(targetDiv: string, options?: JSCGridConfig): Promise<any>;
    /**
    * Takes a string with tokens and expressions and returns a processed string where tokens are replaced with calculated values. Tokens are evaluated based on data of all series (series Collection).
    * @param str - A string containing tokens and expression to evaluate.
    * @returns The resulting string after tokens are replaced with values and expressions are evaluated.
    * @remarks This method can be used to populate a template string with tokens that describe the data in this chart. Label expressions also enable inline formatting.
    * See Also:
    * {@link https://jscharting.com/tutorials/js-chart-labels/expressions-calculations/}
    * {@link https://jscharting.com/tutorials/js-chart-labels/token-reference/ | List of available label tokens.}
    * @example chart.replaceTokens('%sum') // returns a string with sum of chart data such as: '543'.
    */
    replaceTokens(str: string): string;
    /**
    * Returns the value of the specified token in its native data type. Tokens are evaluated based on data of all series (series Collection).
    * @param str - A string containing a single token to evaluate.
    * @returns The value of the specified token.
    * @remarks Only one token or expression should be used with this method.
    * See Also:
    * {@link https://jscharting.com/tutorials/js-chart-labels/token-reference/ | List of available label tokens.}
    * @since 1.1
    * @example chart.tokenValue('%sum') // returns a number with sum of chart data such as: 543.
    */
    tokenValue(str: string): number | Date | string | boolean;
    /**
    * Initiates the conversion of the chart SVG to an image file.
    * @param exportOptions - Export options.
    */
    exportImage(exportOptions: JSCExportOptionsConfig): void;
    /**
    * Sends the chart image to the printer.
    */
    print(): void;
    /**
    * Removes the chart and clears its memory. This method can be used when the chart is not required or is discarded to reduce memory usage.
    */
    dispose(): void;
    /**
    * Causes the chart to redraw.
    * @param updateOptions - Update options used when the chart redraws.
    * @remarks This should typically not be necessary as any updates will automatically redraw the chart. This can be used to force  chart redraw sooner than waiting for any additional data updates. The normal delay may be between 4 and 10 milliseconds.
    */
    redraw(updateOptions?: JSCUpdateOptionsConfig): void;
    /**
    * Returns an SVG image string of the chart.
    * @param options - Chart settings applied before the SVG is rendered.
    * @returns A string containing the SVG content of this chart image.
    */
    getSVG(options?: JSCChartConfig): string;
    /**
    * Specifies the chart zoom. Passing no parameters returns to the initial view. With calendar charts, passing a date will show the calendar item related to this date.
    * @param zoomConfig - Zooming configuration.
    * @param updateOptions - Options used when this chart is updating.
    * @returns Will return false if a provided point filter did not find any matches. Otherwise, the current view bbox is given.
    * See Also:
    * {@link https://jscharting.com/samples/Javascript_MapZoomTo_Chart.htm}
    * @since 2.1
    */
    zoom(zoomConfig: JSCZoomConfig, updateOptions?: JSCUpdateOptionsConfig): boolean | [number, number, number, number];
    /**
    * Options to manipulate the chart loading animation.
    * @param messageOrState - A message or loading state setting.
    * @param delay - The loading animation delay.
    * @since 2.8
    */
    loading(messageOrState: (string | boolean), delay?: number): void;
    /**
    * Returns the toolbar object.
    * @returns The toolbar object.
    * @since 2.8
    */
    toolbar(): Toolbar;
}
/**
* Represents a point on the chart providing properties and method that enable manipulating the point in real-time.
*/
export declare class Point {

    /**
    * A reference to the parent chart object.
    */
    chart: Chart;

    /**
    * The point's parent series JS object.
    */
    series: Series;

    /**
    * The point's color.
    */
    color: JSCColorConfig;

    /**
    * The point's name.
    */
    name: string;

    /**
    * The point's ID that was specified or generated internally. All points will have an ID based on either of these two methods.
    */
    id: string;

    /**
    * The point's x value.
    */
    x: number | Date | string;

    /**
    * The point's y value.
    */
    y: number;

    /**
    * The point's z value.
    * @since 1.1
    */
    z: number;

    /**
    * Function used to get and set series options.
    * @param pointOptions - The setting to update on the series.
    * @param updateOptions - Options used when this series is updating.
    * @returns Returns the point, or point options.
    * @remarks With no arguments, all options are returned.
    * @since 2.0
    */
    options(pointOptions?: (JSCPointConfig | string), updateOptions?: (JSCUpdateOptionsConfig | boolean)): Point | any;
    /**
    * Removes this point from the chart in real-time.
    * @param updateOptions - Options used when this point is removed.
    */
    remove(updateOptions?: JSCUpdateOptionsConfig): void;
    /**
    * Toggles or sets the select state for this point depending on the specified argument options.
    * @param isSelected - Specifies whether the point is selected. When not set, or if set with the value of undefined, the selected state toggles.
    * @param accumulate - When true, the point is selected without affecting other point selection state. When false, all other points are deselected.
    */
    select(isSelected?: boolean, accumulate?: boolean): void;
    /**
    * Zooms this point into view.
    * @param updateOptions - Options used when this point zoom occurs.
    * @since 2.1
    */
    zoomTo(updateOptions?: JSCUpdateOptionsConfig): void;
    /**
    * Evaluates the specified string containing point tokens and expressions such as "%name  %yValue" against this data point and returns the result. (See token reference below for a list of available tokens)
    * @param str - A string containing tokens and expression to evaluate.
    * @returns The resulting string after tokens are replaced with values and expressions are evaluated.
    * @remarks This method can be used to populate a template string with tokens that describe this point. Label expressions also enable inline formatting.
    * See Also:
    * {@link https://jscharting.com/tutorials/js-chart-labels/expressions-calculations/}
    * {@link https://jscharting.com/tutorials/js-chart-labels/token-reference/ | List of available label tokens}
    * {@link https://jscharting.com/samples/Javascript_HoverSideInfo_Chart.htm}
    */
    replaceTokens(str: string): string;
    /**
    * Returns the value of the specified token associated with this data point in its native data type. For example, if the token represents a number, the result of this function will be a number. (See token reference below for a list of available tokens)
    * @param str - A string containing a single token to evaluate.
    * @returns The value of the specified token.
    * @remarks Only one token or expression should be used with this method.
    * See Also:
    * {@link https://jscharting.com/tutorials/js-chart-labels/token-reference/ | List of available label tokens}
    * @since 1.1
    * @example pointObj.tokenValue('%percentOfSeries')
    */
    tokenValue(str: string): number | Date | string | boolean;
    /**
    * Returns a collection of hierarchical parent points for the current point.
    * @returns A collection of parent points.
    * @since 3.3
    * @example point.getParents().options({color:'red'})
    */
    getParents(): CollectionFactory<Collection<Point>, Point>;
    /**
    * Returns a collection of hierarchical child points for the current point.
    * @returns A collection of child points.
    * @since 3.3
    * @example point.getChildren().options({color:'red'})
    */
    getChildren(): CollectionFactory<Collection<Point>, Point>;
}
/**
* Represents a series on the chart by providing properties and methods to manipulate and measure it in real-time.
*/
export declare class Series {

    /**
    * The series ID that was specified or generated internally. All series will have an ID based on either of these two methods.
    */
    id: string;

    /**
    * The series' color.
    */
    color: JSCColorConfig;

    /**
    * The series' name.
    */
    name: string;

    /**
    * A reference to the parent chart JS object.
    */
    chart: Chart;

    /**
    * Toggles or sets series visibility.
    * @param visible - Visibility setting.
    * @returns The returned series.
    */
    visible(visible?: boolean): Series;
    /**
    * A collection used to get, update, and add points to this series.
    * @remarks You can add multiple points to a series at once by passing an array of point options to series.points.add([...])
    * See Also:
    * {@link https://jscharting.com/tutorials/js-chart-api-features/functional-programming/ | Examples of point collection usage.}
    * {@link https://jscharting.com/documentation/#node=Home.Tutorials.hierarchyStyling | Hierarchical point selection.}
    * @since 2.0
    * @example chart.series(0).points().options({color: 'red'}) // All points in the first series become red.
    */
    points: CollectionFactory<Collection<Point>, Point>;

    /**
    * Function used to get and set series options.
    * @param seriesOptions - The setting to update on the series.
    * @param updateOptions - Options used when this series is updating.
    * @returns Returns the series, or series options.
    * @remarks With no arguments, all options are returned.
    * @since 2.0
    */
    options(seriesOptions?: (JSCSeriesConfig | string), updateOptions?: (JSCUpdateOptionsConfig | boolean)): Series | any;
    /**
    * Sets or toggles the visibility of this series.
    * @param isShown - Specifies whether the series is visible. When not set, the visible state toggles.
    * @returns Value that indicates whether the series is visible or not.
    */
    show(isShown?: boolean): boolean;
    /**
    * Removes this series from the chart.
    * @param updateOptions - Update options used when this series is removed.
    */
    remove(updateOptions?: JSCUpdateOptionsConfig): void;
    /**
    * Sets or toggles the series "select" state. Selecting a series adds to the list of selected series.
    * @param isSelected - Specifies whether the series is selected. When not set, the selected state toggles.
    * @remarks Selected series and selected points are separate states. A series that is selected does not mean all the points within the series are selected.
    */
    select(isSelected?: boolean): void;
    /**
    * Zooms this series into view. (Mapping/Calendar)
    * @param updateOptions - Options used when this series zoom occurs.
    * @since 2.1
    */
    zoomTo(updateOptions?: JSCUpdateOptionsConfig): void;
    /**
    * Evaluates the specified string containing series tokens and expressions such as "%name  %sum" against this data series and returns the result. (See token reference below for a list of available tokens)
    * @param str - A string containing tokens and expression to evaluate.
    * @returns The resulting string after tokens are replaced with values and expressions are evaluated.
    * @remarks This method can be used to populate a template string with tokens that describe this point. Label expressions also enable inline formatting.
    * See Also:
    * {@link https://jscharting.com/tutorials/js-chart-labels/expressions-calculations/}
    * {@link https://jscharting.com/tutorials/js-chart-labels/token-reference/ | List of available label tokens.}
    */
    replaceTokens(str: string): string;
    /**
    * Returns the value of the specified token associated with this data series in its native data type. For example, if the token represents a number, the result of this function will be a number. (See token reference below for a list of available tokens)
    * @param str - A string containing a single token to evaluate.
    * @returns The value of the specified token.
    * @remarks Only one token or expression should be used with this method.
    * See Also:
    * {@link https://jscharting.com/tutorials/js-chart-labels/token-reference/ | List of available label tokens}
    * @since 1.1
    * @example seriesObj.tokenValue('%sum')
    */
    tokenValue(str: string): number | Date | string | boolean;
    /**
    * Returns the interpolated y value based on a given x value.
    * @param x - The x value to match to a y value.
    * @returns The interpolated y value.
    * See Also:
    * {@link https://jscharting.com/samples/Javascript_ZoomSelection_Chart.htm}
    * @since 2.1
    */
    yAt(x: (string | number | Date)): number;
}
/**
* The nest object provides a mechanism to define a list of operations that can be used to arrange an array of data objects into a nested hierarchy that maps to the chart data hierarchy of series, x values, and y values.
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-data/client-side/data-nesting/}
* @since 2.7
*/
export declare class Nest {

    /**
    * Specifies a key by which data is grouped and nested into a data hierarchy. A single key() call will designate the property as point x values. A second key call will designate the properties as series name and point x values respectively.
    * @param iteratee - Specifies a key name or function key getter by which data is grouped and nested.
    * @returns The nest object instance.
    * @since 2.7
    */
    key(iteratee: (((entry: any) => any) | Iteratee | string)): Nest;
    /**
    * A property name or function used to summarize a values of data entries for each resulting grouping. Using a property name will map the grouping into point y values.
    * @param iteratee - Iteratee is invoked on each grouping with (collection) array of data entries.
    * @param calculation - The calculation applied when the rollup() call results in an array of numbers.
    * @returns The nest object instance.
    * @since 2.7
    */
    rollup(iteratee: (((entry: any) => any | string) | string), calculation?: ("sum" | "average" | "min" | "max")): Nest;
    /**
    * Defines a function that returns the resulting point objects.
    * @param iteratee - Iteratee is invoked with key and values for each data point grouping and can be used to customize how values are applied to point properties.
    * @returns The nest object instance.
    * @since 2.7
    */
    pointRollup(iteratee: ((key: any, values: any[]) => any)): Nest;
    /**
    * Applies the nesting call chain on the specified data entries generating an array of series. The result can be applied to the chart series config property directly.
    * @param data - An array of data entries to process.
    * @returns An array of series given the specified data.
    * @since 2.7
    */
    series(data: any[]): Series[];
    /**
    * Applies the nesting call chain on the specified data entries generating an array of points. Should only be used when the nesting call chain contains a single key() call which generates a single series.
    * @param data - An array of data entries to process.
    * @returns An array of points given the specified data.
    * @since 2.7
    */
    points(data: any[]): Point[];
    /**
    * Applies the nesting call chain on the specified data entries and returns the raw nested data without converting it to series or point configurations.
    * @param data - An array of data entries to process.
    * @returns Direct result of the given data and nesting.
    * @since 2.7
    */
    entries(data: any[]): any[];
}
/**
* Represents a grid JS object providing methods to manipulate the grid in real-time.
* @since 2.8
*/
export declare class Grid {

    /**
    * Function used to get and set chart options.
    * @param gridOptions - The setting to update on the chart.
    * @returns The grid instance or specified grid option.
    * @remarks With no arguments, all options are returned.
    * @since 2.8
    */
    options(gridOptions?: (JSCGridConfig | string)): any;
    /**
    * Removes the chart and clears its memory. This method can be used when the chart is not required or is discarded to reduce memory usage.
    * @since 2.8
    */
    dispose(): void;
}
/**
* Represents an axis JS object providing methods to manipulate and measure the axis.
*/
export declare class Axis {

    /**
    * A unique ID provided by user of generated randomly.
    * @since 2.0
    */
    id: string;

    /**
    * A collection used to get/update/set axis markers.
    * @since 2.0
    * @example chart.axes('x').markers.add( {value:[5,10],label:{text:"labelText"}} ) - Adds an axis marker.<br/>chart.axes('x').markers().options({fill:"none"}) - Modifies options for all markers on this axis.
    */
    markers: CollectionFactory<Collection<AxisMarker>, AxisMarker>;

    /**
    * Function used to get and set axis options.
    * @param axisOptions - The setting to update on the axis.
    * @param updateOptions - Options used when this axis is updating.
    * @returns The axis instance or specified axis option.
    * @remarks With no arguments, all options are returned.
    * @since 2.0
    */
    options(axisOptions?: (JSCAxisConfig | string), updateOptions?: (JSCUpdateOptionsConfig | boolean)): any;
    /**
    * Makes the axis zoom to the specified range.
    * @param min - The minimum value of the range to zoom.
    * @param max - The maximum value of the range to zoom.
    * @param updateOptions - Options used when this axis is updating.
    * @remarks When called without arguments, the axis will zoom out.
    * @since 2.0
    */
    zoom(min?: (number | string), max?: (number | string), updateOptions?: JSCUpdateOptionsConfig): void;
    /**
    * Gets range information of this axis.
    * @returns Axis range information.
    * @remarks A range can be set for a category scale, however, numbers are used to represent each axis tick starting with 0.
    * See Also:
    * {@link https://jscharting.com/samples/Javascript_AxisInteractiveExtremes_Chart.htm}
    */
    getRange(): GetRange;
    /**
    * When used with category axes, it returns an array of category names. Otherwise, it returns undefined
    * @returns Axis categories.
    * @since 2.0
    */
    getCategories(): string[];
}
/**
* A chartArea object.
* @since 2.8
*/
export declare class ChartArea {

    /**
    * Gets or sets the specified options.
    * @param itemOptions - ChartArea options to set.
    * @param updateOptions - Options used when this chartArea is updating.
    * @returns The chartArea instance or specified chartArea option.
    * @since 2.8
    */
    options(itemOptions?: (JSCChartAreaConfig | string), updateOptions?: (JSCUpdateOptionsConfig | boolean)): ChartArea | any;
    /**
    * Removes and destroys the chartArea.
    * @since 2.8
    */
    remove(): void;
    /**
    * Binds an event handler to chartArea events.
    * @param event - The event name.
    * @param callback - The event handler.
    * @since 2.8
    */
    on(event: string, callback: ((args: any[]) => any)): void;
}
/**
* An annotation object.
* @since 2.8
*/
export declare class Annotation {

    /**
    * Gets or sets annotation options.
    * @param itemOptions - Annotation options to set.
    * @param updateOptions - Options used when this annotation is updating.
    * @returns The annotation instance or specified annotation option.
    * @since 2.8
    */
    options(itemOptions?: (JSCAnnotationConfig | string), updateOptions?: (JSCUpdateOptionsConfig | boolean)): Annotation | any;
    /**
    * Removes and destroys the annotation.
    * @since 3.0
    */
    remove(): void;
}
/**
* UiItem object with methods to update and remove it.
* @since 2.8
*/
export declare class UiItem extends Annotation {

    /**
    * Child items collection.
    * @since 2.8
    */
    items: CollectionFactory<Collection<UiItem>, UiItem>;

    /**
    * Toggles or sets the item visibility.
    * @param visible - The visibility setting.
    * @since 2.8
    */
    visible(visible: boolean): void;
    /**
    * Triggers the item's change event. For example if the item value is updated programmatically, which does not trigger the event.
    * @remarks This will trigger the event even if the value has not changed.
    * @since 3.3
    */
    change(): void;
}
/**
* Toolbar object with methods to update and remove it.
* @since 2.8
*/
export declare class Toolbar extends UiItem {
}
/**
* Legend object with methods to update and remove it.
* @since 2.8
*/
export declare class Legend {

    /**
    * Gets or sets the specified options.
    * @param itemOptions - Legend options to set.
    * @param updateOptions - Options used when this legend is updating.
    * @returns The legend instance or specified legend option.
    * @since 2.8
    */
    options(itemOptions?: (JSCLegendConfig | string), updateOptions?: (JSCUpdateOptionsConfig | boolean)): Legend | any;
    /**
    * Removes and destroys the legend.
    * @since 2.8
    */
    remove(): void;
}
/**
* AxisTick object with methods to update and remove it.
* @since 2.8
*/
export declare class AxisTick {

    /**
    * Gets or sets the specified options.
    * @param itemOptions - axisTick options to set.
    * @param updateOptions - Options used when this axisTick is updating.
    * @returns The axisTick instance or specified legend option.
    * @since 2.8
    */
    options(itemOptions?: (JSCAxisTickConfig | string), updateOptions?: (JSCUpdateOptionsConfig | boolean)): any;
    /**
    * Removes and destroys the axisTick.
    * @since 2.8
    */
    remove(): void;
}
/**
* AxisMarker object with methods to update and remove it.
* @since 2.8
*/
export declare class AxisMarker {

    /**
    * Gets or sets the specified options.
    * @param itemOptions - AxisMarker options to set.
    * @param updateOptions - Options used when this axisMarker is updating.
    * @returns The axisMarker instance or specified axisMarker option.
    * @since 2.8
    */
    options(itemOptions?: (JSCAxisMarkerConfig | string), updateOptions?: (JSCUpdateOptionsConfig | boolean)): AxisMarker | any;
    /**
    * Removes and destroys the axisMarker.
    * @since 2.8
    */
    remove(): void;
}
/**
* LegendEntry object with methods to update and remove it.
* @since 2.8
*/
export declare class LegendEntry {

    /**
    * Gets or sets the specified options.
    * @param itemOptions - LegendEntry options to set.
    * @param updateOptions - Options used when this legendEntry is updating.
    * @returns The legendEntry instance or specified legendEntry option.
    * @since 2.8
    */
    options(itemOptions?: (JSCLegendEntryConfig | string), updateOptions?: (JSCUpdateOptionsConfig | boolean)): LegendEntry | any;
    /**
    * Removes and destroys the legendEntry.
    * @since 2.8
    */
    remove(): void;
}
/**
* Initializes and returns a new instance of the Promise object.
* @since 2.8
*/
export declare class Promise<T>  {

    /**
    * The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
    * @param onFulfilled - A Function called if the Promise is fulfilled.
    * @param onRejected - A Function called if the Promise is rejected.
    * @returns A Promise object.
    * @since 2.8
    */
    then(onFulfilled: ((args: any[]) => any), onRejected?: ((args: any[]) => any)): Promise<T>;
    /**
    * The catch() method returns a Promise and deals with rejected cases only.
    * @param onRejected - A Function called if the Promise is rejected.
    * @returns A Promise object.
    * @since 2.8
    */
    catch(onRejected: ((args: any[]) => any)): Promise<T>;
}
/**
* Provides a mechanism to get a specific item, to create a collection of selected items, or to modify the list of items in the base collection.
* @since 2.8
*/
export declare interface CollectionFactory<T, U> {

    /**
    * Creates a collection based on the specified filter or object with properties to match.
    * @param predicate - Select specific items within this collection.
    * @returns A collection of items.
    * @since 2.8
    * @example chart.axes({ prefix: 'x' });
    */
    (predicate?: (((args: any[]) => any) | Predicate)): T;
    /**
    * Returns a specific item of the collection based on the ID, name, numeric index or other identifying strings.
    * @param id - The identifier of a specific item in the collection.
    * @returns A collection of items.
    * @since 2.8
    * @example chart.axes("x");  -> The main X axis even if multiple X axes exist
    */
    (id: (string | number)): U;
    /**
    * This method adds an item with the specified options and returns a new collection.
    * @param itemOptions - An item to add to the collection. The series.points.add() functions allows adding of items at once.
    * @param updateOptions - The update options used when adding the item.
    * @returns A collection of items.
    * @since 2.8
    * @example chart.series.add({seriesOptions})
    */
    add(itemOptions: any, updateOptions?: any): T;
    /**
    * Modifies the collection using an array.splice() function and returns a new collection.
    * @param index - Index at which to add the item.
    * @param delCount - Number of items to delete at this index before adding the item.
    * @param itemOptions - The function invoked on each item to get the comparable value to sort by. The item is passed in the first argument of this function.
    * @returns A collection of items.
    * @remarks Not all collections support this function.
    * @since 2.0
    * @example chart.series.splice( 1, 0, {seriesOptions})
    */
    splice(index: number, delCount: number, itemOptions: ItemOptions): T;
}
/**
* Wraps a list of items and provides methods to simultaneously update all items in the collection.
* @since 2.0
*/
export declare class Collection<T>  {

    /**
    * Iterates over items in this collection and returns the first item the predicate returns truthly for.
    * @param predicate - The predicate that must match or return truthly.
    * @returns First item the predicate returns truthly for.
    * @since 2.0
    * @example chart.series().find( predicate )
    */
    find(predicate: (((args: any[]) => any) | any)): T;
    /**
    * Iterates over each item in this collection and invokes iteratee for each item.
    * @param iteratee - The function invoked on each iteration.
    * @returns Returns the collection.
    * @since 2.0
    * @example chart.series().each( (series) => { ... } )
    */
    each(iteratee: ((arg0: T) => any)): Collection<T>;
    /**
    * Iterates over each item in this collection and returns an array of results from iteratee.
    * @param iteratee - The function invoked on each iteration.
    * @returns Array of items resulting from running iteratee on each original item.
    * @since 2.1
    * @example chart.series().points().map( p => p.x); ->  returns an array of x values
    */
    map(iteratee: ((args: any[]) => any)): any[];
    /**
    * Creates an array of items, sorted in ascending order based on the results of running each item through each iteratee.
    * @param iteratee - The function invoked on each item to get the comparable value to sort by.
    * @returns Returns the collection.
    * @since 2.0
    * @example chart.series().sortBy( s => s.name ).each(console.log)
    */
    sortBy(iteratee: ((arg0: T) => any)): Collection<T>;
    /**
    * Creates an array of items in reverse order.
    * @returns Returns the collection.
    * @since 2.0
    * @example chart.series().reverse().each(console.log)
    */
    reverse(): Collection<T>;
    /**
    * Call collection items remove method and returns current collection.
    * @param updateOptions - The update options which are passed to items remove method.
    * @returns Returns the collection.
    * @since 2.8
    * @example chart.series().remove(false); -> Removes all series from the chart
    */
    remove(updateOptions?: any): Collection<T>;
}
/**
* Wraps an array of axis objects to provide a simpler way to get/set items and options.
* @since 2.8
*/
export declare class AxisCollection extends Collection<Axis> {

    /**
    * Returns a collection of axisMarkers.
    * @since 2.8
    * @example chart.axes().markers()
    */
    markers: CollectionFactory<Collection<AxisMarker>, AxisMarker>;

    /**
    * Returns a collection of axisTick objects.
    * @since 2.8
    * @example chart.axes().ticks()
    */
    ticks: CollectionFactory<Collection<AxisTick>, AxisTick>;
}
/**
* Wraps an array of series items to provide a simpler way to get/set items and options.
* @since 2.8
*/
export declare class SeriesCollection extends Collection<Series> {

    /**
    * Returns a collection of points.
    * @since 2.8
    * @example chart.series().points()
    */
    points: CollectionFactory<Collection<Point>, Point>;
}
/**
* Wraps an array of legend items to provide a simpler way to get/set items and options.
* @since 2.8
*/
export declare class LegendCollection extends Collection<Legend> {

    /**
    * Returns a collection of legendEntry objects.
    * @since 2.8
    * @example chart.legends().entries()
    */
    entries: CollectionFactory<Collection<LegendEntry>, LegendEntry>;
}
/**
* Describes the type of each individual corner of the box.
* @since 2.0
*/
export declare type Corners = Corners_object | [("square" | "cut" | "round"), ("square" | "cut" | "round"), ("square" | "cut" | "round"), ("square" | "cut" | "round")] | string;
export declare interface Corners_object {

    /**
     * Top left corner type.
     */
    topLeft?: ("square" | "cut" | "round");

    /**
     * Top right corner type.
     */
    topRight?: ("square" | "cut" | "round");

    /**
     * Bottom right corner type.
     */
    bottomRight?: ("square" | "cut" | "round");

    /**
     * Bottom left corner type.
     */
    bottomLeft?: ("square" | "cut" | "round");
    [any: string]: any;
}

/**
* Visual properties of the background box surrounding the chart image.
*/
export declare interface Box {

    /**
     * Outline surrounding the chart image.
     */
    outline?: JSCOutlineConfig;

    /**
     * Corner radius of the box surrounding the chart.
     */
    radius?: number;

    /**
     * Color of the box surrounding the chart image. Effectively the chart background color.
     */
    fill?: JSCFillConfig;

    /**
     * Space between box edges and the content in pixels.
     * @since 2.0
     */
    padding?: JSCMarginConfig;

    /**
     * Describes the type of each individual corner of the box.
     * @since 2.0
     */
    corners?: Corners | [("square" | "cut" | "round"), ("square" | "cut" | "round"), ("square" | "cut" | "round"), ("square" | "cut" | "round")] | string;
    [any: string]: any;
}

/**
* Default box properties that apply to virtually all box visuals on the chart such as annotations, legend, etc. Most boxes on the chart use the boxVisible:false setting, which can be globally reverted through this property.
* @since 2.5
*/
export declare interface DefaultBox {

    /**
     * Outline options.
     */
    outline?: JSCOutlineConfig;

    /**
     * Corner radius of the box default chart box style.
     */
    radius?: number;

    /**
     * Fill of the default chart box style.
     */
    fill?: JSCFillConfig;

    /**
     * Whether the annotation box is visible. Setting this property to false leaves only the annotation label visible. This property offers a shortcut to hide the annotation background box with one setting.
     * @def true
     */
    boxVisible?: boolean;
    [any: string]: any;
}

/**
* Chart and chart area specific events.
*/
export declare interface ChartEvents {

    /**
     * Fires when the chartArea is clicked.
     * @remarks In the function, the "this" keyword refers to the chart object. An event argument is passed to the specified function. It contains  e.xAxis & e.yValue properties which are arrays of objects with axis and value properties. The value property refers to the axis value at the clicked position. e.yAxis[0].axis and e.xAxis[0].axis refer to the primary axes.
     * @inline true
     */
    click?: JSCEventHandlerConfig;

    /**
     * Fires when a series is added to the chart.
     * @remarks In the function, the "this" keyword refers to the chart object. An event argument is passed to the specified function. The e.options property contains info about the series that was added to the chart. Returning false prevents the series from being added.
     * @inline true
     */
    addSeries?: JSCEventHandlerConfig;

    /**
     * Fires when the chart is finished loading.
     * @remarks In the function, the "this" keyword refers to the chart object. An event argument is passed to the specified function.
     * @inline true
     */
    load?: JSCEventHandlerConfig;

    /**
     * Fires when the chart redraws.
     * @remarks In the function, the "this" keyword refers to the chart object. An event argument is passed to the specified function.
     * @inline true
     */
    redraw?: JSCEventHandlerConfig;

    /**
     * Fires when an area of the chart is selected for zooming.
     * @remarks In the function, the "this" keyword refers to the chart object. An event argument is passed to the specified function. It contains  e.xAxis & e.yValue properties which are arrays of objects with axis, min and max properties. The min and max properties refers to the axis values of the selected area. e.yAxis[0].axis and e.xAxis[0].axis refer to the primary axes.
     * @inline true
     */
    selection?: JSCEventHandlerConfig;

    /**
     * Fires when chart area selection values change active.
     * @remarks In the function, the "this" keyword refers to the chart object. An event argument is passed to the specified function. It contains  e.xAxis & e.yValue properties which are arrays of objects with axis, min and max properties. The min and max properties refers to the axis values of the selected area. e.yAxis[0].axis and e.xAxis[0].axis refer to the primary axes.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_ZoomSelection_Chart.htm}
     * @since 2.1
     * @inline true
     */
    selecting?: JSCEventHandlerConfig;

    /**
     * Fires when a chart zoom is completed.
     * @remarks In the function, the "this" keyword refers to the chart object. An event argument is passed to the specified function. It contains axes ranges which are objects with min, max and range properties of the selected area.
     * @inline true
     */
    zoomed?: JSCEventHandlerConfig;

    /**
     * Fires when a chart scroll is completed.
     * @remarks In the function, the "this" keyword refers to the chart object. An event argument is passed to the specified function. It contains axes ranges which are objects with min, max and range properties of the selected area.
     * @inline true
     */
    scrolled?: JSCEventHandlerConfig;

    /**
     * Fires when mouse cursor enters the chartArea.
     * @remarks In the function, the "this" keyword refers to the chart object. An event argument is passed to the specified function.
     * @inline true
     */
    mouseOver?: JSCEventHandlerConfig;

    /**
     * Fires when mouse cursor exits the chartArea.
     * @remarks In the function, the "this" keyword refers to the chart object. An event argument is passed to the specified function.
     * @inline true
     */
    mouseOut?: JSCEventHandlerConfig;

    /**
     * Fires when the selected points change.
     * @remarks In the function, the "this" keyword refers to the chart object. An array of selected points is passed to the function as an argument.
     * @since 3.0
     * @inline true
     */
    pointSelectionChanged?: JSCEventHandlerConfig;

    /**
     * Fires when the selected series change.
     * @remarks In the function, the "this" keyword refers to the chart object. An array of selected series is passed to the function as an argument.
     * @since 3.0
     * @inline true
     */
    seriesSelectionChanged?: JSCEventHandlerConfig;

    /**
     * Fires before the chart is printed or exported.
     * @remarks In the function, the "this" keyword refers to the chart object.
     * @since 3.0
     * @inline true
     */
    beforeExport?: JSCEventHandlerConfig;

    /**
     * Fires before the chart is printed or exported.
     * @remarks In the function, the "this" keyword refers to the chart object.
     * @since 3.0
     * @inline true
     */
    afterExport?: JSCEventHandlerConfig;
    [any: string]: any;
}

/**
* The base object defines map layers that are used in the background.
*/
export declare interface Base {

    /**
     * A list of comma delimited map codes or geoJSON/topoJSON files. Map property filters can also be used if a reference layer is defined.
     * See Also:
     * {@link https://jscharting.com/tutorials/types/js-map-chart/maps-mapcodes/}
     */
    layers?: string;

    /**
     * The series styling for base map layers.
     */
    series?: JSCSeriesConfig;
    [any: string]: any;
}

/**
* Accepts a projection name, projection options or bool value. When true (default), the standard mercator projection is applied to the map.
* @since 2.1
*/
export declare type Projection = boolean | string | Projection_object;
export declare interface Projection_object {

    /**
     * Projection to use.
     */
    type?: ("none" | "mercator" | "lambertConformalConic" | "lambertconformalconic" | "lambertAzimuthalEqualArea" | "lambertazimuthalequalarea" | "stereographic" | "orthographic");

    /**
     * Projection origin point.
     */
    point?: [number, number];

    /**
     * Defines standard parallels of related projection.
     */
    parallels?: ([number] | [number, number]);
    [any: string]: any;
}

/**
* Map chart type related settings.
* See Also:
* {@link https://jscharting.com/tutorials/types/js-map-chart/}
* @since 2.1
*/
export declare interface Mapping {

    /**
     * The base object defines map layers that are used in the background.
     */
    base?: Base;

    /**
     * A list of comma delimited map codes or geoJSON/topoJSON files that are loaded into memory but not shown on the chart by default. This is useful when a series is built based on map features in memory.
     * See Also:
     * {@link https://jscharting.com/tutorials/types/js-map-chart/maps-mapcodes/}
     */
    referenceLayers?: string;

    /**
     * Defines a maximum zoom limit as a percent where 1 is 100%. A value of 5 means the chart can only zoom in to a maximum of 500% of original size.
     * @since 2.1
     */
    zoomLimit?: number;

    /**
     * Accepts a projection name, projection options or bool value. When true (default), the standard mercator projection is applied to the map.
     * @since 2.1
     */
    projection?: boolean | string | Projection;
    [any: string]: any;
}

/**
* Styling options for the axis line.
*/
export declare interface Line {

    /**
     * Outline color.
     */
    color?: JSCColorConfig;

    /**
     * Line dash style
     * @since 1.4
     */
    dashStyle?: ("Solid" | "solid" | "ShortDash" | "shortdash" | "ShortDot" | "shortdot" | "ShortDashDot" | "shortdashdot" | "ShortDashDotDot" | "shortdashdotdot" | "Dot" | "dot" | "Dash" | "dash" | "LongDash" | "longdash" | "DashDot" | "dashdot" | "DashDotDot" | "dashdotdot" | "LongDashDot" | "longdashdot" | "LongDashDotDot" | "longdashdotdot");

    /**
     * Outline width
     */
    width?: number;

    /**
     * Enables and configures options for visual  axis line gaps at tick positions. Specifying an empty object for this property will enable the feature.
     * @since 2.5
     */
    breaks?: JSCLineBreaksConfig;

    /**
     * Used with radial and circular charts. When true, the axis line will render on top of data. If set to false explicitly, the line will render behind gridlines.
     * @since 2.5
     */
    onTop?: boolean;

    /**
     * Opacity of this line. 0 = transparent, 1 = solid.
     * @since 2.0
     */
    opacity?: number;

    /**
     * Specifies whether the line is visible.
     * @since 2.5
     */
    visible?: boolean;

    /**
     * Line cap options that provide control over line cap shapes such as arrows. The 'arrow' line cap type is a specialized shape that is available in addition to other shape types.
     * @since 2.8
     */
    caps?: JSCLineCapsConfig;
    [any: string]: any;
}

/**
* Scale range including min, max, and padding.
* @since 1.1
*/
export declare type Range = Range_object | [(number | Date | string), (number | Date | string)];
export declare interface Range_object {

    /**
     * Specifies the minimum value of this axis.
     */
    min?: number | Date | string;

    /**
     * Specifies the maximum value of this axis.
     */
    max?: number | Date | string;

    /**
     * Axis scale padding amount. Pads the data range by this amount to leave space between data and axis edges.
     * @remarks If padding and a min or max value are set, the min and max values will be used instead of padding.
     */
    padding?: number;
    [any: string]: any;
}

/**
* Defines the styling options for how scale breaks are rendered.
* @since 2.7
*/
export declare interface DefaultBreak {

    /**
     * The scale break type.
     * @remarks The 'zigzag' and 'gap' types clip the chartArea at the scale break positions. The 'line' type simply draws a line on top of the scale break position. The 'line' type can be used to create seamless scale breaks by setting the line width to 0. This is the same as using the 'hidden' break type.
     */
    type?: ("zigzag" | "gap" | "line" | "hidden");

    /**
     * Additional scale breaks styling options of the break line.
     */
    line?: any;
    [any: string]: any;
}

/**
* Scale breaks as an array of break ranges, or automatic settings.
* @since 1.1
*/
export declare type Breaks = Breaks_object | ([(number | Date), (number | Date)][] | JSCCalendarPatternConfig[]);
export declare interface Breaks_object {

    /**
     * The maximum number of automatic scale breaks generated for this axis.
     */
    limit?: number;
    [any: string]: any;
}

/**
* Scale related settings such as intervals, range and the like.
* @since 1.1
*/
export declare interface Scale {

    /**
     * Specifies the minimum axis range that can be zoomed.
     */
    zoomLimit?: number | JSCTimeIntervalConfig;

    /**
     * Specifies the major axis tick intervals.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_AxisIntervals_Chart.htm}
     */
    interval?: number | JSCTimeIntervalConfig;

    /**
     * The minimum interval the axis will automatically consider. For example, setting a value of 1 will prevent intervals with decimal places such as .5, 1.5.
     * @since 2.9
     */
    minInterval?: number | JSCTimeIntervalConfig;

    /**
     * Specifies the minor axis tick intervals.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_AxisIntervals_Chart.htm}
     */
    minorInterval?: number | JSCTimeIntervalConfig | string;

    /**
     * Sets your desired number of automatically generated numeric and time scale axis ticks. This setting can be used to decrease or increase the number of automatically generated ticks to the closest count that fits the data which the system will automatically select. The default setting for numeric and time scale ticks are 9 and 10 respectively.
     * @remarks With numeric scales this limit works best with 3 or more. With time scales, 5 or more works best. Manually setting an interval overrides this setting.
     * @since 3.4
     */
    maxTickCount?: number;

    /**
     * Indicates whether the axis scale is inverted.
     */
    invert?: boolean;

    /**
     * Scale range including min, max, and padding.
     * @since 1.1
     */
    range?: Range | [(number | Date | string), (number | Date | string)];

    /**
     * Defines the styling options for how scale breaks are rendered.
     * @since 2.7
     */
    defaultBreak?: DefaultBreak;

    /**
     * Scale breaks as an array of break ranges, or automatic settings.
     * @since 1.1
     */
    breaks?: Breaks | ([(number | Date), (number | Date)][] | JSCCalendarPatternConfig[]);

    /**
     * ID of a specific axis to sync its range with. By default, extra axes will sync with the main axis of the same prefix (x, y, z...). Using a value of "none" will prevent binding to the main axis, and it will prevent showing the axis if the scale_range value is set. In effect, this "none" setting makes the axis revert to v2.9 and earlier behavior.
     * @remarks This is useful with unit conversion where two axes show the same scale but in different units. An axis not associated with data can be synced with another axis. Or two axes both with data can be set to show the same range.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_AxisShadowingTime_Chart.htm}
     */
    syncWith?: string;

    /**
     * Specifies the axis {@link https://jscharting.com/documentation/#node=Home.API.json.Enums.scale | scale} enum.
     * @remarks If a time scale is specified for the X axis, the chart will attempt to interpret the data x values as dates.
     */
    type?: ("auto" | "time" | "stacked" | "stackedFull" | "stackedfull" | "stackedLogarithmic" | "stackedlogarithmic" | "logarithmic" | "variwide");

    /**
     * When set to true, the axis will attempt to include the origin in the scale
     * @since 2.0
     */
    includeOrigin?: boolean;

    /**
     * The logarithmic base used with logarithmic scales.
     * See Also:
     * {@link https://jscharting.com/samples/Javascript_AxisLogScale_Chart.htm}
     * @since 2.6
     */
    logBase?: number;
    [any: string]: any;
}

/**
* (Custom Ticks) The axis value this tick represents.
* @since 1.5
*/
export declare type Value = number | string | Date | [(number | string | Date), (number | string | Date)] | Value_object;
export declare interface Value_object {

    /**
     * A calendar pattern that generates ticks for each specified interval or range
     */
    pattern?: JSCCalendarPatternConfig;
    [any: string]: any;
}

/**
* Event functions fired when for specific mouse interactions with this axis tick.
* @since 3.0
*/
export declare interface AxisTickEvents {

    /**
     * Fires when mouse enters the axis tick label.
     * @inline true
     */
    mouseOver?: JSCEventHandlerConfig;

    /**
     * Fires when mouse leaves the axis tick label.
     * @inline true
     */
    mouseOut?: JSCEventHandlerConfig;

    /**
     * Fires when the axis tick label is clicked.
     * @inline true
     */
    click?: JSCEventHandlerConfig;
    [any: string]: any;
}

/**
* A gradient range of colors that appears in the legend when used with a smartPalette set on the chart level palette property
* @since 2.1
*/
export declare interface ColorBar {

    /**
     * The width or height of the bar depending on the direction of the associated axis.
     */
    width?: number;

    /**
     * The width or height of the bar depending on the direction of the associated axis.
     */
    length?: number;

    /**
     * Axis options used with the axis that is drawn in the legend.
     */
    axis?: JSCAxisConfig;

    /**
     * Indicates whether the colorBar is visible in the legend.
     * @since 2.7
     */
    visible?: boolean;
    [any: string]: any;
}

/**
* An array of points or point data object associated with this series.
*/
export declare type Points = JSCPointConfig[] | Points_object;
export declare interface Points_object {

    /**
     * A comma delimited list of properties the items in data array or csv columns map to.
     * @since 2.0
     */
    mapTo?: string;

    /**
     * Array of arrays representing each data point that map to the mapTo property.
     * @since 2.0
     */
    data?: [(string | number | Date)][] | string;

    /**
     * A comma delimited list of data types that map to each data column.
     * @since 2.0
     */
    types?: string;

    /**
     * By default, a comma delimiter is used, but alternative column delimiters can be specified when using with csv data.
     * @since 2.0
     */
    delimiter?: string;

    /**
     * An optional alternative newline delimiter.
     * @since 2.0
     */
    newline?: string;

    /**
     * When set to true, the first row of csv data will not be used.
     * @since 2.0
     */
    header?: boolean;
    [any: string]: any;
}

/**
* Series attributes  containing additional metadata as key value pairs that can be referenced in label text or other series related properties using tokens such as %attributeKey.
* @since 2.5
*/
export declare type Attributes = [string, (string | number | Date)][] | Attributes_object;
export declare interface Attributes_object {

    /**
     * Any attribute. The name of the property will be used as the key.
     */
    [any: string]: any;

}

/**
* Specifies whether point selection is enabled, the pointSelectionMode, or the maximum number of points that can be selected at a time. Setting true boolean is same as "auto" selection mode.
* @remarks When designing charts for mobile usage where CTRL keys are not available, specific selection modes like "single" or "multiple" can be used for consistent selection behavior across devices.
* @since 3.0
*/
export declare type PointSelection = boolean | string | PointSelection_object;
export declare interface PointSelection_object {

    /**
     * The maximum number of points that can be selected at a time. This mode uses a FIFO (first in first out) logic when selecting points.
     * @since 3.0
     */
    max?: number;
    [any: string]: any;
}

/**
* Specifies mouse tracking options for this series. When using crosshairs and combined tooltips, disabling mouse tracking will exclude points of this series from being highlighted (Point.focusGlow) by the crosshair or included in combined tooltips.
* @remarks Disabling mouse tracking can improve client-side performance.
*/
export declare type MouseTracking = MouseTracking_object | boolean;
export declare interface MouseTracking_object {

    /**
     * Whether mouse tracking is enabled for this series.
     */
    enabled?: boolean;

    /**
     * When true, tooltips disappear and point mouseOut event occurs when the cursor hovers a different point or leaves the chart area. Otherwise, these events occur when the mouse leaves the point.
     * @remarks Similarly, series mouseOut events occur when the mouse hovers a point of another series or leaves the chart area.
     * @since 3.0
     */
    sticky?: boolean;
    [any: string]: any;
}

/**
* Specifies the series states
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-interactivity/states/}
*/
export declare interface States {

    /**
     * State options when mouse hovers the series.
     */
    hover?: JSCSeriesStateConfig;

    /**
     * State options when series is selected.
     */
    select?: JSCSeriesStateConfig;

    /**
     * State options when series is muted due to highlighting other series or points.
     * @since 3.0
     */
    mute?: JSCSeriesStateConfig;
    [any: string]: any;
}

/**
* Event functions fired for specific mouse interactions with this series.
*/
export declare interface SeriesEvents {

    /**
     * Fires when mouse enters the series.
     * @remarks In the event handler function, the "this" keyword refers to the series triggering the event.
     * @inline true
     */
    mouseOver?: JSCEventHandlerConfig;

    /**
     * Fires when mouse leaves the series. If the series mouseTracking.sticky option is true, the event is triggered when the mouse enters another series or leaves the chart area. Or if using touch, event does not fire until user taps off the chart.
     * @remarks In the event handler function, the "this" keyword refers to the series triggering the event.
     * @inline true
     */
    mouseOut?: JSCEventHandlerConfig;

    /**
     * Fires when series is clicked.
     * @inline true
     */
    click?: JSCEventHandlerConfig;

    /**
     * Fires when the series legend entry is clicked. The default event action is to toggle the visibility of the series. This can be prevented by returning false or calling event.preventDefault().
     * @inline true
     */
    legendEntryClick?: JSCEventHandlerConfig;

    /**
     * Fires when series becomes visible.
     * @inline true
     */
    show?: JSCEventHandlerConfig;

    /**
     * Fires when series is hidden.
     * @inline true
     */
    hide?: JSCEventHandlerConfig;
    [any: string]: any;
}

/**
* Specifies the minimum and maximum sizes of points. The minimum size can be set to limit bar height, and both can be used to specify bubble size limits.
* @since 1.1
*/
export declare type Size = Size_object | [(number | string), (number | string)];
export declare interface Size_object {

    /**
     * Minimum bar size in pixels, or bubble size in pixels or as percentage of chart size.
     * @since 1.1
     */
    min?: number | string;

    /**
     * Maximum bubble size in pixels or as percentage of chart size.
     * @since 1.1
     */
    max?: number | string;
    [any: string]: any;
}

/**
* A glow effect when the point is hovered or highlighted by combined tooltip and crosshair
* @since 2.7
*/
export declare type FocusGlow = FocusGlow_object | boolean;
export declare interface FocusGlow_object {

    /**
     * Base glow color.
     */
    color?: JSCColorConfig;

    /**
     * Opacity from 0 to 1, where 0 is transparent and 1 is solid (default).
     * @max 1
     */
    opacity?: number;

    /**
     * Width of the glow.
     */
    width?: number;
    [any: string]: any;
}

/**
* Specifies point state options
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-interactivity/states/}
*/
export declare interface PointStates {

    /**
     * State options when mouse hovers the point.
     */
    hover?: JSCPointStateConfig;

    /**
     * State options when point is selected.
     */
    select?: JSCPointStateConfig;

    /**
     * State options when point is muted.
     * @remarks If the series muted state enabled property is defined, points will inherit the setting unless specified at set for points.
     * @since 3.0
     */
    mute?: JSCPointStateConfig;
    [any: string]: any;
}

/**
* Event functions fired when for specific mouse interactions with this point.
*/
export declare interface PointEvents {

    /**
     * Fires when mouse enters the point. Returning false will prevent the default point mouseOver behavior (setting hover state).
     * @remarks In the function, the "this" keyword refers to the clicked point object. An event argument is passed to the specified function.
     * @inline true
     */
    mouseOver?: JSCEventHandlerConfig;

    /**
     * Fires when mouse leaves the point. Returning false will prevent the default point mouseOut behavior (setting normal state).
     * @remarks In the function, the "this" keyword refers to the clicked point object. An event argument is passed to the specified function.
     * @inline true
     */
    mouseOut?: JSCEventHandlerConfig;

    /**
     * Fires when point is clicked.
     * @remarks In the function, the "this" keyword refers to the clicked point object. An event argument is passed to the specified function. Returning false cancels the operation.
     * @inline true
     */
    click?: JSCEventHandlerConfig;

    /**
     * Fires when point is selected.
     * @remarks In the function, the "this" keyword refers to the clicked point object. An event argument is passed to the specified function. Returning false cancels the operation.
     * @inline true
     */
    select?: JSCEventHandlerConfig;

    /**
     * Fires when point is unselected.
     * @inline true
     */
    unselect?: JSCEventHandlerConfig;

    /**
     * Fires when point is removed with the remove() method.
     * @remarks In the function, the "this" keyword refers to the point object. An event argument is passed to the specified function. Returning false cancels the operation.
     * @inline true
     */
    remove?: JSCEventHandlerConfig;

    /**
     * Fires when point is updated with the update() method.
     * @remarks In the function, the "this" keyword refers to the point object. An event argument is passed to the specified function. Returning false cancels the operation.
     * @inline true
     */
    update?: JSCEventHandlerConfig;
    [any: string]: any;
}

/**
* State options for point marker.
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-interactivity/states/}
*/
export declare interface PointMarkerStates {

    /**
     * State options when the mouse hovers the marker.
     * @inline true
     */
    hover?: JSCPointMarkerStateConfig;

    /**
     * State options when point is selected.
     * @inline true
     */
    select?: JSCPointMarkerStateConfig;
    [any: string]: any;
}

/**
* Represents the legend title
*/
export declare interface LegendTitle {

    /**
     * Title label of this legend.
     * @since 1.2
     */
    label?: JSCLabelConfig;
    [any: string]: any;
}

/**
* State options for legend entry.
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-interactivity/states/}
*/
export declare interface LegendEntryState {

    /**
     * State options on legend entry hover.
     * @inline true
     */
    hover?: JSCLegendEntryStateConfig;

    /**
     * State options when legend entry is disabled.
     * @inline true
     */
    hidden?: JSCLegendEntryStateConfig;
    [any: string]: any;
}

/**
* Event functions fired when for specific mouse interactions with this legend entry.
* @since 2.0
*/
export declare interface LegendEntryEvents {

    /**
     * Fires when mouse enters the legend entry.
     * @inline true
     */
    mouseOver?: JSCEventHandlerConfig;

    /**
     * Fires when mouse leaves the legend entry.
     * @inline true
     */
    mouseOut?: JSCEventHandlerConfig;

    /**
     * Fires when legend entry is clicked.
     * @inline true
     */
    click?: JSCEventHandlerConfig;
    [any: string]: any;
}

/**
* Settings for the line cap at the start of the line.
*/
export declare interface Start {

    /**
     * Specifies the line cap shape name or a specialized 'arrow' cap.
     */
    type?: string;

    /**
     * A percentage of line width or a pixel size of the cap.
     * @example "450%" || 20
     */
    size?: string | number;

    /**
     * When set to true, the cap extends beyond the line end. When false, it is drawn within the span of the line.
     */
    overflow?: boolean;
    [any: string]: any;
}

/**
* Settings for the line cap at the end of the line.
*/
export declare interface End {

    /**
     * Specifies the line cap shape name or a specialized 'arrow' cap.
     */
    type?: string;

    /**
     * A percentage of line width or a pixel size of the cap.
     * @example "450%" || 20
     */
    size?: string | number;

    /**
     * When set to true, the cap extends beyond the line end. When false, it is drawn within the span of the line.
     */
    overflow?: boolean;
    [any: string]: any;
}

/**
* 
*/
export declare interface Undefined {

    /**
     * .
     */
    [any: string]: any;

}

/**
* Accessibility options for the grid buttons when enabled.
* See Also:
* {@link https://jscharting.com/tutorials/js-chart-accessibility/}
*/
export declare interface Buttons {

    /**
     * The view chart button options
     */
    chart?: JSCGridButtonConfig;

    /**
     * The view grid button options
     */
    grid?: JSCGridButtonConfig;

    /**
     * The download grid CSV button options
     */
    export?: JSCGridButtonConfig;
    [any: string]: any;
}

/**
* A set of 0-1 values defining the range of variation of each HSL component in the resulting color palette.
*/
export declare interface Variations {

    /**
     * A value between 0-1 that indicates the amount of the hue spectrum that is used in resulting colors.
     */
    hue?: number;

    /**
     * A value between 0-1 that indicates the amount of the saturation range that is used in resulting colors.
     */
    saturation?: number;

    /**
     * A value between 0-1 that indicates the amount of the lightness range that is used in resulting colors.
     */
    lightness?: number;
    [any: string]: any;
}

/**
* Csv parsing options
*/
export declare interface Options {

    /**
     * Manually specified delimiter character
     */
    delimiter?: string;

    /**
     * Manually specified newline character
     */
    newline?: string;
    [any: string]: any;
}

/**
* The original and parsed data including information about detected headers and data types.
*/
export declare interface ParseCsv {

    /**
     * The original raw csv file content text.
     */
    raw?: string;

    /**
     * An array of header row content. The chart will detect header rows automatically and return the rows in this property.
     */
    headers?: string[][];

    /**
     * Csv data processed into arrays of strings before individual values are parsed.
     */
    split?: string[][];

    /**
     * Csv data processed into column and row arrays of numeric and string values.
     */
    data?: (string | number)[][];

    /**
     * An array of data types detected for each data column. Resulting values include number, date, string, and undefined.
     */
    types?: string[];
    [any: string]: any;
}

/**
* Object to merge sources into.
*/
export declare interface Target {

    /**
     * Manually specified delimiter character
     */
    [any: string]: any;

}

/**
* (...object) Sources to merge
*/
export declare interface Sources {

    /**
     * Manually specified delimiter character
     */
    [any: string]: any;

}

/**
* (...object) Sources to merge
*/
export declare interface Sources2 {

    /**
     * Manually specified delimiter character
     */
    [any: string]: any;

}

/**
* Specifies a key name or function key getter by which data is grouped and nested.
*/
export declare type Iteratee = ((entry: any) => any) | Iteratee_object | string;
export declare interface Iteratee_object {

    /**
     * A property name that is a property iteratee shorthand.
     */
    key?: string;

    /**
     * A CalendarPattern that describes a date grouping. For example, setting 'month' will result in dates being grouped into months.
     * See Also:
     * {@link https://jscharting.com/tutorials/types/js-calendar-chart/calendar-patterns/}
     */
    pattern?: JSCCalendarPatternConfig;

    /**
     * When specified, these values are used to define the date grouping limits. Values outside this range are ignored.
     */
    range?: [(number | string | Date), (number | string | Date)];
    [any: string]: any;
}

/**
* Axis range information.
*/
export declare interface GetRange {

    /**
     * Axis minimum
     */
    min?: number | Date;

    /**
     * Axis maximum
     */
    max?: number | Date;

    /**
     * Minimum value of data on this axis.
     */
    dataMin?: number | Date;

    /**
     * Maximum value of data on this axis.
     */
    dataMax?: number | Date;

    /**
     * The minimum value applied programmatically if a range was set with the setRange method.
     */
    userMin?: number | Date;

    /**
     * The maximum value applied programmatically if a range was set with the setRange method.
     */
    userMax?: number | Date;
    [any: string]: any;
}

/**
* Select specific items within this collection.
* @inline true
*/
export declare type Predicate = ((args: any[]) => any) | Predicate_object;
export declare interface Predicate_object {

    /**
     * Filters the collection down to only items with the same property values specified by this object.<br/>chart.series( { name: 'Series 1' } ) - returns series named 'Series 1'.<br/>chart.axes( { prefix: 'x' } ) - returns all X axes.
     */
    [any: string]: any;

}

/**
* The function invoked on each item to get the comparable value to sort by. The item is passed in the first argument of this function.
*/
export declare interface ItemOptions {

    /**
     * Options of the item to add.
     */
    [any: string]: any;

}

export as namespace JSC;

declare interface jQuery {
    JSC(): Chart;
    JSC(options: JSCChartConfig): jQuery;
    JSC(options: JSCChartConfig, callback: (c?: Chart) => void): jQuery;
}

