# Proof of Concept: Replacing redux-thunks with React Context + Reducers


## Summary

- useReducer gives us a centralised store of states whoch can receive deep updates throughout the application. However, the current state can only be accessed at the top-level and passed down to child props.

- useContext allows us to access the useReducer state from any nested child component.

## Quickstart

- ` yarn install && yarn dev`

