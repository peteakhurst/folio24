import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Headline from '../components/Headline';

import WorkList from '../components/WorkList';
import Scroller from '../components/Scroller';

function Home() {
  return (
    <>
      <section className='add-noise'>
        <Headline />
        <Grid />
        <Scroller />
      </section>
      <WorkList />
      <Scroller />
      <Footer />
    </>
  );
}

export default Home;
