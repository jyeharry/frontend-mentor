import theme from "@/multi-step-form/styles/base/variables.module.scss";

interface Props {
  children: any;
  bg?: string;
  px?: string;
}

const Card = ({ children, bg, px }: Props) => {
  return (
    <div>
      {theme.colours}
      <br />
      {theme.colours.marineBlue}
      <br />
      {children}
    </div>
  );
};

export default Card;
