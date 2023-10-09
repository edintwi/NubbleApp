import { useAppTheme } from "./useAppTheme";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useAppSafeArea(){
    const {top} = useSafeAreaInsets();
    const {spacing} = useAppTheme();

    return {
        top: Math.max(top, spacing.s20),
    }
}