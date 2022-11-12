import Graph from "react-graph-vis";
import React, { useState } from "react";
import { Box } from "@mui/material";

const options = {
    nodes: {
        shape: 'dot',
        size: 14
    },
    layout: {
        hierarchical: false,
    },
    edges: {
        color: "#000000"
    }
};

// function randomColor() {
//     const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
//     const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
//     const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
//     return `#${red}${green}${blue}`;
// }

const DomainTopicGraph = ({domain, topics}) => {

    console.log(topics.toString())

    let graph_nodes=[]
    let graph_edges=[]
    graph_nodes.push({id: 1, label: domain, color: "#26c6da"})
    for (let i = 0; i < topics.length; i++) {
        graph_nodes.push({id: i+2, label: topics[i], color: "#00acc1"})
        graph_edges.push({from: 1, to: i+2})
    }

    // eslint-disable-next-line
    const [state, setState] = useState({
        counter: topics.length,
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

export default DomainTopicGraph;