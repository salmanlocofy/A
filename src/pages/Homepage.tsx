import { FunctionComponent } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Frame from "../components/Frame";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <Header />
      <Content />
      <Frame />
      <section className={styles.reviews}>
        <SubscribeSection />
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
