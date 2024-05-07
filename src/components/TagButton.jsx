import React from 'react'
import Link from '@mui/material/Link';
import './TagButton.css'

const TagButtons = ({iconButton, tag, href}) => {
  return (
    <div className='tagButton'>
        <Link
              href={href} underline="none"
              sx={{ color: 'white'}}
        >
            {iconButton}
        </Link>
      <Link href={href} underline="none"
        sx={{ color: 'white' }}>
            {tag}
        </Link>
    </div>
    
  )
}

export default TagButtons
