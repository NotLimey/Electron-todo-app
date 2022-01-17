export interface IColor {
    name: string,
    hex_light: string,
    hex_default?: string,
    hex_dark?: string
}

export function GetRandomColor() : IColor {
    const random = Math.floor(Math.random() * Colors.length);
    return Colors[random];
}

export const Colors = [
    {
        name: 'red',
        hex_light: 'FCA5A5',
        hex_default: 'EF4444',
        hex_dark: '991B1B'
    },
    {
        name: 'orange',
        hex_light: 'FDBA74'
    },
    {
        name: 'amber',
        hex_light: 'FCD34D'
    },
    {
        name: 'lime',
        hex_light: 'BEF264'
    },
    {
        name: 'green',
        hex_light: '86EFAC'
    },
    {
        name: 'emerald',
        hex_light: '6EE7B7'
    },
    {
        name: 'teal',
        hex_light: '5EEAD4'
    },
    {
        name: 'cyan',
        hex_light: '67E8F9'
    },
    {
        name: 'sky',
        hex_light: '7DD3FC'
    },
    {
        name: 'blue',
        hex_light: '93C5FD'
    },
    {
        name: 'indigo',
        hex_light: 'A5B4FC'
    },
    {
        name: 'violet',
        hex_light: 'C4B5FD'
    },
    {
        name: 'purple',
        hex_light: 'D8B4FE'
    },
    {
        name: 'fuchsia',
        hex_light: 'F0ABFC'
    },
    {
        name: 'pink',
        hex_light: 'F9A8D4'
    },
    {
        name: 'rose',
        hex_light: 'FDA4AF'
    }
]