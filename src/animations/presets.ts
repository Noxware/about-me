import {css, Keyframes} from 'styled-components';
import * as kfs from './keyframes';

export function showFromPresetFactory(keyframes: Keyframes, duration: number, fallbackOpacity?: number) {
  return ()=>css`
    ${(typeof fallbackOpacity === 'number') ? `opacity: ${fallbackOpacity};` : undefined}
    
    animation-name: ${keyframes};
    animation-duration: ${duration}s;
    animation-fill-mode: both;
  `;
}

export const showFromLeftPreset = showFromPresetFactory(kfs.showFromLeft, 1.7, 100);
export const showFromRightPreset = showFromPresetFactory(kfs.showFromRight, 1.7, 100);
export const showFromTopPreset = showFromPresetFactory(kfs.showFromTop, 1.7, 100);
export const showFromBottomPreset = showFromPresetFactory(kfs.showFromBottom, 1.7, 100);