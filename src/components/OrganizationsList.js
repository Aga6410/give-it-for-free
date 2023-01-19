import React from 'react';
import { projectFirestore } from "../Firebase/config";
import { useEffect,useState } from 'react';
import List from './List';
import Posts from './PaginationPosts';
import Pagination from './Pagination';
import decoration from "../assets/Decoration.svg"

 const OrganizationsList = () => {
    const [data, setData]= useState([]);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false); 
    const [org, setOrg] = useState('organizationsdetails');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage] = useState(3);
        // Get current
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const [currentPosts, setCurrentPost] = useState(data.slice(indexOfFirstPost, indexOfLastPost));

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() =>{
        setIsPending(true);

        projectFirestore.collection(org).get().then((snapshot) => {
            if (snapshot.empty) {
            setError('No organizations to load')
            setIsPending(false);
        } else {
          let results = [] 
          snapshot.docs.forEach(doc => {
            results.push({ id: doc.id, ...doc.data() })
          })
          setData(results)
          setIsPending(false)
        }

        }).catch(err => {
           setError(err.message)
           setIsPending(false)
        })

    },[org])

    useEffect(() =>  {
      setCurrentPost(data.slice(0+(3*currentPage), 2+(3*currentPage)));
    }, [data, currentPage]);

  return (
    <div id="homeOrganizations" className='OrganizationsList_container container'>
      <div className="whoWeHelp">
          <h1>Who we help?</h1>
          <img src={decoration} alt="decoration"/>
      </div>
      <div className="changeOrganizations">
            <button 
              onClick={() => setOrg('organizationsdetails')}
            >
              Foundations
            </button>
            <button onClick={() => setOrg('organizationdetails2')}>Non-governmental <br/>organizations</button>
            <button onClick={() => setOrg('organizationdetails3')}>Local<br/>collections</button>
        </div>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'> Loading...</p>}
        {data && <List organization={data} />}
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
    </div>
  )
}

export default OrganizationsList;