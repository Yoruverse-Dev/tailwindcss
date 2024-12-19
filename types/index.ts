import { HexColor } from 'palette'

export interface YoruTailwindConfig {
    prefix?: string
}

interface ColorMode {
    light: HexColor
    dark: HexColor
}

// background-color, color, font-size. these are called properties

export interface CSSProperty {
    [key: string]: ColorMode
}