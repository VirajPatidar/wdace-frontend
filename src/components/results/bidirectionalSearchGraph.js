import Graph from "react-graph-vis";
import React, { useState } from "react";
import { Box } from "@mui/material";

const options = {
    nodes: {
        shape: 'dot',
        size: 25
    },
    layout: {
        hierarchical: false,
    },
    edges: {
        color: "#000000"
    }
};

function randomColor() {
    const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`;
}

const BidirectionalSearchGraph = ({domain, child_nodes, parent_nodes}) => {

    let graph_nodes=[]
    let graph_edges=[]
    let unique_nodes=[]


    let child=0; let parent=0;
    if(Object.keys(child_nodes).length !== 0){
        child = 1;
        for (let c in child_nodes) {
            unique_nodes.push(String(c))
            for (let i = 0; i < child_nodes[c].length; i++) {
                unique_nodes.push(child_nodes[c][i])
            }
        }
    }
    if(Object.keys(parent_nodes).length !== 0){
        parent = 1;
        for (let p in parent_nodes) {
            unique_nodes.push(String(p))
            for (let i = 0; i < parent_nodes[p].length; i++) {
                unique_nodes.push(parent_nodes[p][i])
            }
        }
    }

    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    unique_nodes = removeDuplicates(unique_nodes)
    for (let i = 0; i < unique_nodes.length; i++) {
        graph_nodes.push({id: String(unique_nodes[i]), label: unique_nodes[i], color: randomColor()})
    }

    if(parent === 1){
        for (let p in parent_nodes) {
            for (let i = 0; i < parent_nodes[p].length; i++) {
                graph_edges.push({from: String(p), to: String(parent_nodes[p][i])})
            }
        }
    }

    if(child === 1){
        for (let c in child_nodes) {
            for (let i = 0; i < child_nodes[c].length; i++) {
                graph_edges.push({from: String(c), to: String(child_nodes[c][i])})
            }
        }
    }

    // eslint-disable-next-line
    const [state, setState] = useState({
        counter: graph_nodes.length,
        graph: {
            nodes: graph_nodes,
            edges: graph_edges
        }
    })

    const { graph } = state;

    return (
        <Box>
            <Graph graph={graph} options={options} style={{ height: "320px", padding: "0px", marginBottom: "0px" }} />
        </Box>
    );

}

export default BidirectionalSearchGraph;