import React from 'react'

function ErrorMessage() {
  return (
    <div className="light-green">
      <h2 className="error-message">No Definitions Found</h2>
      <p style={{ 'marginTop': '20px', 'textAlign': 'center' }}>
        Sorry pal, we couldn't find definitions for the word you were looking for.
        <br />
        You can try the search again at later time or head to the web instead.
      </p>
    </div>
  )
}

export default ErrorMessage;