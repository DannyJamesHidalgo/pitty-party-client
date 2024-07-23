

export  const AdoptionApplicationForm = () => (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form className='w-full max-w-4xl mx-auto my-16 p-10 rounded-lg shadow-xl bg-white overflow-hidden space-y-8'>
        <h2 className="text-3xl font-bold text-center py-4">Adopt a Dog Application</h2>
        <div className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600" required />
          <input type="email" placeholder="Email Address" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600" required />
          <input type="tel" placeholder="Phone Number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600" required />
          <textarea placeholder="Why do you want to adopt?" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 resize-none" rows="4" required></textarea>
          <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200">Submit Application</button>
        </div>
      </form>
    </div>
  );
  
   