# Sparker

## Development

Clone this repo and then do an `npm install`. Make changes to `src/index.js` and then run `rollup -c` to build it into the build directory. You can deploy it with `aunty deploy`.

TODO: do proper releases in the future.

## ABC CoreMedia integration

So you want to have some inline spark charts in your articles?

We are testing an implementation of Spark from After the Flood. This might be useful until we can develop better D3 based spark charts. We are now able to use these in CoreMedia articles now that we have the Spanify plugin/hack.

Enable spark charts in your article by including this code as a HTML Fragment:

`<div class="init-interactive" data-scripts="http://www.abc.net.au/res/sites/news-projects/sparker/master/sparker.js" data-no-support-msg="true"></div>`

To create an inline spark chart you need to create an empty anchor with the data you want to chart in the "title" field. To do this push space three times after the word where you want the chart. Then highlight the middle space with your mouse and create a link. In the "title" field put something like "**spark bar values-34-67-34-56-97**".

## Spark bars

Spark charts can be appended inline anywhere in paragraph text.

**spark bar values-34-67-34-56-97**

There will also be times where we want to use different spark styles. If you have limited space or you have more values to plot then a narrow spark bar chart might do the trick.

**spark bar narrow values-21-44-27-34-57-87-34-45-97**

If you have a lot of number you might want to use a thin spark bar chart.

**spark bar thin values-18-55-23-33-88-76-34-66-67-44-87-23-45-47-67-38-95-34**

You'll notice that charts (like most vector based objects) look better on Retina/high DPI displays.

## Spark dots

Instead of bars you can use dots. Like bar charts these have 100 different heights. They work the same as spark bars except they have dots instead of bars.

There is a version with smaller as well.

**spark dot values-76-45-34-23-18-45-67-34-56-97-65**

**spark dot small values-11-25-56-78-57-87-99-66-45-34-21-36-77-89-92-94-95-89-75-45-77**

## Spark lines

There are also spark lines or "dotlines" which are little dots connected by lines. Unline the other charts these spark lines are limited to 10 different heights due to the exponential combinations required to join each height.

**spark line values-0-6-4-5-7-3-2-4-7-8-9**

## With numbers

We can also render all these charts with numbers on either side. This is to let the reader know the scale that the data has.

**spark bar values-34-67-34-56-97 numbers**

## Syndication

For environments that don't have JavaScript fully enabled like the ABC App and Apple News etc. the spark charts will simply not display at all. The chart code should be invisible to the end user unless JavaScript is on.

See an article with [spark charts in action](http://nucwed.aus.aunty.abc.net.au/news/2018-01-19/how-to-use-inline-spark-charts/9307030#devmode) (ABC Internal Network Only)
