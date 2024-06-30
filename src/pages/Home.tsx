import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Headline from '../components/Headline';

import WorkList from '../components/WorkList';
import Scroller from '../components/Scroller';

function Home() {
  return (
    <>
      <div className='relative overflow-hidden add-noise'>
        <Headline />
        <Grid />
        <Scroller />
        <WorkList />
        <Scroller />
        <Footer />
      </div>
    </>
  );
}

export default Home;
