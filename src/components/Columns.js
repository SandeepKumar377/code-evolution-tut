import React from 'react'

function Columns() {
    const items = [
        {
            id: 1,
            title: 'ReactJS',
        },
        {
            id: 2,
            title: 'Vue',
        },
        {
            id: 3,
            title: 'Angular',
        }
    ]
    return (
        <React.Fragment>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <tr>
                         <td>Name</td>
                         <td>{item.title}</td>
                         </tr>
                    </React.Fragment>
                ))
            }
           
            
        </React.Fragment>
    )
}

export default Columns
