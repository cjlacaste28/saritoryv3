import {createContext, useState, useMemo} from "react";
import {createTheme} from "@mui/material/styles";

//color design tokens
export const tokens =(mode) =>({

...(mode === 'dark'
?{
indigo: {
    100: "#cce0f2",
    200: "#99c0e5",
    300: "#66a1d8",
    400: "#3381cb",
    500: "#0062be",
    600: "#004e98",
    700: "#003b72",
    800: "#00274c",
    900: "#001426"
},
blue: {
    100: "#cce6fe",
    200: "#99cdfe",
    300: "#66b4fd",
    400: "#339bfd",
    500: "#0082fc",
    600: "#0068ca",
    700: "#004e97",
    800: "#003465",
    900: "#001a32"
},
black: {
    100: "#d3d3d4",
    200: "#a6a8a9",
    300: "#7a7c7f",
    400: "#4d5154",
    500: "#212529",
    600: "#1a1e21",
    700: "#141619",
    800: "#0d0f10",
    900: "#070708"
},
white: {
    100: "#fdfdfd",
    200: "#fbfbfb",
    300: "#f9f9f8",
    400: "#f7f7f6",
    500: "#f5f5f4",
    600: "#c4c4c3",
    700: "#939392",
    800: "#626262",
    900: "#313131"
},
brightorange: {
    100: "#ffe9db",
    200: "#ffd3b8",
    300: "#ffbd94",
    400: "#ffa771",
    500: "#ff914d",
    600: "#cc743e",
    700: "#99572e",
    800: "#663a1f",
    900: "#331d0f"
},
orange: {
    100: "#fbe6d9",
    200: "#f6ccb2",
    300: "#f2b38c",
    400: "#ed9965",
    500: "#e9803f",
    600: "#ba6632",
    700: "#8c4d26",
    800: "#5d3319",
    900: "#2f1a0d"
},} : {
indigo: {
    100: "#001426",
    200: "#00274c",
    300: "#003b72",
    400: "#004e98",
    500: "#0062be",
    600: "#3381cb",
    700: "#66a1d8",
    800: "#99c0e5",
    900: "#cce0f2",
},
blue: {
    100: "#001a32",
    200: "#003465",
    300: "#004e97",
    400: "#0068ca",
    500: "#0082fc",
    600: "#339bfd",
    700: "#66b4fd",
    800: "#99cdfe",
    900: "#cce6fe",
},
black: {
    100: "#070708",
    200: "#0d0f10",
    300: "#141619",
    400: "#f2f0f0",
    500: "#212529",
    600: "#4d5154",
    700: "#7a7c7f",
    800: "#a6a8a9",
    900: "#d3d3d4",
},
white: {
    100: "#313131",
    200: "#626262",
    300: "#939392",
    400: "#c4c4c3",
    500: "#f5f5f4",
    600: "#f7f7f6",
    700: "#f9f9f8",
    800: "#fbfbfb",
    900: "#fdfdfd",
},
brightorange: {
    100: "#331d0f",
    200: "#663a1f",
    300: "#99572e",
    400: "#cc743e",
    500: "#ff914d",
    600: "#ffa771",
    700: "#ffbd94",
    800: "#ffd3b8",
    900: "#ffe9db",
},
orange: {
    100: "#2f1a0d",
    200: "#5d3319",
    300: "#8c4d26",
    400: "#ba6632",
    500: "#e9803f",
    600: "#ed9965",
    700: "#f2b38c",
    800: "#f6ccb2",
    900: "#fbe6d9",
}}),
   
});

//mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'? {
                black: {main: colors.black[500],},
                orange: {main: colors.orange[500],},
                indigo: {
                    dark: colors.indigo[700],
                    main: colors.indigo[500],
                    light: colors.indigo[500]
                },
                background: {default: colors.black[500]}
                
            } 
            :{
            black: {main: colors.black[100],},
            orange: {main: colors.orange[500],},
            indigo: {
                dark: colors.indigo[700],
                main: colors.indigo[500],
                light: colors.indigo[500]
            },
            background: {default: colors.white[500]
            }
            }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(", "),
            fontsize: 12,
            h1:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(", "),
                fontsize: 40,
            },
            h2:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(", "),
                fontsize: 32,
            },
            h3:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(", "),
                fontsize: 24,
            },
            h4:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(", "),
                fontsize: 20,
            },
            h5:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(", "),
                fontsize: 16,
            },
            h6:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(", "),
                fontsize: 14,
            },
        }
    };

};

// react context for color mode
export const ColorModeContext = createContext({
    toggleColorMode:() =>{}
});
export const useMode = ()=>{
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () =>({
            toggleColorMode: () =>
            setMode((prev) => (prev === "light" ? "dark" : "light")),

        }),
        []
    );

    const theme = useMemo (() => createTheme(themeSettings(mode)),[mode]);

    return [theme, colorMode];
}
