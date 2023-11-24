import { useState } from 'react'
import * as S from './styles'

export interface ISelect {
  listOptions: Array<string>
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
}

export default function Select({
  listOptions,
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
  className = 'primary',
  width,
  height,
  placeholder,
  bdColor,
}: ISelect) {
  const [visible, setVisible] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState('Escolha uma opção')

  const changeVisible = () => {
    setVisible(v => !v)
  }
  const handleOptionClick = (value: string) => {
    setSelectedValue(value)
    setVisible(false)
  }
  return (
    <S.Select
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
      $visible={visible}
      $bdColor={bdColor}
    >
      <div className="custom-select">
        <div
          className={`custom-select-trigger ${className}`}
          onClick={changeVisible}
        >
          {selectedValue}
        </div>
        <div className={`custom-options ${className}`}>
          {listOptions &&
            listOptions.map(option => (
              <div
                key={option}
                className="custom-option"
                data-value={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
        </div>
        <select id="real-select">
          {listOptions &&
            listOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      </div>
    </S.Select>
  )
}
