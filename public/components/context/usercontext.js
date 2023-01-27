import { useState, createContext, useContext } from "react";

const PageContext = createContext({})

const PageProvider = ({ children }) => {
    const [page, setPage]  = useState("Users");
    const value = { page, setPage }

    return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}

export const usePage = () => useContext(PageContext)

export default PageProvider