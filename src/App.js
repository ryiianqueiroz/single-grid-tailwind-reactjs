function App() {
  return (
    <div className="App min-h-screen bg-slate-300 relative flex justify-center items-center">
      <div className="container bg-white max-w-[700px] md:max-w-[320px] mt-10 mb-10 sm:max-w-[250px]">
        
        <div className="h-1/2">
          <div className="p-10">
            <h1 className="text-2xl text-[#1da16c] font-medium sm:text-[18.4px]">Join our community</h1>
            <h2 className="text-xl text-[#94c71c] mt-5 sm:text-[15px]">30-day, hassle-free money back guarantee</h2>
            <p className="mt-2 text-slate-500 sm:text-[14px]">Gain access to our full library of tutorials along with expert code reviews. 
            Perfect for any developers who are serious about honing their skills.</p>
          </div>
        </div>
        
        <div className="block-green flex h-1/2 md:flex-col">
          <div className="w-1/2 bg-teal-500 md:w-full">
            <div className="p-10">
              <h2 className="text-white text-xl font-semibold sm:text-[16px]">Monthly Subscription</h2>
              <div className="flex mt-2 place-items-center">
                <h3 className="text-white text-3xl font-semibold sm:text-[25px]">$29</h3>
                <p className="ml-2 text-slate-200">per month</p>
              </div>
              <p className="text-white font-xl mt-2">Full access for less than $1 a day</p>
              <button className="p-4 w-full bg-[#8af103] mt-6 text-white font-bold text-xl">Sign Up</button>
            </div>
          </div>
          
          <div className="w-1/2 bg-teal-500/75 md:w-full">
            <div className="p-10">
              <h4 className="text-white text-xl font-semibold">Why Us</h4>

              <div className="mt-3 text-[#f5f5f5] sm:text-[15px]">
                <p>Tutorials by industry experts</p>
                <p>Peer &amp; expert code review</p>
                <p>Coding exercises</p>
                <p>Access to our GitHub repos</p>
                <p>Community forum</p>
                <p>Flashcard decks</p>
                <p>New videos every week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
