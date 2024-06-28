import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Headline from '../components/Headline';
import WorkList from '../components/WorkList';

function Home() {
  return (
    <>
      <section className='bg-oliveGreen add-noise'>
        <Headline />
        <Grid />
      </section>
      <WorkList />
      <Footer />
    </>
  );
}

export default Home;
