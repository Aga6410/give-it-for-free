import React from 'react'

 const List = ({organization}) => {
  return (
    <div className="list_container container">
        {organization.map(organiazation => (
            <div key={organization.id} className="card">
                <h3>{organiazation.title}</h3>
                <p>{organiazation.description}</p>
                <p>{organiazation.items}</p>
            </div>
        ))}

    </div>
  )
}

export default List;