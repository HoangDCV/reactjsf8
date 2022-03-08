import {useState} from 'react';

function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob]= useState('')
  const handlerAddJob = () => {
    setJobs( prev => [...prev, job])
    setJob('')
  }
  const handleDelete = (jobDelete) => {
    setJobs(jobs.filter(job=> job !== jobDelete))
  }
  return (
    <div className='App-todo' style={{padding : 50}}>
      <input 
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handlerAddJob}>Add</button>

      <ul>
      {
        jobs.map((job, index) => (
          <li key={index}>{job} 
            <button onClick={() => handleDelete(job)}>Delete</button>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default App;
