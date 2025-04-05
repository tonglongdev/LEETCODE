var lcaDeepestLeaves = function (root) {
    function dfs(node) {
        if (!node) return { depth: 0, lca: null };

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (left.depth === right.depth) {
            return { depth: left.depth + 1, lca: node };
        }
        else if (left.depth > right.depth) {
            return { depth: left.depth + 1, lca: left.lca };
        }
        else {
            return { depth: right.depth + 1, lca: right.lca };
        }
    }

    return dfs(root).lca;
};