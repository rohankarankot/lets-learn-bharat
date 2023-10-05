// import * as admin from 'firebase-admin';
// import * as FAdmin from 'firebase-admin/lib/auth';
// import * as functions from 'firebase-functions';
// import { onAuthStateChanged } from 'firebase/auth';
// import { useEffect, useState } from 'react';
// import { auth } from '../../../config/firebase.config';
// export const findUnusedUsers = functions.https.onCall((data, context) => {
//   return listAllUsers().then(allUsers => {
//     // Perform operations on allUsers if needed
//     return allUsers;
//   });
// });

// const listAllUsers = (nextPageToken?: string, accumulatorUsers: FAdmin.auth.UserRecord[] = []): Promise<FAdmin.auth.UserRecord[]> => {
//   return admin.auth().listUsers(1000, nextPageToken)
//     .then(function(listUsersResult) {
//       const users = [...accumulatorUsers, ...listUsersResult.users];
//       if (listUsersResult.pageToken) {
//         return listAllUsers(listUsersResult.pageToken, users);
//       } else {
//         return users;
//       }
//     })
//     .catch(error => {
//       // Handle error if needed
//       throw error;
//     });
// };

// const User = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Call listAllUsers to retrieve all users
//     listAllUsers()
//       .then(allUsers => {
//         setUsers(allUsers);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err);
//         setLoading(false);
//       });

//     // Listen for changes in authentication state
//     const unsubscribe = onAuthStateChanged(auth, user => {
//       if (user) {
//         // User is signed in
//         console.log('User is signed in:', user);
//       } else {
//         // User is signed out
//         console.log('User is signed out');
//       }
//     });

//     return () => {
//       // Unsubscribe from the authentication listener when component unmounts
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <div>
//       <h2>All Users</h2>
//       {loading ? (
//         <p>Loading users...</p>
//       ) : error ? (
//         <p>Error: {error.message}</p>
//       ) : (
//         <ul>
//           {users.map((user) => (
//             <li key={user.uid}>
//               Email: {user.email}
//               {/* Add more user data fields as needed */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default User;

const User = () => {
  return (
    <div>User</div>
  )
}

export default User