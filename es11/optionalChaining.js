const publish = {
  title: "ECMA Script 11",
  active: 1,
  tag: ["es11", "js"],
};

//const authorName = (publish.author ?? {}).name ?? "No existe autor.";
//const authorName = (publish.author && publish.author.name) ?? "No existe autor";

const authorName = publish.author?.name ?? "No existe Autor";

console.log(authorName);
