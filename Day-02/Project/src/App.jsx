import "./App.css";

function Card({ name, description, image }) {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl p-4 text-center">
      <img
        src={image}
        alt={name}
        className="w-[200px] h-[200px] mx-auto rounded-full border-4 border-blue-500"
      />
      <h2 className="text-xl font-bold mt-4">{name}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Follow
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card
        className="max-w-sm bg-white shadow-lg rounded-xl p-4 text-center"
        name="John Doe"
        description="Frontend Developer | React Enthusiast"
        image="https://images.unsplash.com/photo-1742145792541-172c7ef6d0d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
      />
    </div>
  );
}

export default App;
