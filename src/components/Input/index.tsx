import * as S from './styles'

export interface IInput {
  fs?: 'xsmall' | 'small' | 'medium' | 'larger' | string
  fStyle?: 'normal' | 'italic'
  fw?: 'medium' | 'larger'
  fFamily?: string
  tAlign?: 'start' | 'end' | 'justify' | 'center'
  tTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  color?: string
  bgColor?: string
  pd?: 'xsmall' | 'small' | 'medium' | 'larger' | 'xlarger' | 'none'
  pdTop?: string
  pdBottom?: string
  pdRigth?: string
  pdLeft?: string
  mg?: 'xsmall' | 'small' | 'medium' | 'larger' | 'xlarger' | 'none'
  mgTop?: string
  mgBottom?: string
  mgRigth?: string
  mgLeft?: string
  className?: string
  width?: string
  height?: string
  placeholder?: string
  bdColor?: string
  type?:
    | 'text'
    | 'tel'
    | 'password'
    | 'email'
    | 'time'
    | 'date'
    | 'radio'
    | 'checkbox'
    | 'file'
    | 'hidden'
    | 'number'
  required: boolean
}

export default function Input({
  fs,
  fStyle,
  fw,
  fFamily,
  tAlign,
  tTransform,
  color,
  bgColor,
  pd,
  pdTop,
  pdRigth,
  pdLeft,
  pdBottom,
  mg,
  mgTop,
  mgRigth,
  mgLeft,
  mgBottom,
  className,
  width,
  height,
  placeholder,
  bdColor,
  type = 'text',
  required,
}: IInput) {
  return (
    <S.Input
      className={className}
      $fs={fs}
      $fw={fw}
      $fStyle={fStyle}
      $fFamily={fFamily}
      $tAlign={tAlign}
      $tTransform={tTransform}
      $color={color}
      $bgColor={bgColor}
      $pd={pd}
      $pdTop={pdTop}
      $pdRigth={pdRigth}
      $pdLeft={pdLeft}
      $pdBottom={pdBottom}
      $mg={mg}
      $mgTop={mgTop}
      $mgRigth={mgRigth}
      $mgLeft={mgLeft}
      $mgBottom={mgBottom}
      $width={width}
      $height={height}
      placeholder={placeholder}
      $bdColor={bdColor}
      type={type}
      required={required}
    />
  )
}
