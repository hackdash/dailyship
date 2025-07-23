import pluginWebc from "@11ty/eleventy-plugin-webc"
export default async function(c){
	c.addFilter('dateString', function(date){
		return date.toISOString().slice(0,10)
	});
	c.addPassthroughCopy({'public':'/'})
	c.setInputDirectory('content')
	c.addPlugin(pluginWebc, {
		components:'content/_component/*.webc',
	})
}
