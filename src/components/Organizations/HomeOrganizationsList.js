import React from 'react';
import { projectFirestore } from "../../Firebase/config";
import { useEffect, useState } from 'react';
import Posts from './PaginationPosts';
import Pagination from './Pagination';
import decoration from "../../assets/Decoration.svg"

 const HomeOrganizationsList = () => {
    const [data, setData]= useState([]);
    const [totalPosts, setTotalPosts] = useState(0);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false); 
    const [org, setOrg] = useState('organizationsdetails');
    const [loading ] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage] = useState(3);
        // Get current
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const [currentPosts, setCurrentPost] = useState(data.slice(0+(3*currentPage), 3+(3*currentPage)));

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
          setTotalPosts(results.length)
        }

        }).catch(err => {
           setError(err.message)
           setIsPending(false)
        })

    },[org])

    useEffect(() =>  {
      setCurrentPost(data.slice(0+(3*currentPage), 3+(3*currentPage)));
    }, [data, currentPage]);

  return (
    <div id="homeOrganizations" className='OrganizationsList_container container'>
      <div className="whoWeHelp">
          <h1>Who we help?</h1>
          <img src={decoration} alt="decoration"/>
      </div>
      <div className="changeOrganizations">
          <button onClick={() => setOrg('organizationdetails2')}>Foundations</button>
          <button onClick={() => setOrg('organizationsdetails')}>Organizations</button>
          <button onClick={() => setOrg('organizationdetails3')}>Local<br/>collections</button>     
      </div>
      <div className='description'>
      {/* {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'> Loading...</p>}
         setOrg ={organizationdetails2.desc}  */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </div>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'> Loading...</p>}
        {/* {data && <List organization={data} />} */}
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
        />
    </div>
  )
}

export default HomeOrganizationsList;