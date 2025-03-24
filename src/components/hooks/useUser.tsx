// "use client"
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BACKEND_URL, HOOKS_URL } from "@/app/config";

// export default function useUser() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(`${BACKEND_URL}/api/v1/user`, {
//         headers: {
//           Authorization: localStorage.getItem("token"),
//         },
//       })
//       .then((res) => {
//         setUser(res.data.user);
//         setLoading(false);
//       });
//   }, []);

//   return {
//     loading,
//     user,
//   };
// }
