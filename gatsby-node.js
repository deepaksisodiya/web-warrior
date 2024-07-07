const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
		query Articles {
			allMarkdownRemark {
				nodes {
					html
					frontmatter {
						slug
						stack
						title
					}
				}
			}
		}
	`);

	data.allMarkdownRemark.nodes.forEach((node) => {
		actions.createPage({
			path: "/projects/" + node.frontmatter.slug,
			component: path.resolve("./src/templates/project-details.js"),
			context: { details: node },
		});
	});
};
