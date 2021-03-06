import React, {Link} from 'react'
import {withNotes} from '../hocs'

const Notes = ({notes, ...props}) => (
  <ul {...props}>
    {notes.map(({_id, title, author, collaborators}) => (
      <li key={_id}>
        <p>
          {title} [{author}]
        </p>
        {collaborators ? (
          <ul>
            {collaborators.map(id => (
              <li key={id}>{id}</li>
            ))}
          </ul>
        ) : null}
      </li>
    ))}
  </ul>
)

export default withNotes(Notes)
