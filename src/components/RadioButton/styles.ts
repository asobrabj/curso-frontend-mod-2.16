import styled from 'styled-components'

interface IRadioButtonStyle {
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
  $bdColor?: string
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

export const RadioButton = styled.div<IRadioButtonStyle>`
  font-size: ${props => (props.$fs ? fontSize(props.$fs) : '')};
  font-style: ${props => props.$fStyle || ''};
  font-weight: ${props => (props.$fw ? fontWheigt(props.$fw) : '')};
  font-family: ${props => props.$fFamily || ''};
  text-align: ${props => props.$tAlign || ''};
  text-transform: ${props => props.$tTransform || ''};
  color: ${props => props.$color || ''};
  background-color: ${props => props.$bgColor || ''};
  padding: ${props => (props.$pd ? paddingFn(props.$pd) : '8px')};
  padding-top: ${props => (props.$pdTop ? props.$pdTop + 'px' : '')};
  padding-left: ${props => (props.$pdLeft ? props.$pdLeft + 'px' : '')};
  padding-right: ${props => (props.$pdRigth ? props.$pdRigth + 'px' : '')};
  padding-bottom: ${props => (props.$pdBottom ? props.$pdBottom + 'px' : '')};
  margin: ${props => (props.$mg ? marginFn(props.$mg) : '0')};
  margin-top: ${props => (props.$mgTop ? props.$mgTop + 'px' : '')};
  margin-left: ${props => (props.$mgLeft ? props.$mgLeft + 'px' : '')};
  margin-right: ${props => (props.$mgRigth ? props.$mgRigth + 'px' : '')};
  margin-bottom: ${props => (props.$mgBottom ? props.$mgBottom + 'px' : '')};
  max-width: ${props => (props.$width ? props.$width + 'px' : '200px')};
  height: ${props => (props.$height ? props.$height + 'px' : '')};
  border-color: ${props => props.$bdColor || ''};
  border: 1px solid #00abff;

  > input {
    margin: 0;
    padding: 0;
  }

  &.scale {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  &.options {
    > label {
      display: block;
      margin: 8px 0;
      > div {
        display: flex;
        align-items: center;
        > input {
          margin: 0 5px;
        }
      }
    }
  }

  &.primary {
    margin: 1px;
    border-radius: 8px;
  }

  &.secondary {
    margin: 1px;
    border-radius: 8px 0;
  }

  &.error {
    border: 1px solid #ff0000;
    color: ${props => props.$color || '#ff0000'};
    &:focus {
      border: 2px solid #ff0000;
    }
  }

  &.rounded {
    border-radius: 8px;
  }

  &:focus {
    outline: none;
    border: 2px solid #00abff;
    margin: 0;
  }
`
