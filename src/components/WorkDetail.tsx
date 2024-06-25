// src/pages/WorkDetail.js
import { useParams } from 'react-router-dom';
import works from '../data/works';

function WorkDetail() {
  let { id } = useParams();
  let work = works.find((work) => work.id === parseInt(id));
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
