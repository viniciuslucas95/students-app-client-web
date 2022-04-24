import { ReactComponent as Svg } from './plus_white.svg'

interface IProps {
    size?: 'big' | 'small'
}

export function PlusIcon({ size }: IProps) {
    if (!size) size = 'big'

    const sizeValue = size == 'big' ? 48 : 24

    return <Svg width={sizeValue} height={sizeValue} />
}