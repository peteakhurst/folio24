// src/pages/WorkDetail.js
import { useParams } from 'react-router-dom';
import works, { Work } from '../data/works';

function WorkDetail() {
  const { id } = useParams<{ id: string }>();
  const work: Work | undefined = works.find(
    (work: Work) => work.id === parseInt(id || '')
  );

  if (!work) {
    return <div>Work not found</div>;
  }
  // You can use the id to fetch or display the relevant work details
  return (
    <div>
      <h2>Work Detail for {id}</h2>
      {/* Render detailed information about the work item here */}
      <h4 className='font-bold text-cream'>{work.heading}</h4>
      <img src={work.imgSrc} alt={work.heading} />
    </div>
  );
}

export default WorkDetail;
