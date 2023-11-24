import styled from 'styled-components'

interface IButtonStyle {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  $fs?: 'xsmall' | 'small' | 'medium' | 'larger' | string
  $fStyle?: 'normal' | 'italic'
  $fw?: 'medium' | 'larger'
  $fFamily?: string
  $tAlign?: 'start' | 'end' | 'justify' | 'center'
  $tTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  $color?: string
  $bgColor?: string
  $pd?: 'xsmall' | 'small' | 'medium' | 'larger' | 'xlarger' | 'none'
  $pdTop?: string
  $pdBottom?: string
  $pdRigth?: string
  $pdLeft?: string
  $mg?: 'xsmall' | 'small' | 'medium' | 'larger' | 'xlarger' | 'none'
  $mgTop?: string
  $mgBottom?: string
  $mgRigth?: string
  $mgLeft?: string
  $width?: string
  $height?: string
}

interface Defaults {
  [key: string]: string
}

const fontSize = (fs: string): string => {
  const defaults: Defaults = {
    xsmall: '14',
    small: '16',
    medium: '24',
    larger: '32',
  }
  const value = defaults[`${fs}`] || fs
  return `${value}px`
}

const fontWheigt = (fw: string): string => {
  const defaults: Defaults = {
    medium: '400',
    larger: 'bold',
  }
  const value = defaults[`${fw}`]
  return value
}

const paddingFn = (pd: string): string => {
  const defaults: Defaults = {
    xsmall: '5',
    small: '8',
    medium: '16',
    larger: '24',
    xlarger: '32',
  }
  const value = defaults[`${pd}`] ? `${defaults[`${pd}`]}px` : ''
  return value
}

const marginFn = (mg: string): string => {
  const defaults: Defaults = {
    xsmall: '5',
    small: '8',
    medium: '16',
    larger: '24',
    xlarger: '32',
  }
  const value = defaults[`${mg}`] ? `${defaults[`${mg}`]}px` : ''
  return value
}

export const Button = styled.button<IButtonStyle>`
  font-size: ${props => (props.$fs ? fontSize(props.$fs) : '')};
  font-style: ${props => props.$fStyle || ''};
  font-weight: ${props => (props.$fw ? fontWheigt(props.$fw) : '')};
  font-family: ${props => props.$fFamily || ''};
  text-align: ${props => props.$tAlign || ''};
  text-transform: ${props => props.$tTransform || ''};
  color: ${props => props.$color || ''};
  background-color: ${props => props.$bgColor || ''};
  padding: ${props => (props.$pd ? paddingFn(props.$pd) : '')};
  padding-top: ${props => (props.$pdTop ? props.$pdTop + 'px' : '')};
  padding-left: ${props => (props.$pdLeft ? props.$pdLeft + 'px' : '')};
  padding-right: ${props => (props.$pdRigth ? props.$pdRigth + 'px' : '')};
  padding-bottom: ${props => (props.$pdBottom ? props.$pdBottom + 'px' : '')};
  margin: ${props => (props.$mg ? marginFn(props.$mg) : '')};
  margin-top: ${props => (props.$mgTop ? props.$mgTop + 'px' : '')};
  margin-left: ${props => (props.$mgLeft ? props.$mgLeft + 'px' : '')};
  margin-right: ${props => (props.$mgRigth ? props.$mgRigth + 'px' : '')};
  margin-bottom: ${props => (props.$mgBottom ? props.$mgBottom + 'px' : '')};
  width: ${props => (props.$width ? props.$width + 'px' : '')};
  height: ${props => (props.$height ? props.$height + 'px' : '')};
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &.success,
  &.success-ligth,
  &.info,
  &.info-ligth,
  &.error,
  &.error-ligth,
  &.alert,
  &.alert-ligth {
    width: ${props => (props.$width ? props.$width + 'px' : '100px')};
    font-weight: ${props => (props.$fw ? fontWheigt(props.$fw) : 'bold')};
    text-align: ${props => props.$tAlign || 'center'};
    border-radius: 16px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    border: none;
    padding: ${props => (props.$pd ? paddingFn(props.$pd) : '8px')};
  }

  &.success {
    color: #ffffff;
    background-color: #83d563;
  }

  &.info {
    color: #ffffff;
    background-color: #00abff;
  }

  &.error {
    color: #ffffff;
    background-color: #ff0000;
  }

  &.alert {
    color: #000000;
    background-color: #f1ea13;
  }

  &.success-ligth {
    color: #83d563;
    border: 2px solid #83d563;
  }

  &.info-ligth {
    color: #00abff;
    border: 2px solid #00abff;
  }

  &.error-ligth {
    color: #ff0000;
    border: 2px solid #ff0000;
  }

  &.alert-ligth {
    color: #f1ea13;
    border: 2px solid #f1ea13;
    background-color: #8d877a;
  }

  &.rounded {
    border-radius: 8px;
  }

  &.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    transform: translatey(2px);
  }
`
