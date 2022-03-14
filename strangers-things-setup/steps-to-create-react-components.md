1. decide what component you need
2. build the route for the component

3. hook up the import/export for the component across all relevant files/directories

4. build the minimal component function needed to identify it

5. once the component has rendered and you can see it when you should, and you can't see it when you shouldn't

6. resolve the data the component needs through useState + useEffect as necessary (not every component needs both)

7. at this point, your component should be able to do the work it needs to, and the rest is presentational: write the JSX return, manage your event handlers, etc.
