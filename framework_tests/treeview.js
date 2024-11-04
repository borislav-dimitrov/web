const data = [
  {
    name: "Node 1",
    children: [
      {
        name: "Child 1.1",
        children: [{ name: "Grandchild 1.1.1" }, { name: "Grandchild 1.1.2" }],
      },
      { name: "Child 1.2" },
    ],
  },
  {
    name: "Node 2",
    children: [{ name: "Child 2.1" }, { name: "Child 2.2" }],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const treeview = document.getElementById("treeview");
  treeview.appendChild(createTree(data));

  function createTree(nodes) {
    const ul = document.createElement("ul");

    nodes.forEach((node) => {
      const li = document.createElement("li");
      li.classList.add("tree-node");
      li.textContent = node.name;

      if (node.children && node.children.length > 0) {
        li.appendChild(createTree(node.children));
        li.addEventListener("click", function (e) {
          e.stopPropagation();
          this.classList.toggle("expanded");
        });
      }

      ul.appendChild(li);
    });

    return ul;
  }
});
