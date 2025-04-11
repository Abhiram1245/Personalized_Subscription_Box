import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f0f2f5, #d9e2ec)',
        fontFamily: "'Arial', sans-serif",
        position: 'relative',
        padding: '20px',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      {/* Top-right image */}
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-doing-video-call-with-smartphone-on-bean-bag-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--online-conversation-office-meeting-business-conference-work-pack-illustrations-4688330.png"
        alt="Boy Doing Video Call"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '250px',
          height: '250px',
          objectFit: 'contain',
        }}
      />

      {/* Bottom-left mirrored image */}
      <img
        src="https://www.codermine.com/boy.png"
        alt="Boy Mirrored"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          width: '220px',
          height: '260px',
          objectFit: 'contain',
          transform: 'scaleX(-1)',
        }}
      />
      
      <h1
        style={{
          fontSize: '35px',
          fontWeight: 'bold',
          color: '#444',
          textShadow: '1px 1px 2px #ccc',
        }}
      >
        Welcome to
      </h1>

      <h2
        style={{
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#4B3F72',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        PERSONALIZED SUBSCRIPTION BOX GENERATOR
      </h2>

      <p
        style={{
          fontSize: '18px',
          color: '#2c3e50',
          marginTop: '10px',
          marginBottom: '30px',
          textShadow: '1px 1px 2px #eee',
        }}
      >
        <b><i>Explore and manage your subscription options</i></b>
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button
          onClick={() => navigate('/login')}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            border: 'none',
            backgroundColor: '#1D4ED8',
            color: '#fff',
            borderRadius: '30px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1E40AF')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#1D4ED8')}
        >
          Sign Up →
        </button>

        <button
          onClick={() => navigate('/books-entertainment')}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#10B981',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#059669')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#10B981')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
