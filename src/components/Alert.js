import React from 'react'

export default function Alert({alert}) {
  const capitalze = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);
  }
  return (
    
      alert&&<div class={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalze(alert.type)}</strong>: {alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    
  )
}
