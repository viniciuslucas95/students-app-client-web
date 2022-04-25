import { PropsWithChildren } from "react";
import { COLOR } from "../../constants/color.constant";
import { Button } from "../Button";

interface ITextProps {
    children: number | string
    forceMinWidth?: boolean
    onClick: Function
}

export function PageNumberTextButton({ children, forceMinWidth = true, onClick }: PropsWithChildren<ITextProps>) {
    return <Button
        onClick={() => onClick()}
        style={{ margin: '0 1px' }}
        forceMinWidth={forceMinWidth}
        content={{ text: typeof children === 'string' ? children : children.toString() }}
        buttonColor={{
            background: COLOR.neutral,
            backgroundHover: COLOR.neutral,
            backgroundActive: COLOR.neutral,
            outline: COLOR.highEmphasis,
            content: COLOR.disabled
        }}
        hasShadow={false}
    />
}

interface IIconProps {
    children: JSX.Element
}

export function PageNumberIconButton({ children }: PropsWithChildren<IIconProps>) {
    return <Button style={{ margin: '0 1px' }}
        forceMinWidth
        content={{ icon: children }}
        buttonColor={{
            background: COLOR.neutral,
            backgroundHover: COLOR.neutral,
            backgroundActive: COLOR.neutral,
            outline: COLOR.highEmphasis,
            content: COLOR.disabled
        }}
        hasShadow={false}
    />
}