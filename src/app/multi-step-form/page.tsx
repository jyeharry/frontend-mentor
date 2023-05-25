import Card from "@/multi-step-form/components/Card";
import { ubuntu } from "@/multi-step-form/fonts";
import "@/multi-step-form/styles/base/globals.scss";
import styles from "@/multi-step-form/styles/pages/root.module.scss";

const MultiStepFormRoot = () => {
  return (
    <main className={`${styles.msfMain}`} style={ubuntu.style}>
      <Card>hello</Card>
    </main>
  );
};

export default MultiStepFormRoot;
