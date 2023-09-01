const index = async ({ id }: UserId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const user = await response.json();

    return (
      <div className="bg-gray-100 p-4 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">City: {user.address.city}</p>
      </div>
    );
  } catch (error) {
    console.error("An error occurred:", error);
    return <div>Error fetching user data</div>;
  }
};

export default index;
