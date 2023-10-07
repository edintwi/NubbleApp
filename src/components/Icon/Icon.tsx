import React from 'react';
import { EyeOnIcon } from '../../assets/icons/EyeOnIcon';
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon';
import { Theme, ThemeColors } from '../../theme/theme';

import { useAppTheme } from '../../Hooks/useAppTheme';

export interface IconBase{
    size?: number,
    color?: string,
}

interface Props {
    name: IconName,
    color?: ThemeColors,
    size?: number,
}

export function Icon({name, color = 'backgroundContranst', size} : Props){

    const {colors} = useAppTheme();
    const SVGIcon  = iconRegistry[name];

    return <SVGIcon color={colors[color]} size={size}/>
};

const iconRegistry = {
    eyeOn: EyeOnIcon,
    eyeOff: EyeOffIcon
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;