interface Props {
  children: any
  bg?: string
  px?: string
}

const Card = ({ children, bg, px }: Props) => {
  return (
    <div>
      <br />
      <br />
      {children}
    </div>
  )
}

export default Card
