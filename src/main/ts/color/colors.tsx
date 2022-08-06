import React, {Context, useContext, useState} from "react";

export const themes: Theme[] = [
    {
        bg_accent: "bg-green-800",
        bg_accent_sub: "bg-green-600",
        bg_back: "bg-gray-100",
        bg_element: "bg-gray-300",
        text_accent: "text-green-900",
        text_main: "text-black",
        text_sub: "text-gray-400",
    },
]

const ThemeContext: Context<Theme> = React.createContext(themes[0])
let setThemeFunc: (theme: Theme) => void = () => {
}

export type Theme = {
    bg_accent: string
    bg_accent_sub: string
    bg_back: string
    bg_element: string
    text_accent: string
    text_main: string
    text_sub: string
}

type Props = {
    children: any
}

export const ThemeProvider = (props: Props) => {
    const [theme, setTheme] = useState(themes[0])
    setThemeFunc = setTheme

    return <ThemeContext.Provider value={theme}>
        {props.children}
    </ThemeContext.Provider>
}

export function setTheme(theme: Theme) {
    setThemeFunc(theme)
}

export function useTheme():Theme{
    return useContext(ThemeContext)
}