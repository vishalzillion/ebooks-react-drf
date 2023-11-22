import axios from 'axios';

const Logout = () => {

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log(token)

      const response = await axios.post('http://127.0.0.1:8000/logout/', {}, {
        headers: {
          Authorization: `${token}`
        }
      });
      console.log(response)

      if (response.status === 200) {
        // Logout successful
        console.log(response.data.message);

        // Remove user info from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('username')
        localStorage.removeItem('user_type')
        // localStorage.removeItem("_grecaptcha")

        // Redirect user
        window.location.replace('/login');

      } else {
        console.log('Logout failed');
      }

    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <button
        onClick={handleLogout}
        className="text-blue-700 bg-blue-100 p-2 rounded-lg focus:outline-none h-12 w-24"
      >
        Logout
      </button>
  )

}

export default Logout;