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
        hex_light: 'FDBA74',
        hex_default: 'F97316'
    },
    {
        name: 'amber',
        hex_light: 'FCD34D',
        hex_default: 'F59E0B'
    },
    {
        name: 'yellow',
        hex_light: 'FDE047',
        hex_default: 'EAB308'
    },
    {
        name: 'lime',
        hex_light: 'BEF264',
        hex_default: '84CC16'
    },
    {
        name: 'green',
        hex_light: '86EFAC',
        hex_default: '22C55E'
    },
    {
        name: 'emerald',
        hex_light: '6EE7B7',
        hex_default: '10B981'
    },
    {
        name: 'teal',
        hex_light: '5EEAD4',
        hex_default: '14B8A6'
    },
    {
        name: 'cyan',
        hex_light: '67E8F9',
        hex_default: '06B6D4'
    },
    {
        name: 'sky',
        hex_light: '7DD3FC',
        hex_default: '0EA5E9'
    },
    {
        name: 'blue',
        hex_light: '93C5FD',
        hex_default: '3B82F6'
    },
    {
        name: 'indigo',
        hex_light: 'A5B4FC',
        hex_default: '6366F1'
    },
    {
        name: 'violet',
        hex_light: 'C4B5FD',
        hex_default: '8B5CF6'
    },
    {
        name: 'purple',
        hex_light: 'D8B4FE',
        hex_default: 'A855F7'
    },
    {
        name: 'fuchsia',
        hex_light: 'F0ABFC',
        hex_default: 'D946EF'
    },
    {
        name: 'pink',
        hex_light: 'F9A8D4',
        hex_default: 'EC4899'
    },
    {
        name: 'rose',
        hex_light: 'FDA4AF',
        hex_default: 'F43F5E'
    }
]