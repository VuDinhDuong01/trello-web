"use client"

import React, {
    useContext, createContext,
    useState
} from 'react'


interface IPropContextApp {
    emailContext: string,
    setEmailContext: React.Dispatch<React.SetStateAction<string>>
}

const getInitAppContext = {
    emailContext: "",
    setEmailContext: () => null
}

const ContextProvider = createContext<IPropContextApp>(getInitAppContext);

export const ProviderContext = ({ children }: { children: React.ReactNode }) => {
    const [emailContext, setEmailContext] = useState<string>("")
    return <ContextProvider.Provider value={{ emailContext, setEmailContext }}>{children}</ContextProvider.Provider>

}

export const useContextApp = () => {
    return useContext(ContextProvider)
}
