## SolidLab Demo Link Traversal
This demo shows how link traversal could be used for a social media application. In this demo you can
- Log in and view your profile details
- Find all the people you know
- Display information of a specific person
- Find all Forums you are part of and their member counts
- Go to a forum detail page to find its moderator and members
- Go to member pages to get their details.

The underlying data is from [SolidBench](https://github.com/SolidBench/SolidBench.js/), which simulates the Solid environment. All information is retrieved using client-side link traversal queries.
Additionally there is option to view the executed queries, the logger output, performance metrics, and the traversal graph taken by the engine. Note that this significantly slows down query execution.
In the traversed topology, you can hover a node to show its label. In addition, you can click a node to show this node's label without needing to hover over it.
Traversed topologies are capped to around a 100 nodes, as it would otherwise slow the browser too much. 

## Set-up
```bash
    npm install
    npm run build
    npm run dev
```

## Future work:
- [ ] Allow different link traversal configurations (standard, adaptive, shape index, derived resources?) for possible demo at conference
