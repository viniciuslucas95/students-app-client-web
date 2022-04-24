import { ReactComponent as Svg } from './search_white.svg'

interface IProps {
    size?: 'big' | 'small'
}

export function SearchIcon({ size }: IProps) {
    if (!size) size = 'big'

    const sizeValue = size == 'big' ? 48 : 24

    return <Svg width={sizeValue} height={sizeValue} />
}