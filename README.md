# NavigatorX

NavigatorX is a web application built with ReactJS that helps users find the shortest path between two points on a grid, even when obstacles are present. It also visualizes how different search algorithms work to locate specific points on the grid.

## Features

- **Shortest Path Finding**: Uses the Dijkstra Algorithm to find the shortest path between two points on the grid.
- **Graph Traversal Algorithms**: Demonstrates Depth-First Search (DFS) and Breadth-First Search (BFS) algorithms.
- **Interactive Grid**: Users can place start and end points on the grid.
- **Random Obstacle Generation**: Generates obstacles randomly within the grid.
- **Visual Feedback**: Provides visual cues as algorithms navigate the grid.

## Usage

### Accessing the Application

Open the NavigatorX Web Application in your web browser.

### Specifying Start and End Nodes

1. Click on empty grid cells to place the start and end nodes. Avoid selecting cells colored black, as they represent obstacles.
2. After selecting the start and end nodes, click on "Set Nodes" to confirm your selection.

### Selecting Algorithms

Choose between Dijkstra Algorithm, DFS, and BFS.

### Running the Algorithm

Click on the desired algorithm to find the path.

## Development

- **Technologies Used**: ReactJS for the frontend.
- **Algorithm Implementation**: Dijkstra Algorithm for pathfinding, DFS, and BFS for searching.
- **Grid Representation**: Grid displayed using React components.
- **User Interaction**: React manages user interactions and algorithm execution.
