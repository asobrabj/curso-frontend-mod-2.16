import styled from 'styled-components'

interface IFormStyle {
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

export const Heading = styled.h1``

export const Form = styled.form<IFormStyle>`
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
  max-width: ${props => (props.$width ? props.$width + 'px' : '600px')};
  > div {
    &.grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      gap: 24px;
    }

    &.grid-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 24px;

      > .select,
      > .text-area {
        grid-column: span 2;
      }
    }

    &.block {
      > .input {
        margin-bottom: ${props =>
          props.$mgBottom ? props.$mgBottom + 'px' : '24px'};
      }

      > .select,
      > .text-area {
        margin-bottom: ${props =>
          props.$mgBottom ? props.$mgBottom + 'px' : '24px'};
      }
    }
  }
`
