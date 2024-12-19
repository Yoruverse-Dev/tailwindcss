import { YoruPalette, PalettesHex } from 'palette'
import { YoruTailwindConfig, type CSSProperty } from '../types'
import plugin from 'tailwindcss/plugin'

export class YoruTailwind {

    prefix = ''
    palettes = new YoruPalette(PalettesHex)

    constructor(config?: YoruTailwindConfig) {
        this.prefix = config?.prefix || this.prefix
    }

    #textColor(): CSSProperty {

        const colors = this.palettes.values
        const base = this.palettes.base

        return {
            'primary': {
                light: colors.grayLight[900].hex,
                dark: colors.grayDark[50].hex
            },
            'primary_on-brand': {
                light: base.white.hex,
                dark: colors.grayDark[50].hex
            },
            'secondary': {
                light: colors.grayLight[700].hex,
                dark: colors.grayDark[300].hex
            },
            'secondary_hover': {
                light: colors.grayLight[800].hex,
                dark: colors.grayDark[200].hex
            },
            'secondary_on-brand': {
                light: colors.brand[200].hex,
                dark: colors.grayDark[300].hex
            },
            'tertiary': {
                light: colors.grayLight[600].hex,
                dark: colors.grayDark[400].hex
            },
            'tertiary_hover': {
                light: colors.grayLight[700].hex,
                dark: colors.grayDark[300].hex
            },
            'tertiary_on-brand': {
                light: colors.brand[200].hex,
                dark: colors.grayDark[400].hex
            },
            'quaternary': {
                light: colors.grayLight[500].hex,
                dark: colors.grayDark[400].hex
            },
            'quaternary_on-brand': {
                light: colors.brand[300].hex,
                dark: colors.grayDark[400].hex
            },
            'white': {
                light: base.white.hex,
                dark: base.white.hex
            },
            'disabled': {
                light: colors.grayLight[500].hex,
                dark: colors.grayDark[500].hex
            },
            'placeholder': {
                light: colors.grayLight[500].hex,
                dark: colors.grayDark[400].hex
            },
            'placeholder_subtle': {
                light: colors.grayLight[300].hex,
                dark: colors.grayDark[700].hex
            },
            'brand-primary': {
                light: colors.brand[900].hex,
                dark: colors.grayDark[50].hex
            },
            'brand-secondary': {
                light: colors.brand[700].hex,
                dark: colors.grayDark[300].hex
            },
            'brand-tertiary': {
                light: colors.brand[600].hex,
                dark: colors.grayDark[400].hex
            },
            'brand-tertiary_alt': {
                light: colors.brand[600].hex,
                dark: colors.grayDark[50].hex
            },
            'error-primary': {
                light: colors.error[600].hex,
                dark: colors.error[400].hex
            },
            'warning-primary': {
                light: colors.warning[600].hex,
                dark: colors.warning[400].hex
            },
            'success-primary': {
                light: colors.success[600].hex,
                dark: colors.success[400].hex
            },
        }
    }

    #renderCSSProperty(property: CSSProperty, prefix: string, dark?: boolean) {
        return Object.keys(property).reduce((acc, key) => {
            return {
                ...acc,
                [`--${this.prefix}${this.prefix ? '-' : ''}${prefix}-${key}`]: {
                    color: property[key][dark ? 'dark' : 'light']
                }
            }
        }, {})
    }

    #renderRoot() {
        return {
            ':root': {
                // ...this.#renderCSSProperty(this.#textColor(), 'text')
                "--text-primary": {
                    color: "#181d27",
                }
            }
        }
    }

    #renderRootUtilities() {

    }

    test() {
        console.dir(this.#renderRoot(), { depth: null })
    }

    get plugin() {
        return plugin(({ addBase, addUtilities }) => {
            addBase({
                ...this.#renderRoot()
            })

            // test
            addUtilities({
                '.text-primary': {
                    color: 'var(--text-primary)'
                }
            })
        })
    }

}

const yoruTW = new YoruTailwind()
yoruTW.test()