// import axios from 'axios';
// import React, { useState } from 'react'

// export default function Github() {
//     const [username,setUsername]=useState('');
//     const [user,setUser]=useState(null);
//     const[error,setError]=useState(null);
//     const [loading,setLoading]=useState(false)

//     const fetch_api= async()=>{

//         if(!username && !response.ok){
//             setLoading(true)
//             setError("Please enter an username")
//             throw new Error('user not found')
            
//         }
        
//         try{
//             setError('')
//             const res = await axios(`https://api.github.com/users/${username}`);
//             setUser(res.data)
//             console.log(res.data)
//         }catch(err){
//             setUser(null)
//             setError("user not found")
//         }finally{
//             setLoading(false)
//         }
        
//     }
//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         fetch_api()
//     }
//   return (


//     <div>
//         <h1>Github</h1>
//         <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
//         <button type='submit'>search</button>
//         </form>
//         {loading && <p>Loading...</p> }
//         {error && <p>{error}</p> }

//         {
//             user&&(
//                 <div className='card'>
//                     <img src={user.avatar_url} alt={user.login} />
//                     <p> Bio:{user.bio}</p>
//                     <h2>{user.created_at}</h2>
//                     <p>Followers:{user.followers}</p>
//                     <p>Respos:{user.public_repos}</p>
//                     <a href={user.html_url} target='blank' rel='noopener noreferrer'>view on github</a>
                    


//                 </div>
//             )
//         }

//     </div>
//   )
// }
import React, { useState } from 'react';

function GitHub() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    if (!username.trim()) return;
    setLoading(true);
    setError(null);
    setUser(null);
    
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>GitHub Profile Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '10px', width: '200px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Search</button>
      </form>
      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {user && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <img src={user.avatar_url} alt={user.login} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          <h2>{user.name || user.login}</h2>
          <p><strong>Bio:</strong> {user.bio || 'No bio available'}</p>
          <p><strong>Location:</strong> {user.location || 'Not specified'}</p>
          <p><strong>Followers:</strong> {user.followers}</p>
          <p><strong>Public Repos:</strong> {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      )}
    </div>
  );
}

export default GitHub;