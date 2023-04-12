import React from 'react'

export default function Notification() {
    const [message, setMessage] = useState(null);
  
    const handleNewPostulantes = (cantidad) => {
      setMessage(`Tienes ${cantidad} nuevos postulantes`);
    };
  
    return (
      <div>
        {message && (
          <div className="card">
            <div className="card-body">
              <div className="notification">{message}</div>
            </div>
          </div>
        )}
      </div>
    );
  }