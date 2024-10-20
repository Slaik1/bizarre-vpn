import { FC } from "react";
import HelpText from "./HelpText/HelpText";
import HelpAffix from "./HelpAffix/HelpAffix";


const HelpPage: FC = () => {

  return (
    <>
    <HelpAffix/>
    <HelpText/>
    </>
  );
};

export default HelpPage;
