// src/pages/WorkDetail.js
import { useParams } from 'react-router-dom';

function WorkDetail() {
  let { id } = useParams();
  // You can use the id to fetch or display the relevant work details
  return (
    <div>
      <h2>Work Detail for {id}</h2>
      {/* Render detailed information about the work item here */}
    </div>
  );
}

export default WorkDetail;