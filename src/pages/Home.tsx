import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Headline from '../components/Headline';
import WorkList from '../components/WorkList';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <section className='bg-oliveGreen add-noise'>
        <Navbar />
        <Headline />
        <Grid />
      </section>
      <WorkList />
      <Footer />
    </>
  );
}

export default Home;
