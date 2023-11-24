import * as S from './styles'

export interface IRadioButton {
  listOptions: Array<string>
  name: string
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
  className: string
  width?: string
  height?: string
  placeholder?: string
  bdColor?: string
}

export default function RadioButton({
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
  listOptions,
  name,
}: IRadioButton) {
  return (
    <S.RadioButton
      className={`primary ${className}`}
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
    >
      {className?.includes('options')
        ? listOptions &&
          name &&
          listOptions.map(option => (
            <label key={option} htmlFor="">
              <div>
                <input type="radio" name={name} />
                <span>{option}</span>
              </div>
            </label>
          ))
        : listOptions &&
          name &&
          listOptions.map(option => (
            <input key={option} type="radio" name={name} />
          ))}
    </S.RadioButton>
  )
}
