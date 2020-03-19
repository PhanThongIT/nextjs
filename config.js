const theme = {
  primary: "#ffc600",
  linkComments: [
    {
      id: 0,
      asLink: "first-comment",
      content: <h2>Hello First comment</h2>,
      href: "/post/[id]/[comment]"
    },
    {
      id: 2,
      asLink: "second-comment",
      content: <h2>Hello Second comment</h2>,
      href: "/post/[id]/[comment]"
    }
  ]
};

export default theme;
