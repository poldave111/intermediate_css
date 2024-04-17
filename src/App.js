import styles from './App.module.scss';
import Splash from './components/Splash/Splash';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import WorkSection from './components/WorkSection/WorkSection';
import FormSection from './components/FormSection/FormSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Splash />
      <Services />
      <Work />
      <WorkSection />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;
