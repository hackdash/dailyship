import pluginWebc from "@11ty/eleventy-plugin-webc"
export default async function(c){
	c.addPlugin(pluginWebc, {
		components:'tag/*.webc',
	})
	c.addPassthroughCopy({'./public/':'/'})
	c.setInputDirectory('content')
	c.setOutputDirectory('dist')
}
