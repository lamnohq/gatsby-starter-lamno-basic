const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic("failed to create blog posts", result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    actions.createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}

exports.sourceNodes = async ({ actions, store, cache, createNodeId }) => {
  const { createNode } = actions

  await createRemoteFileNode({
    // The source url of the remote file
    url: `https://source.unsplash.com/user/erondu/4000x4000`,
    cache,
    createNode,
    createNodeId,
    name: "random-unsplash",
    ext: ".jpg",
  })
}
