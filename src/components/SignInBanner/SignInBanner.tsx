import Image from "next/image";

import styles from "@/styles/pages/SignIn.module.scss";

export const SignInBanner = () => {
  return (
    <div className={styles["signInBanner"]}>
      <div className={styles["signInHeader"]}>
        <Image
          src={"/images/signIn/logo.svg"}
          alt={"Workflow Logo"}
          width={50}
          height={50}
          className={styles["signInLogo"]}
        />
        <h3 className={styles["signInHeaderTitle"]}>Workroom</h3>
      </div>
      <h1 className={styles["signInTitle"]}>
        Your place to work Plan. Create. Control.
      </h1>
      <Image
        priority
        src={"/images/signIn/illustration.svg"}
        alt={"Workflow Logo"}
        className={styles["signInFooter"]}
        width={500}
        height={373}
      />
    </div>
  );
};
