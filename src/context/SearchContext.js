import React, { createContext, useState } from 'react';

// Create a new context
export const SearchContext = createContext({});

// Create a provider component for the context
export const SearchProvider = (props) => {
// Define the state variables for the context
const [searchInput, setSearchInput] = useState('');
const [apiStatus, setApiStatus] = useState({});
const [priorityOrder, setPriorityOrder] = useState([]);
const [phonetics, setPhonetics] = useState('');

// Set the value of the context with the state variables and functions
return (
<SearchContext.Provider
value={{
searchInput,
setSearchInput,
apiStatus,
setApiStatus,
priorityOrder,
setPriorityOrder,
phonetics,
setPhonetics,
}}
>
{/* Render any children components */}
{props.children}
</SearchContext.Provider>
);
};
